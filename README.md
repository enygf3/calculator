# Weather App

## Task

[Google Document](https://docs.google.com/document/d/1j8DnTnRSNoRBdYtKu3Rgk1STLso4X5Rev2-oEyxMsK8/edit)

## How to run the app

1. Create a folder with any name and open it
2. Open Terminal/Command Line("terminal") and open the folder there
3. Type `npm init`
4. Type `npm install -D sass-loader`
5. Clone this repo to your computer
6. Copy all the files from `packages` folder in your cloned repo and paste them to `node_modules` folder in the folder you created
7. Copy all the files(except of `packages` folder) from your cloned repo and paste them with replace to folder you created
8. In "terminal", type `npm start`

Done✅

## File structure

`./packages` - folder that contain all dependencies of this app

`./src` - folder that contain all components of this app

        ./src/components - There are all the components of the app. Each component's folder in it contain a .js file with the same name as folder

            ./src/components/commands - Folder that contains all commands of this app

            ./src/components/executer - There is an Executer of the commands

            ./src/components/calcMethods - Methods of the main app class Calculator

        ./src/style - Folder with .sass(styles) of the app

`./` - folder that contain `packages`, `source code` and all the `config files`
