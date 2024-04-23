# Equality #

### Learning Objective ###
1. If two things are equal, the order we
2. Python can help us distinguish if two things are equal.


### Lesson ###
In math, we use the equals sign ('=') when we want to say two things are the same. For example the equation, `1 + 1 = 2` tells us that the left side, `1 + 1` is the same as the right side, `2`.

If an equation is correct, we say that it is **True**. So `1 + 1 = 2` is **True**. But if an equation is incorrect or wrong, we say it is **False**. The equation `1 + 1 = 3` is **False**

A computer can help us solve math equations. *Try this*: Copy and paste the code below in your editor. What happens when you run it?

```py
print(1 + 1 == 2)
```

You should notice that the computer displays **True**. This is because the equation `1 + 1 == 2` is **True**.

Careful! Did you notice that when we asked the computer to check our equation, a double equal sign `==` was used, not a single equals sign `=`. When we program, to check if two things are the same, we always use two equals signs `==`.

### Try this ###
1. Run the code below and see what happens. Is this true or false?
    ```py
    print(3 + 6 == 9)
    ```

2. What if we change the order? Is this true of false?
    ```py
    print(9 == 3 + 6)
    ```

3. Python can help us do math. Is this equation True or False? `156 * 45 == 8020`

4. What happens if we forget to use a double equals sign?
    ```py
    print(9 = 3 + 6)
    ```

### Equality with variables ###

Sometimes it can be harder to tell if two things are the same. Consider the example below.

```py
number_one = 47
number_two = 47

print(number_one == number_two)
```

What do you think with be printed out?
