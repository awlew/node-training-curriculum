# Lesson 4

## Description

### First Deploy!

In previous lessons we were running webpack to transpile our JSX and serve frontend javascript only.

Now we will create a hosted backend server so when the user hits the `/` route it will serve the transpiled frontend code and then as the user clicks on the different tabs of your site, ReactRouter will handle the URL route changes, not the backend server.

Follow these instructions if you overwrote your git origin remote:
1. `git remote add colony https://github.com/colonyamerican/node-training-curriculum`

1. New files have been added to the repo, so pull the latest files from Colony American Homes Node Training Curriculum.
  (If you overwrote your origin you will want to run `git pull colony master` instead of `git pull origin master`)
1. Create an account on heroku.com
1. `cd` to your training curriculum folder on command line
1. Run the following command: `brew install heroku-toolbelt`
1. Run the following command: `heroku login`
1. Run the following command: `heroku create`
1. Create a `Procfile` in the root directory. It should just be called `Procfile`
1. In the `Procfile` add this one line: `node index.js webpack`
1. Run the following command on command line in your training curriculum folder: `git push heroku {lessonFourBranchName}:master` (so if your branch is called lesson-four it would be: `git push heroku lesson-four:master`)
1. Run `heroku open` to view your hosted app!

### Future Deploys

1. Whenever you need to redeploy make sure you are in the right directory, `heroku login` then `git push heroku {branchName}:master`

For more help, check out the [Heroku Deploy Instructions](https://devcenter.heroku.com/articles/getting-started-with-nodejs#introduction)

## Acceptance Criteria
  - [ ] Post your Heroku web app URL in a pull request

## Blog Page
  - [ ] Write a blog post about the deploy process and any roadblocks you ran into so other developers can
  more easily deploy their apps.

### The Skills page
  - [ ] Add a link to a new page for Heroku because you can now do deploys!

### GIT and branches

1. `git checkout master`
1. Use what you learned in the previous lesson to create a new branch called `lesson-four` off of master which should
have all previous lessons merged into it.
1. Add all your updated files, commit them with a message, and make a pull request to the Colony American remote project.

## Need Help?

Go to the Colony American Node Training Curriculum repo and submit an issue with the label `help wanted`. The help link is in the Readme!
