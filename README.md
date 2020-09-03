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

///////////////////////////////////////////PROJECT START///////////////////////////////////////////////////////////////////////

## Project Set Up
  - [x] Initial commit
    - [x] Create a forked copy of this project.
    - [x] Clone your OWN version of the repository in your terminal.
    - [x] CD into the project base directory.
    - [x] Create a new branch: git checkout -b `<firstName-lastName>`.
    - [x] Implement the project on your newly created `<firstName-lastName>` branch, committing changes regularly.

  -[x] Dependencies
    - [x] Push commits: git push origin `<firstName-lastName>`.
    - [x] Add your team lead as collaborator on Github.
    - [x] Download project dependencies by running `npm install`.
    - [x] Start up the app using `npm start`.

**Test Runner**
- [x] In a new terminal window, run `npm test`
- [x] With each saved change in your editor, the test runner will re-run all the tests
- [x] **IMPORTANT** If a test fails, use the test runner's error messages to find out why it is failing

-----------------------------------------------MVP------------------------------------------------------------------------------

## Instructions and/or completion requirements (MVP)
  In order to complete your mission for today, you will need to write tests to help you feel confident in shipping this component. Below is a _general_ outline of how to accomplish this.

  -[x] **Part 1: Logging functionality/disfunctionality** 1. Take a good amount of time to use the form. Find out what behaviors you expect, and any you don't expect. (Don't fix unexpected behaviors yet. We want our test to show us what's wrong in the UI, then fix the behavior - we'll walk you through that down below)

    Expect: 
      Input:
        Placeholders for each input.
        Validation required for important inputs
      Validation:
        Make sure the appropriate type of information is being input. ex. email
        Make sure minimum maximum lengths are appropriate
      Submit Button:
        Submit works with enter (onSubmit)

    Didn't Expect:
      Inputs:
        placeholder?
        max not appropriate
      Validation:
        validation checks for required but does not always check for type
      Submit Button:
        onSubmit does not work


  -[x] **Part 2: Writing what to Test** 2. Write down on a piece of paper what you want to test. (This is a very important step - always plan before coding!)\

    Everything I didn't expect from "Part 1".

    Didn't Expect:
      Inputs:
        placeholder?
        min and max not appropriate
      Validation:
        validation checks for required but does not always check for type
        error message displayed
      Submit Button:
        onSubmit does not work

  -[x] **Part 3: Add your first test** 3. Add your first test. This one should be a very simple test to make sure the testing setup is working.
    - [x] Test ContactForm.js renders

  -[ ] **Part 4: Write sufficient amount of tests.** 4. Write a sufficient amount of tests to give you confidence in the project's code

    - Refer to: 
    - RTL: https://testing-library.com/docs/react-testing-library/intro
    - Jest: https://jestjs.io/docs/en/expect
    - Kent C. Dodds Testing Javascript: https://testingjavascript.com/
    - CheatSheet for queries: https://testing-library.com/docs/react-testing-library/cheatsheet#queries

   Didn't Expect:
      Inputs:
        Placeholders are missing. 
          (Test to see if placeholder even exists. )
        Maximum length is too short first name. 
          (Test for error after long name is entered.)
      Validation:
        Validation check does not always check for type ex. email 
          (Test for a <p> error when no "@" symbol is used)
      ##Submit Button:##
        onSubmit does not work.
          (Test to see if after entering text into inputs if )
          


  


  _If you come across any "unexpected" behaviors in the form UI (not the test), try this flow:_

  - [ ] Write a test for the "expected" behavior of form validation (it will fail because something in the component is doing something unexpected)
  - [ ] Confirm that the test fails, because of the "unexpected" behavior
  - [ ] Look at the code in the project to find what is causing the behavior
  - [ ] Fix the code so that your new test passes
  
  - [ ] Repeat?

---------------------------------------------STRETCH---------------------------------------------------------------------------

## Stretch goals

- [ ] Using the [REQ|RES API](https://reqres.in/), build out a POST request in the form.

  - [ ] Using the [React Testing Library Docs](https://testing-library.com/docs/react-testing-library/intro), study how to test async calls
  - [ ] Write a new test to cover your new async call

- [ ] Add more elements to the form - eg dropdown, checkbox, etc
  - [ ] Add tests to include the new form elements

----------------------------------------CLEAN REVIEW SUBMIT--------------------------------------------------------------------

- [ ] Clean remaining comments, bad-formatting, etc.
- [ ] Review functionality + MVP
- [ ] Submit Pull Request
- [ ] Complete Retrospective https://forms.lambdaschool.com/module-retrospective
- [ ] Inform TL of completion

///////////////////////////////////////////PROJECT START///////////////////////////////////////////////////////////////////////