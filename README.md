### DISCLAIMER: This only works and only has been tested on Windows machines. Windows 10 and Windows 11 are confirmed to be working following the instructions below
### INSTRUCTIONS TO RUN
1. Install all the files and folders by clicking the green code button and selecting "Download as ZIP"
2. Extract the content of the zip file and place the folder "hope-main" where-ever you want
3. Install NPM following this guide https://positiwise.com/blog/how-to-install-npm-and-node-js-on-mac-and-windows
4. Open command prompt (cmd) as adminastrator by typing "cmd" into the windows search bar typically at the bottom of your screen
5. In CMD type NPM -v if you have not already to check if NPM is installed correctly
7. After confirmation, open up the "hope-main" folder and double click the address bar and copy the address (for example, on my machine it is: "C:\Users\username\Desktop\hope-main")
8. Now go back to CMD and type "npm install" then type "npm install electron-builder --save-dev"
9. Finally, you want to type npm run dist and this should build you all the binaries that you need and give you an installer
10. Click off of CMD and back to your "hope-main" folder and find the folder called "dist" open that up and find a .exe file called "ProGM Setup 1.0.0.exe"
11. Click on the executable to run it and then you will be able to install ProGM where ever you want on your windows computer and run it.
