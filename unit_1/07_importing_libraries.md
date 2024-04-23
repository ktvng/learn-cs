# Libraries -- importing variables and functions #

In the previous lesson, we covered how to define a variable and use it throughout the program. Now we will show you that you can update variables and how to do it.

To begin this lesson, paste the following lines of code into the Python editor: 

```py
import math

my_variable = math.pi
print(my_variable)
```

What is printed after running the program? 

<InputBox name="u7-l1-q1" answer="??" />


Let's break down what we're doing here, in the first line of code, we are importing what is known as a library. In this example, it's the `math` library

::: info DEFINITION
**Library**: A library is a collection of code that has already been written that we as programmers can leverage rather than recreate.
::: 

In Python, we can access the specific code contained within a library by using the name of the library with a `.` after, followed by the name of variable.

Some libraries also contain functions when imported. Try copying and running the following program.

```py
import math

my_number = math.fabs(-4)
print(my_number)
```

What do you think gets printed here after running the program? 

<InputBox name="u7-l1-q2" answer="??" />


::: info DEFINITION
**Function**: A programming function is similar to a mathematical function where it takes in 0 or more arguments separated by commas and has the ability to return a simplified value as the result. All functions are identifiable with the `(` `)` around any arguments and, if there is more than 1 argument, all following values will be separated by commas.
::: 

Lets understand whats happening on the second line of code: `my_number = math.fabs(-4)`. This is an example of how we can leverage library functions. Calling functions should look somewhat familiar, as the `print()` command that we've used in the past is also a Python function that takes one argument! 

Some functions return a value after the code runs, and we can store that returned value in the variable `my_number`, similar to how we have created variables in the past

The `math.fabs()` function takes in a single argument (`-4` in the example), and returns the absolute value of the number we give it. The result of this library function can be stored and printed in a variable like we have been doing in past lessons. And we can identify `math.fabs(-4)` as a function because of the `(` `)`.  

---

## Exercises ##
1. set a variable equal to 144 and find the square root using the `math.sqrt()` function. print the results
2. find the 5th power of 2 using `math.pow(2, 5)` function. print the results
3. print out `math.e` and record the value of `e`

## Recap ##
1. Variables and functions can be imported as libraries and leveraged to create your own programs
2. Functions come in many forms, but all can be recognized with `(` `)`
