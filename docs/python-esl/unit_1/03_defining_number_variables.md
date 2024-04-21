<script setup>
import InputBox from '/components/InputBox.vue'
</script>

# Names and Variables #

In the previous lesson, we learned about basic math operations and how Python can help perform calculations.

In this lesson, we will learn more about how we can use variables to refer to objects.

::: info DEFINITION
Variable: A variable is a name which is used to refer to a value. A variable can refer to a number, a string of text, or an object.
:::

## Warm up ##

To begin this lesson, paste the following 2 lines of code into the Python editor:

```py
my_number = 24
print(my_number)
```

What do you think will get printed here?

<InputBox name="u1-l3-q1" answer="24" />

---

As you might have guessed, 24 will be printed here because we assigned `my_number` the value of `24`.

---


There are 2 important details to know about a variable.
1. Its name, which is how we as programmers will interact with the variable
2. Its value, which in this case will be a number

Here's another example of how we can use a variable to store a number
```py
sum = 5 + 6
print(sum)
```

As you might expect, this program will print out `11` to the screen when run.

Lastly, we can use operations on variables as if they were the numbers themselves:
```py
sum = 11
print(sum + 2)
```
And this should print 13 as expected!

---

## Exercises ##
1. create a variable named `age` and set it equal to your age, and print that value + 2 to the screen
2. print a variable named `zero` that equals `0`
Submit here: https://forms.gle/vryURyEUuCXra9jw6

## Recap ##
1. We can use variables with human readable names to store, access numbers.
2. These variables can be used in place of numbers in math expressions and equations
