## Variables -- changing number variables ##

In the previous lesson, we covered how to define a variable and use it throughout the program. Now we will show you that you can update variables and how to do it.

To begin this lesson, paste the following 2 lines of code into the Python editor: 

```py
my_number = 24
my_number = 25
print(my_number)
```

What do you think will get printed here? __________

While we initially set `my_number` to be 24, we updated it before we printed it to be 25.

What if we wanted to add 3 to an existing variable, would the following program do this?
```py
count = 0
count + 3
print(count)
```

What do you think will get printed here? __________

---

While you might expected 3 to get printed here, we never actually updated the value of `count` 

This is the way you would have to update the count:
```py
count = 0
count = count + 3
print(count)
```

The crucial line that updates the count in the previous program is: `count = count + 3`
where we set the `count` equal to the previous value of `count` plus `3`

---

Exercises:
1. set a variable equal to 33 and update it to be 22. print the results
2. set a variable equal to your age and then update the variable to be 2 lower than your age. print the results