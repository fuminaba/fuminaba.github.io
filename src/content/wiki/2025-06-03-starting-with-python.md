---
layout: blog-post
title: "Getting started with Python"
date: 2025-06-03
series: Coding-Beginner
---

**Series:** Beginner coder  
**Description:** Write your first bit of python code, and learn how to execute files.

## Overview
This blurb will cover (briefly) what Python is and how to 'execute' Python code.

## What is Python?
<p style = 'text-align:justify;'>
As briefly mentioned in <a href = 'https://fuminaba.github.io/wiki/2025/05/20/coding-env.html'>Setting up Virtual Environments for Beginners</a>, Python is an *interpreted programming language*.
This means that a Python *interpreter* will read a text file (with the extention `.py` or other supported files) and execute instructions 
included in the file. (Assuming there are no bugs) You can think of the Python interpreter as a separate app which reads special text files and performs certain calculations or actions.
This is the simplest explanation of what Python is.<br><br>
A quick relation to virtual environments: when you want to keep separate environments, anaconda will create separate 'copies' of the Python app and specific packages specified by the user in special folders.
When you want to use a specific environment, anaconda will tell the computer which copy of the Python app to use.
</p>

## Step 1 - Setting up your IDE
<p style = 'text-align:justify;'>
Your integrated development environment (IDE) is where you will be writing your code. Some IDEs like Visual Studio Code (or VSCode) will support running your code from within the app.
You can think of IDEs as glorified text editors with added features and functionality to make coding easier. We will be using <a href = 'https://code.visualstudio.com/download'>Visual Studio Code</a>. 
Once this has been set up, you are ready to start writing code!
</p>

## Step 2 - Understand PATHs
*Forget IDEs for a second*.
<p style = 'text-align:justify;'>
When you want to run Python code, you first tell the computer (using the command prompt or terminal) that you want to use the Python interpreter (app) and then which file you want the Python interpreter to read. 
This will look like this on Windows:
</p>
```{cmd}
C:/Users/finaba> python path/to/file.py
```
<p style = 'text-align:justify;'>
Now there are some caveats. We talked about virtual environments before - how does the computer know which copy of Python to use?
When you have a virtual environment activated, the command prompt/terminal will automatically search for the copy of Python in that environment.
</p>
```{cmd}
C:/Users/finaba> conda activate my_env
(my_env) C:/Users/finaba> python path/to/file.py # This will use the Python app in the my_env environment.
```
<p style = 'text-align: justify;'>
When you <b>DON'T</b> have an environment activated, the computer will search for the first available Python saved in it's <b><i>PATH variable</i></b>.
The PATH variable stores the locations of specific apps and libraries - so when you tell the computer to do something through the command prompt/terminal, 
it will search through the apps/libraries stored in its PATH variable. If nothing is found, it will give you an error - saying it doesn't understand what you want to do.
For example:
</p>
```{cmd}
C:/Users/finaba> jenga # jenga is not a program that exists.
# Output:
'jenga' is not recognized as an internal or external command, operable program, or batch file.
```
<p style = 'text-align: justify;'>
So when you want to run Python code, it's important to tell the computer <b>WHICH</b> Python to use and <b>WHERE</b> it is.
Environments are a convenient way to do this, and IDEs will do this under the hood.
</p>

## Step 3 - Execute Code
<p style = 'text-align: justify;'>
Create an empty file, using VSCode, named <code>hello.py</code>
</p>
```{python}
import math
print("I have", math.pi, "slices of pie")
print("And the square root of 2 is", math.sqrt(2))
```
<p style = 'text-align: justify;'>
There are two ways to execute this code. The first way (simplest way) is to click the Play button which you will likely see near the top right corner.<br>
<img src = "/assets/vscode_play.PNG"/><br>
The second way is to use the terminal by first goint to <code>Terminal</code> in the tool bar and clicking <code>New Terminal</code>.
Make sure your environment is activated, then type the following commands:
</p>
```{cmd}
$ python hello.py
```
You should see:   
```
I have 3.141592653589793 slices of pie  
And the square root of 2 is 1.4142135623730951
```

## Step 4 - Troubleshooting
If you saw the expected results, congrats! You've run Python code.
Otherwise, there may be a few things wrong:
1. VS Code doesn't know which Python to use
2. VS Code doens't know what language it is

<p style = 'text-align: justify;'>
VS Code will likely tell you to select which environment or kernel to use.
Find your environment by following the VS Code prompts and this should be resolved.
Otherwise... happy debugging! and don't hesitate to ask for help.
</p>