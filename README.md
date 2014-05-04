### Learn to code with Node.js

1. Setup
  1. Install homebrew `ruby -e "$(curl -fsSL https://raw.github.com/Homebrew/homebrew/go/install)"`
  2. Install Node.js `brew install node`
  3. Install git `brew install git`
  4. Install atom `...`
  5. Create an account on [Github](http://www.github.com)
    1. Your username should be your first initial and last name. Username for `Dan McAulay` is `dmcaulay`
    2. Your password should be `springstone`

2. Basics in the Node.js console
  1. Start Node.js `node`
  2. Numbers
    1. Declare `1`
    2. Addition `1 + 2`
    3. Subtraction `1 - 2`
    4. Multiplication `1 * 2`
    5. Division `1 / 2`
  3. Strings
    1. Declare `"Hello world!"`
    2. Get the length `"Hello world!".length`
  4. Booleans
    1. Greater than `1 > 2`
    3. Less than `1 < 2`
    4. Equal `1 === 2`
    4. Not equal `1 !== 2`
    5. Greater than or equal `1 >= 2`
    5. Less than or equal `1 <= 2`
    7. Compare strings `"Hello" == "world"`
    10. Compare string length `"Hello".length < 10`
  5. Output with `console.log`
    1. Write to the console `console.log("Hello world!")`
  6. Arrays
    1. Arrays are lists of items `['first item', 'second item']`
    2. You can access those items by index
      1. Indexes start at zero 
      2. `['first item', 'second item'][0]` with return `'first item'`
      3. `['first item', 'second item'][1]` with return `'second item'`
      3. `[1, 2, 3, 4, 5][1]` with return `2`

3. Setup a Git repository for your "Learn to Code" work
  1. Create a directory for your "Learn to Code" work
    1. Make a directory for the class `mkdir ~/learn-to-code`
    2. Change to that directory `cd ~/learn-to-code`
  2. Create a local git repository
    1. Initialize a git repository `git init`
    2. Create your first file `touch 01-hello.js`
    3. Add the file to the git staging area `git add 01-hello.js`
    4. Commit the file `git commit -m "my first commit"`
  3. Create a remote git repository on Github
    1. Go to http://github.com and sign in.
    1. Click the `+` icon next you your username
    2. Click `New repository`
    3. Enter `learn-to-code` for the `Repository name`
    4. Click `Create repository`
  4. Push your local repository to Github
    1. Go back to Terminal
    2. Add the remote repository `git remote add origin git@github.com:username/learn-to-code.git`
    3. Push the code to Github `git push -u origin master`

4. Execute a Node.js file
  1. Open `application.js` in atom `atom application.js`
  2. Add `console.log('Welcome to your first application');` to `01-hello.js`
  3. Run `node application.js` from the terminal

8. Command line arguments
  1. Add the ability to pass your name to the application.
    1. Use `process.argv` to retrieve the arguments
    2. Add `console.log('Welcome to your first application,', process.argv);` to `application.js`
    3. Run `node application.js arg1 arg2`
    4. What does that tell you about `process.argv`?
    5. Can you change the script so it prints out only `Welecome to your first application, arg1 arg2`?
    6. Now try passing your first name for arg1 and last name for arg2.
       1. `node application.js Dan McAulay`

6. Conditionals
  1. The `if` statement

          if ("Dan Mcaulay".length > 10) {
            console.log("Dan McAulay is a long name!")
          } else {
            console.log("Dan McAulay is a short name!")
          }

  2. The `if` statment is made up of the `if` keyword, a condition and curly braces `{}`.
     If the condition is true then the code inside the curly braces is executed.

          if (condition) {
            // code here
          }

  3. An optional `else` clause will be executed if the condition is false.
  4. You can also add an `else if` clause if you want to test multiple conditions.

          if ("Dan Mcaulay".length < 10) {
            console.log("Dan McAulay is a short name!")
          } else if ("Dan McAulay".length < 20)  {
            console.log("Dan McAulay is an average sized name!")
          } else {
            console.log("Dan McAulay is a long name!")
          }

7. Variables
  1. Variables allow you to store values in your code.
  2. You define variables with a case-sensitive name `var myName = 'Dan';`.
  3. You can get the length of the string using the variable `myName.length`.

