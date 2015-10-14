# Lesson 1

## Description

The site you are going to build is going to be a personal site about you and it will highlight all the skills you learned.

You can eventually use this to market yourself and your abilities, and even help other new developers, but first you need to build it!

## Acceptance Criteria

### Header

- [ ] There are no styles on the Home page. Let's create a header. Take a look at the [Bootstrap Header](http://getbootstrap.com/css/) and try to create one for your application.
  - [ ] The header will be on every page in our application. It might be a good idea to build it in a common place that all our pages are nested under.

- [ ] Nav items your new nav should include `Home`, `Blog`, `Skills`, `Contact Information`, and `Top Secret`
  - [ ] You will need to create 5 new JSX files for this. Take a look at where the Home page is stored and follow that pattern.
  - [ ] To link to these pages you can't just use a standard <a> tag because this is a single page app. Take a look at `react-routers` [documentation](https://github.com/rackt/react-router) on how to create links to pages inside our app

### The Home page
  - [ ] Should have a few rows
  - [ ] The first row should have a picture of you on the left and your name and title on the right (if you don't have a title, make one up!)
  - [ ] The next row should have an ordered list of your top six skills. They can be related to programming, communications, or anything pertinent
  - [ ] The next row should have a header that says `Dream Jobs` and it should link to places you would want to work in the future
  - [ ] The last row should be a statement about why you want to learn to develop. Every time you load the page it will serve as a reminder about why you are doing this, even if the going gets tough!

### The Blog page
  - [ ] Should be clickable from the nav
  - [ ] The body of the blog should have a header with today's date and a paragraph of places where you got stuck during this exercise. Document any problems you had in detail so other developers can benefit from looking at your blog page!

### The Skills page
  - [ ] Should be clickable from the nav
  - [ ] Should have a list on it (style it however you want)
  - [ ] The first item on the list should be `React` which should be a link to a new page

### The Contact Information page
  - [ ] Should be clickable from the nav
  - [ ] Should include your name, email, phone, and a link to your Github page (this is an actual <a> link)

### Top Secret page
  - [ ] Should be clickable from the nav
  - [ ] This page should redirect any user who tries to access it back to the home page
  - [ ] The text on the page should say `top secret`
  - [ ] You should never see the text `top secret` when you try to load the page, not even a flicker of the text

### The React Skill page
  - [ ] Should be clickable from the skills page
  - [ ] Should list the pieces of the component lifecycle


## Help And Tips

### Creating Pages

A "page" is a React Component. [Learn about React Components](https://facebook.github.io/react/docs/component-specs.html)

### Styles

To edit styles take a look at the `sass` directory. We specifically use [SCSS](http://sass-lang.com/documentation/file.SASS_REFERENCE.html)
Take a look at [React-BootStrap](https://react-bootstrap.github.io/) which will help you with some styles. Note, the library isn't installed by default so you will need to install it!

To install a package type `npm install --save {packageName}`

Usually the NPM package name matches up with the Github project name, but not always. If you are ever unsure what you are installing, you can go to [NPM](http://npmjs.org) and search for the package name. Try searching for `react-bootstrap` and on the NPM page you can see which Github URL the library is connected to.

Note: When you npm install react-bootstrap, you will have access to their (modules available)[https://github.com/react-bootstrap/react-bootstrap/tree/master/src]

That means from `home.jsx` you can import any of those modules like this:

`import { Button, Col, Row } from 'react-bootstrap'`

Then in the render method you can use the use modules you just imported like this:

```js
  render() {
    return (
      <div>
        <h2 className='hello-world'>
          Hello World!
        </h2>
        <Button>This is a react-bootstrap Button</Button>
      </div>
    )
  }
```

You will notice that the SCSS styles don't work by default however. You need to download the (SCSS
stylesheet)[http://getbootstrap.com/getting-started/] in order for the styles to start working.
Remember SCSS is a subset of SASS.

So, you downloaded the files and untarred them.

Next you need to move them to your `sass` folder under assets. Once added your app.scss file needs to import
the `_bootstrap.scss` file. If you don't put all the folders and files in the sass directly you will need to
manually update the paths of the fonts folder in `_variables.scss`. It you get an error when transpiling the
code, it probably means the paths of your imports are incorrect either in `app.scss` or one of the bootstrap
files that imports other bootstrap files.

### The Router and Redirects

Look at react-router for help on redirecting the from one page to another, whether it's because they clicked a link or because they don't have permission to access the page

### GIT and branches

You already have GIT installed and you were able to fork the repository on Github and clone the code locally.

1. To create a new branch you would run this on command line `git checkout -b lesson-one`
1. When you want to add new or changed files to the staging area (the state where files are marked as ready to be committed) from command line run `git add {filename}`
1. When you are ready to make a commit, run this from command line `git commit -m "{msg}"`
1. To push a branch to Github, run this from command line `git push -u origin {branchName}`
1. Run this command so `git remote set-url origin https://github.com/USERNAME/OTHERREPOSITORY.git` Change USERNAME and OTHERREPOSITORY with your github name and repo name
1. Lastly if you go to the URL of your forked repository, you can make a [pull request](https://help.github.com/articles/using-pull-requests/)

Remember, when you are done with your `lesson-one` branch, make a pull request to the Colony American remote project. (Remember to title it Lesson One). We will provide feedback and once we give you the :+1: we can close your pull request.

Once we close it you can merge your `lesson-one` branch into your `master` branch by making a new pull request against your own repository. From there it's onto lesson two!

## Recap

In this lesson we learned about git branching, NPM, React components and lifecycle, React Router, React Bootstrap, and SCSS.

## Need Help?

Go to the Colony American Node Training Curriculum repo and submit an issue with the label `help wanted`. The help link is in the Readme!
