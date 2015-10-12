# Welcome to the CAH Node Training Curriculum

This repository will have training material and lessons to help you in the direction of learning
how to code.

The lessons will be separated into individual markdown files in the /lessons folder. Each lesson will focus
on a different piece of javascript, Node.js, React, Hapi, Flux architecture, Heroku and Heroku Toolbelt,
Postgres and Bookshelf, migrations, lodash, and other major libraries to help you become a better developer.

Each lesson will build upon the last lesson, so please start at lesson 1.

Caveat: These lessons and instructions are designed for development on `OSX`. If you are doing
development in a Windows or Linux environment, you may need to adjust the instructions.


## How Do I Participate?

1. Start by scrolling down to the Setup section and following the instructions to get your environment setup
1. Once you are able to start your web server, work on each lesson on your fork of this repository.
1. When you think you have finished the lesson, push your code to Github then make a pull request to this repository from your fork. Title your pull request the `Lesson {number}`
1. Our developers will provide feedback on any areas of improvement or give it a :+1:
1. If you get the :+1:, we will close the pull request. You can merge your pull request to your master branch then continue onto new lessons.

## I'm Stuck

If you are stuck, go to the [issues page](https://github.com/colonyamerican/node-training-curriculum/issues) and create an issue with your question. You can post snippets of code with three backticks like this:

```js
  console.log('example of code snippet that is causing an error or is confusing');
```

Add the label `help wanted` and make sure the title is `Lesson {number}`


## How Can I Contribute

Please make a pull request if you:

1. Find any instructions that are incorrect or vague
1. Want to create lessons for other students

## Setup

1. Download a command line tool. We recommend `iTerm`
1. Download an IDE. We recommend `Atom` first then `Sublime Text 3`
1. Download `brew` if you don't have it
1. Download Node from [here](https://nodejs.org/en/)
1. Run `brew install git` on command line
1. Run `npm install -g foreman` on command line
1. Run `npm install -g eslint` on command line
1. If you haven't added your laptop's SSH key to Github, [follow these instructions](https://help.github.com/articles/generating-ssh-keys/)
1. Fork this repository
1. Grab Github's `ssh` URL for your fork of this repository
1. Run `cd` on command line to your code workspace directory. If you don't have one run `cd ~ && mkdir code && cd code` on command line
1. Run `git clone {sshUrl}` on command line
1. Run `npm install` on command line
1. Run `cp dev.env .env` in your node-training-curriculum directory
1. Run `make client` on command line
1. In your web browser go to `http://localhost:8080`
1. Start lesson 1!

## License

MIT
