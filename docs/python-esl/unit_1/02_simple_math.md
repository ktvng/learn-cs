<script setup>
import InputBox from '/components/InputBox.vue'
</script>

# Simple Math #
In the first lesson, we saw how we could print text using Python! Now, let us explore what else we can do. Read the line of code below.

```py
print(9+10)
```

Before running this program, what do you think the program will output? Write your guess in the box below.

<InputBox name="u1-l2-q1" answer="19" />

Copy the code into your Python editor and run it. Did the result match what you thought would happen?

## Math Operations ##

Python can do math for us. Try it out yourself.

- `+` this signifies addition. For example: `3 + 5`
- `-` this signifies subtraction. For example: `10 - 7`
- `*` this signifies multiplication. For example: `12 * 2`
- `/` this signifies division. For example: `15 / 3`

Use Python to calculate the answer to each of the expressions above.

## Order of Operations ##

Consider the expression below:

```
5 + 2 * 2
```

What do you think the answer is? Write your guess in the box below.

<InputBox name="u1-l2-q2" answer="9" />

This is an example of ambiguity

::: info DEFINITION
**Ambiguity**: Ambiguity is the condition where there may be more than one right answer. It may occur because we do not have enough information.
:::

Why does the example above have ambiguity?

- You first perform 5 + 2 to get 7, and then you multiply 7 * 2 to get 14. Your final answer is 14.
- You first multiply 2 * 2 to get 4, and then you add 5 + 4 to get 9. Your final answer is 9.

In order to eliminate ambiguity, we use parentheses to say which math operation should be performed first.

```
5 + (2 * 2)
```

We first calculate the values inside the parentheses. This gives the expression below.

```
5 + 4
```

Now, we perform the addition to get 9. The parentheses told us what operation to do first. If we wanted to do the addition first, we would write this:

```
(5 + 2) * 2
```

## Exercises ##

::: warning EXERCISE 1
Simplify the expression:
```
17*345+6543/3+77-2+89
```

Hint: You can use Python to help you.

<InputBox name="u1-l2-q3" answer="??" />
:::


::: warning EXERCISE 2
Calculate the value of the expression below
```
14+24+14+14+4
```

<InputBox name="u1-l2-q4" answer="??" />
:::

## Recap ##
1. Python can be used as a standard calculator to simplify math equations
