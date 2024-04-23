## Introduction
This project is a sample project describing base structure of e2e & component level UI tests using Playwright and Typescript.
Component tests are build using mocks of a route handler intercepting API calls. When a request is made to this endpoint during testing,
the mock handler responds with a JSON object containing a control code.

## Use cases

* When user insert a valid ID code and logging in then control code appeared
* When user insert an invalid ID code and logging in then error message shown


## Subject for investigation 
The mock implementation isn't ideal because it uses hardcoded responses
and doesn't integrate with existing product code (importing interface). This could cause unexpected problems if the API changes.

## Known issues: 
current example using locators by text, id & css without specific data attributes which will be added soon.

## How to run 
This project includes Playwright scripts for end-to-end testing (see `package.json`). You can run these scripts using the following npm scripts:

- `npm run e2e`: runs the end-to-end tests (headless mode)
- `npm run e2e:debug`: runs the end-to-end tests in debug headed mode (step by step execution).