# Namaste React 










# Redux Toolkit
    - Install libraries
        - @reduxjs/toolkit -> npm i @reduxjs/toolkit.
        - react-redux -> npm i react-redux.
    - Build our store.
    - Connect our store to our app.
    - Create a slice (cartSlice)
    - Dispatch and Acton.
    - Selector.

# Types of testing (developer can do).
    - Unit Testing.
    - Integration Testing.
    - End to End testing (E2E).

# Setting up Testing in our app
    - Installing the React Testing library.
    - Installing the Jest framework.
    - Installed Babel dependencies.
    - Configure Babel.
        - Create a babel.config.js file in root level.
        - Write the code
            module.exports = {
                presets: [['@babel/preset-env', {targets: {node: 'current'}}]],
            };
    - Configure Parcel Config file to disable default babel transpilation.
    - Configure jest
        -To configure jest
            - npx jest --init.
                - typeScript - no.
                - jsdom as environment for testing.
                - Yes for coverage report.
                - babel as instrument code for coverage.
                - Automatically clear mock calls, instances, contexts and results before every test? - yes
    - Install jsdom library.
        - If your are using jest 28 or later, jest-environment-jsdom package now must be installed seperately.
            - npm install --save-dev jest-environment-jsdom.
    - Install @babel/preset-react - To make JSX work in test cases.
        - Once @babel/preset-react is installed, we will include the same inside my babel.config.js.
    - Install @testing-library/jest-dom.
        - npm i -D @testing-library/jest-dom.
        - Because we have .toBeInTheDocument(); in the contact.test.js.
        
