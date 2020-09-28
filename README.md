# Contact Form - Testing

## Advanced React Sprint

## Testing Web Applications

## Objectives

- explain what automated testing is and its importance
- use react-testing-library for testing react components
- use react-testing-library to test user interactions with fireEvent

## Introduction

In this challenge, you will be writing tests for a contact form that has been built with React.

As a developer, you will be writing tests for every component. As we've learned, tests are a very important part of programming. The tests you will write will help you feel confident in the code you push to production!

## Project Set Up

- [ ] Create a forked copy of this project.
- [ ] Clone your OWN version of the repository in your terminal.
- [ ] CD into the project base directory.
- [ ] Download project dependencies by running `npm install`.
- [ ] Start up the app using `npm start`.
- [ ] Create a new branch: git checkout -b `<firstName-lastName>`.
- [ ] Implement the project on your newly created `<firstName-lastName>` branch, committing changes regularly.
- [ ] Push commits: git push origin `<firstName-lastName>`.

**Test Runner**
- [ ] In a new terminal window, run `npm test`
- [ ] With each saved change in your editor, the test runner will re-run all the tests
- [ ] **IMPORTANT** If a test fails, use the test runner's error messages to find out why it is failing

## Instructions and/or completion requirements (MVP)

In order to complete your mission for today, you will need to write tests to help you feel confident in shipping this component. Below is a _general_ outline of how to accomplish this.

1. Take a good amount of time to use the form. Find out what behaviors you expect, and any you don't expect. (Don't fix unexpected behaviors yet. We want our test to show us what's wrong in the UI, then fix the behavior - we'll walk you through that down below)
1. Write down on a piece of paper what you want to test. (This is a very important step - always plan before coding!)
1. Add your first test. This one should be a very simple test to make sure the testing setup is working.
1. Write a sufficient amount of tests to give you confidence in the project's code

_If you come across any "unexpected" behaviors in the form UI (not the test), try this flow:_

- [ ] You may have noticed that the form validation for one of the inputs is a little off...
- [ ] Write a test for the "expected" behavior (it will fail because something in the component is doing something unexpected)
- [ ] Confirm that the test fails, because of the "unexpected" behavior
- [ ] Look at the code in the project to find what is causing the behavior
- [ ] Fix the code so that your new test passes
- [ ] Celebrate that your test helped you find and fix a bug!

## Stretch goals

- Using the [REQ|RES API](https://reqres.in/), build out a POST request in the form.

  - Using the [React Testing Library Docs](https://testing-library.com/docs/react-testing-library/intro), study how to test async calls
  - Write a new test to cover your new async call

- Add more elements to the form - eg dropdown, checkbox, etc
  - Add tests to include the new form elements

## Submission Format

- [ ] Submit a Pull-Request to merge <firstName-lastName> Branch into `main` (student's Repository). **Please don't merge your own pull request**
- [ ] From the home page of your repo, make sure you have your branch selected
- [ ] Copy the URL and paste it into Canvas to submit your project
