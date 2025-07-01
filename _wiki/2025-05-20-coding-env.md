---
layout: blog-post
title: "Setting up Virtual Environment for Beginners"
date: 2025-05-20
series: Coding-Beginner
---

**Series:** Beginner coder  
**Description:** Introduction to virtual environments and set up for virtual beginners in research setting. 

## Overview
**Note:** Although useful for multiple applications, this post is for research settings.  
Welcome! This post will explore what a virtual environment is, why its useful, and how to set it up!  
[Skip to tutorial](#how-to-set-up-an-environment)

## What is a virtual environment?
<p style = "text-align: justify;">
Python is an <i>interpreted programming language</i>, meaning in <i>interpreter</i> reads Python code line by line, and executes code. It can be thought of as an application which reads text files (with a <code>.py</code> extension) and performs actions accordingly. As such, Python often depends on external packages, or <i>dependencies</i>, to handle specific functionalities or behaviors (actually, almost all coding projects depend on code written previously by others, some may refer to this as 'standing on the shoulder of giants').
</p>
<p style = "text-align: justify;">
Now, depending on the specific project or analysis, you may require different packages and/or different versions of packages. For example: project A requires <code>pyradiomics</code> for radiology feature calculation (which itself requires <code>Python ver 3.9</code>) whereas project B may depend on packages which require a newer version of Python. This is where virtual environments become useful!
</p>
<p style = "text-align: justify;">
Virtual environments are a convenient way to manage dependencies of different projects. It provides an 'environment' where a specific versions of Python and relevant dependencies are installed for use. There are many ways of managing these virtual environments, but a convenient method is to use anaconda, a software for managing environments for data science (among other things).
</p>

## How to set up an environment
<p style = "text-align: justify;">
Although many ways exists to manage virtual environments, the method covered here is using anaconda. Anaconda is an application used for data science which comes with many convenient tools such as the <code>conda</code> command. Using <code>conda</code> allows virtual environments to be tracked in <code>.yaml</code> files which lists all specific versions and packages used to fully reconstruct a given virtual environment.
</p>

### Step 1 - Install anaconda
<p stype = "text-align: justify;">
Install anaconda from the website. This is the easy part!
After the installation, it will be convenient to make <code>conda</code> commands accessible from the command prompt or terminal. In Windows, the easiest way to do this is using the Control Panel. 
<ol>
    <li>Press <code>Win + S</code> and type 'Edit the system environment variables' or 'Edit environment variables for your account'</li>
    <li>Click <code>Environment Variables</code> > <code>Path</code> > <code>Edit</code></li>
    <li>Click New and type in the following paths (or where anaconda is installed)</li>
    <ol>
        <li><code>C:/Users/username/AppData/Local/anaocnda3/</code></li>
        <li><code>C:/Users/username/AppData/Local/anaocnda3/Scripts/</code></li>
    </ol>
</ol>
</p>

### Step 2 - Create a virtual environment
<p style = "text-align: justify;">
Now that anaconda is installed, you are now free to make your virtual environments. You can start from scratch, or install a pre-built 
environment using a <code>.yaml</code> file.<br>
</p>
The `$` symbol denotes the start of your terminal. Example below.
<img src = "/assets/cmd_terminal.PNG" />  
In this case, `$` = `C:\Users\finaba`  

**To create from scratch:**
```{cmd}
# Type in the following lines in your command prompt or terminal
$ conda create --name myenv
$ conda activate myenv
```
**To create from a file:**  
```{cmd}
$ conda env create -f ./path/to/env.yaml
```

### Step 3 - Reuse a created environment
To use or 'activate' a virtual environment:
```{cmd}
$ conda activate myenv
```

### Step 4 - To save a virtual environment
To save a virtual environment into a file is quite simple:
```{cmd}
$ conda env export > ./path/to/env.yaml
```

That's all!