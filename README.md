This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

After you download it, in the project directory, you should run:

### `npm install`

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.


## What is expected!?
The main goal of this project is to connect all the basic topics as a Front-end developer with React by developing a app 
that allows you to read the latest posts from a provided API below and create your own posts inside your app.

### Functionality

  #### Main screen
  * Get all the information from a provided service API (https://private-c3edb-postsmock.apiary-mock.com/posts)
  * Display the main information of each post with an image
  * Allow the user to navigate to each post (Post Reading screen)
  * Allow the user to change the displayed posts depending on their categories
  * Allow the user to create a new Post (Post Making feature)
  * Allow the user to edit a Post (Post Making feature)
  * Allow the user to delete a Post

  #### Post making feature
  * This should be a Modal on top of the Main screen with the following fields
    * Title
    * Short Description
    * Description
    * Category
    * Image url

  #### Post reading screen
  * Full screen component to display the following information:
    * Title
    * Short Description
    * Description
    * Category
    * Image url
  * Display all the existing comments for that post
  * Allow the user to add a new comment
  * Allow the user to go back to the main Screen

## Useful libraries
* React
* Axios
* Styled-components
* React-router
* React-router-dom
* Material UI

**Note: It doesn't matter if your own posts get deleted when the app reloads. There is no expected connection to DBs**
**Second note: remember to do it yourself before consulting the final code!**

