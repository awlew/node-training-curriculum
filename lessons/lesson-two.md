# Lesson 2

## Description

In lesson one, we built six pages (Home, Blog, Skills, Contact Information, Top Secret, and the React Skill page)

These components are currently just putting JSX in the render method, compiling the code, and displaying
the pages in a mostly static way.

Let's make our pages a bit more dynamic.

## Acceptance Criteria

### The Home page
  - [ ] Currently, your name, title, and image are hard coded into the `render()` method. Add all of those to
  React's `getInitialState()` method as state variables. In the render method, remove the hard coded
  title, image and name and use the state variables instead. Make sure your page still loads correctly before
  continuing.
  - [ ] Next, add a React-Bootstrap Button that says 'Night Job' at the bottom of the page. When a user clicks
  on the button, an `onClick handler` will reference a new function in `home.jsx` that will change your title,
  images, and name to your secret superhero name.

  For example if your name was Bruce Wayne, CEO, when the user clicks night job, his name would change to
  Batman, his job would change to Crime Fighter and his image would change to his Batman costume.

  This requires editing state. Check these [React docs](https://facebook.github.io/react/docs/interactivity-and-dynamic-uis.html) for more information.

### The Contact Information page
  - [ ] Create a form that the user can fill out that says "Contact Me" and includes a Name text input,
  Email text input, Phone text input, Contact Method (select dropdown with Phone or Email), and Message textarea
  - [ ] The page should have a React-Bootstrap Button that says "Send"
  - [ ] When the user clicks send, it displays a message that either says "We will contact you shortly at {email}" or "We will contact you shortly at {phoneNumber}" depending on their preferred Contact Method.

  Take a look at [building forms in React](https://facebook.github.io/react/docs/forms.html)

### Top Secret page
  - [ ] Previously we would always redirect a user from the Top Secret page back to the home page. Now
  we want to check in `componentWillMount` if the URL has `?userId=1` in it. If it does, don't redirect.
  Look at React Router for documentation for tips on how to pull key value pairs from the query string.
  - [ ] The render method two sections
  - [ ] The first section is titled `Bank Account` and underneath it should
  have the total amount of money in your Superhero bank account in green
  (make sure it's in the millions, we need a lot of money)
  - [ ] Under the amount of money in your bank, hard code a section titled `Tools` and include a list
  of items required to complete your night job. Maybe you need a 50 caliber rifle, or just a bo staff.
  Maybe you don't use weapons and your superpower is Super Communication so you just need a
  Bluetooth Headset.

  Hint: if you are a top level React Component you can use `this.props.query` to get the query string

### The React Skill page
  - [ ] Write a quick blurb about how State works in React

### The Blog page
  - [ ] Add a blog post about challenges State and Click Handlers. What was the biggest challenge for you?

### GIT and branches

You already have GIT installed and you were able to fork the repository on Github and clone the code locally.

If you got a :+1: on lesson one from the Colony American team, you can close the pull request to our repository,
make a pull request for your lesson-one branch to your master branch and merge it. Locally you will run the following commands.

1. `git checkout master`
1. `git pull` When you run git pull, you will receive your merged master commits from lesson one.

To start the lesson two changes after merging lesson one into your master branch:

1. `git checkout master`
1. Use what you learned in the previous lesson to create a new branch called `lesson-two`.
1. Add all your updated files, commit them with a message, and make a pull request to the Colony American remote project.

## Recap

In this lesson we learned about state, the querystring, and form elements in React.

## Need Help?

Go to the Colony American Node Training Curriculum repo and submit an issue with the label `help wanted`. The help link is in the Readme!
