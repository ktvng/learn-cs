<script setup>
const props = defineProps(['answer', 'name'])

function storeChange() {
  localStorage.setItem(props.name, document.querySelector("#" + props.name).value)
}

let lastResponse = localStorage.getItem(props.name) ?? ""
</script>
<template>
  <div>
    <input
      :id="name"
      :value="lastResponse"
      style="padding: .55em; padding-left: 1.3em; padding-right: 1.3em; color: var(--vp-c-text-2); background-color: var(--vp-c-bg-soft);
        line-height: 24px; border-radius: 8px; margin-bottom: .5em;
        border-width: .11em; border-color: #5468ff; border-style: solid; width: 32em;
        font-size: 14px; font-family: var(--vp-font-family-base);"
      @change="storeChange"
      placeholder="Your answer: " />
  </div>
</template>
<script>
export default {
  props: {
    answer: { required: true, type: String },
    name: {required: true, type: String}
  },
};
</script>
