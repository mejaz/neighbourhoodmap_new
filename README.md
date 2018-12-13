# NeighbourhoodMap - React

Introduction:
-------------
All my favourite restaurants can be seen on the google map with clickable markers. Clicking on the marker will display the info of the restaurants. You can also find a search bar with the all the restaurants listed. 

Configuration:
--------------
1. React version - 16.6.3
2. react-google-maps - 9.4.5
3. escape-string-regexp - 1.0.5
4. Register in Google developers to generate a key.
5. Register in FourSquares APIs to generate the Client_ID and Client_Secret
6. Update the NeighbourhoodList.js file with the FourSquare Client_ID and Client_Secret.
7. Update the MyFancyComponent.js file with the Google API key.

Steps to launch the App:
------------------------
1. Launch cmd(in Windows) or Terminal (in MacOS).
2. Navigate to the folder containing all the files of this repository.
3. Run the command - `yarn install`
4. Run the command - `yarn start`
5. The NeighbourHoodMap application will start at local host port 3000 - http://127.0.0.1:3000

Steps to build/deploy the app in Production (Heroku here):
--------------------------------------------
1. Clone this repo to a local directory/folder.
2. Open terminal/cmd and type `yarn build`, this command will create a build for production deployment.
3. Type `heroku login` (Enter your Heroku credentials). You can signup here (https://signup.heroku.com/login)
4. `git init`
5. `git add .`
6. `git commit -m “initial commit”`
7. `heroku create` (You should see two links after running this command. Copy the second one)
8. `git remote add heroku <PASTE THE LINK YOU JUST COPIED>`
9. `git push heroku master`
10. `heroku open`

Contact me:
-----------
mohdejazsiddiqui@gmail.com
