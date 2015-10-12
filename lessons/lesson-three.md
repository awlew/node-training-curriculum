# Lesson 3

## Description

In lesson two, we learned about state, the querystring, and form elements in React

We have dynamic data, but we haven't really manipulated it at all. Let's do that now.

The library we are going to use is https://lodash.com/docs so make sure to `npm install --save` it.

## Acceptance Criteria

### Top Secret page
  On this page in the previous lesson, we added a `Bank` section and a `Tools` section to the render method

  - [ ] Move your initial bank savings into state, make sure it is a number, not a string. Call it `initialBankSavings`
  - [ ] Create a key in state called `tools`
  - [ ] Tools should be an empty array to start but it will contain objects, see example below.
  - [ ] Each object in the tools array will have four keys: `sku`, `type`, `name`, and `cost`

  ```
    tools : [
      { sku: 'blu1', name : 'Bluetooth Headset', type : 'Communication Enhancement', cost : 15 }
    ]
  ```

  - [ ] Now in your render method in the `Bank` section, display your `this.state.initialBankSavings` in green color
  - [ ] Underneath that display your expenses in red

  - [ ] Create a new section called `Shop`. In it create four input boxes in a single row with a submit button at the end
  - [ ] The input boxes are Sku (input text), Type (input text), Name (input text), and Cost (input number)
  - [ ] A user can enter any sku, type and name they want, cost should be a number that is a minimum of 1
  - [ ] When the user enters information and clicks submit it will add the tool object to the tools array in state if the tool's sku number doesn't already exist in the state's tools array. (So you can only add an item once)


  - [ ] When a tool is added to state, the `Tools section` table underneath `Shop` should re-render by looping through all objects in the `this.state.tools` array and displaying their sku, type, name, and cost as a row in the table
  - [ ] When an tool is added to state, the Expense section should sum the cost of all your tools. The expenses number will go up as you add more tools.
  - [ ] Additionally your total bank savings will subtract the cost of your all your tools and it will go down as users add more tools.

  Once that is working, let's move onto some advanced lodash.

  - [ ] Create a new section between `Shop` and `Tools` called `Search`
  - [ ] In one row, create a label called `Search by name` with an input text. When a user enters text, it filters the `Tools` table to any tool that matches that name. (Exact match is fine)
  - [ ] You get extra credit if you partial match on the name input. (Ex. I type in `Blue` and it returns `Bluetooth Headset`)
  - [ ] In a second row create a label that says "Cost", a select dropdown with ">" and "<" (greater than and less than) and an input number field.
  - [ ] If the user enters > 50, it should filter all tools that cost more than 50 dollars.
  - [ ] If a user starts typing a name and a cost, it should use both filters. If I type in "Bluetooth Headset" and > 50, it should find all headsets that cost more than 50 of the currency you are using.
  - [ ] If name or cost is empty, don't filter on it.
  - [ ] Don't change Bank Account or Expenses if tools are filtered.

Tips:

`_.each` is one way to loop over collections but it doesn't return anything, so you would need to create temporary variables that store calculations made within the loop.

`_.map` is a way to loop over collections and return values. This is really handy for converting an array into JSX.

`_.contains` is good for checking if a string exists in an array.

```
  const names = _.map(users, (user) => {
    return (
      <div>{user.name}</div>
    );
  });
```

`_.filter` is good for filtering collections based on parameters you pass in

`_.pluck` is good for picking attributes off an object

```
  const user = { id : 1, firstName : 'Jason', lastName : 'Walsh' }

  const firstName = _.pluck(user, 'firstName');

  console.log(firstName);
  // Jason
```

`_.reduce` is good for iterating over a collection with a starting `memo` and on each pass of the loop the memo can change. For example you can start a memo at `0` and add or subtract from the `memo` on each pass of the loop.

`_.sum` is good for easily summing numbers.

### The Skills page
  - [ ] Add a link to a new page for Lodash

### The Lodash page
  - [ ] Write descriptions for the functions you used and how they can help manipulate data.

### GIT and branches

1. `git checkout master`
1. Use what you learned in the previous lesson to create a new branch called `lesson-three` off of master which should
have lesson-one and lesson-two merged into it.
1. Add all your updated files, commit them with a message, and make a pull request to the Colony American remote project.

## Recap

In this lesson we learned about some of the core lodash functions

## Need Help?

Go to the Colony American Node Training Curriculum repo and submit an issue with the label `help wanted`. The help link is in the Readme!
