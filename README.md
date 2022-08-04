# React, Tailwind & Typescript Starter


Navigation
- [React, Tailwind & Typescript Starter](#react-tailwind--typescript-starter)
  - [Clone locally:](#clone-locally)
  - [Enabling the github workflow](#enabling-the-github-workflow)
  - [Getting Started with Create React App](#getting-started-with-create-react-app)
  - [Available Scripts](#available-scripts)
    - [`yarn start`](#yarn-start)
    - [`yarn test`](#yarn-test)
    - [`yarn build`](#yarn-build)
    - [`yarn eject`](#yarn-eject)
  - [Learn More](#learn-more)

## Clone locally:
1. clone into local repository
2. `yarn install`

This is a was built using https://dev.to/kevin_odongo35/react-tailwind-and-typescript-35hk as reference, with the following basic steps:

1. Create react app
```
yarn create react-app my__app__name --template typescript
```

2. Install tailwing and craco


    1. `cd my__app__name`

    2. install the following packages for Tailwind
    `npm install -D tailwindcss@npm:@tailwindcss/postcss7-compat postcss@^7 autoprefixer@^9`

    3. Then install craco package
     `npm install @craco/craco`

    4. run the following commad. This will create a file called tailwind.config.js
    `npx tailwind init`


3. Configure craco:

    *__craco.config.js__*
     run `touch craco.config.js`

    1. add the following content in the craco.config.js
    
    ```javascript
    module.exports = {
      style: {
        postcss: {
          plugins: [
            require('tailwindcss'),
            require('autoprefixer'),
          ],
        },
      },
    }
    ```


4. configure tailwind

    *tailwind.config.js*
    
    > in this file we can add the customized colors tailwind provides.
    ```javascript
      const colors = require('tailwindcss/colors')
      module.exports = {
         purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
          darkMode: false, // or 'media' or 'class'
          theme: {
            extend: {},
            colors: {
            transparent: 'transparent',
            current: 'currentColor'
            ....
          }
          },
          variants: {
            extend: {},
          },
          plugins: [
            require('@tailwindcss/forms'), // import tailwind forms
         ],
        }
      ```
    
5. revise scripts in package.json

      *__package.json__*
      
      ```json
        {
          "scripts": {
          
           "start": "craco start", 

           "build": "craco build", 

           "test": "craco test", 
            "eject": "react-scripts eject" 
          },
        }
      ```
6. Add tailwind to index.css

      *__./src/index.css__*
      ```css
      @tailwind base;
      @tailwind components;
      @tailwind utilities;
      ```

The rest of the steps in the tutorial were not used. 

## Enabling the github workflow 
1. create a new project in vercel and set the project type to 'other' rather than 'react'
2. connect vercel to remote repo (through vercel ui)
3. open your local directory in terminal 
4. run `vercel` and link to existing project (you may be able to just skip steps 1 and 2 but this is how I did it)
5. open the json file generated in your local repo after running `vercel`
6. add the project_id and org_id to the github secrets in your remote repo 

## Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
