<script lang="ts">
const ready = ref(false)
const inputBuffer = new SharedArrayBuffer(1024)
const inputData = new Uint8Array(inputBuffer)
const waitBuffer = new SharedArrayBuffer(4)
const waitFlag = new Int32Array(waitBuffer)
const encoder = new TextEncoder()

const worker = new Worker(new URL('./worker.js', import.meta.url), {
  type: 'module'
})

worker.addEventListener('message', () => {
  ready.value = true
  worker.postMessage({ inputBuffer, waitBuffer })
}, { once: true })
</script>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { EditorView, basicSetup } from 'codemirror'
import { pythonLanguage } from '@codemirror/lang-python';

const props = defineProps<{ code: string }>()

let parent = ref<HTMLDivElement | null>(null)
let editor: EditorView | null = null

onMounted(() => {
  let code = localStorage.getItem("last-editor-item") ?? props.code ?? ""
  console.log(code)
  console.log(code.match(/\n/g) ?? [])
  let line_count = (code.match(/\n/g) ?? []).length
  code += (line_count < 9) ? "\n".repeat(9-line_count) : ""
  editor = new EditorView({
    extensions: [basicSetup, pythonLanguage],
    parent: parent.value!,
    doc: code
  })
})

const id = crypto.randomUUID()
const output = ref('')
const running = ref(false)
const just_saved = ref(false)

worker.addEventListener('message', async (e) => {
  if (e.data.id !== id) return

  if (e.data.input) {
    // hack to allow time for Python input()'s prompt to output first
    await new Promise(r => setTimeout(r, 50))

    const inputArry = encoder.encode(prompt() ?? '')
    Atomics.store(inputData, 0, inputArry.length)
    for (let i = 0; i < inputArry.length; i++)
      Atomics.store(inputData, i + 1, inputArry[i])

    Atomics.store(waitFlag, 0, 1)
    Atomics.notify(waitFlag, 0)
    Atomics.store(waitFlag, 0, 0)
  }
  if (e.data.output) output.value += e.data.output

  if (e.data.done) {
    // TODO: get rid of this artificial wait
    await new Promise(r => setTimeout(r, 2000))
    running.value = false
  }
})

function run() {
  if (!editor) return

  let code = editor.state.doc.toString()
  output.value = ''
  running.value = true
  worker.postMessage({ id, code })
}

async function save() {
  if (!editor) return

  let code = editor.state.doc.toString()
  localStorage.setItem("last-editor-item", code)
  just_saved.value = true
  await new Promise(r => setTimeout(r, 2000))
  just_saved.value = false
}
</script>

<template>
  <div style="padding-top: 1em; padding-bottom: 1em;">
    <button data-v-2dba8ca9="" class="VPButton medium alt" @click="save" style="margin-right: .5em;">
      {{ just_saved ? 'Saved!' : 'Save' }}
    </button>
    <button data-v-2dba8ca9="" class="VPButton medium brand" @click="run" :disabled="running || !ready">
      {{ ready ? (running ? 'Running...' : 'Run') : 'Loading Python...' }}
    </button>
  </div>
  <div ref="parent" style="padding-bottom: 1em;"/>
  <h3>Output</h3>
  <pre v-bind:style="{ backgroundColor: output ? '#f5f5f5' : '#ffffff'}" style="padding: 1em;">{{ output }}</pre>
</template>
