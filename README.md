
# Overwatch Overlay ![version](https://img.shields.io/badge/version-1.0.0-brightgreen)

This is an overlay created for Overwatch (created by Blizzard Enterainment). It is written as a NodeCG Bundle.

<img src="https://imgur.com/s2FPykJ.png" width="750"/>


## How the Overlay Works
The overlay consists of the 4 seperate sections:

- Graphics
- Dashboard
- Assets
- NodeCG (backend)

### Graphics
The graphics contains the main overlay visible by the viewers. It is written in HTML, CSS and JavaSript. The "index.html" is the main file to be added into OBS as a browser source. 

The data on the overlay is updated by NodeCG Replicants. Data is updated whenever a field is updated on the Dashboard.

Graphic Elements:

- Team Names
- Team Colours
- Attacking or Defending Icons (Toggleable)
- Score

### Dashboard
The Dashboard contains 3 panels:

- Left Team
- Right Team
- Data

The panels allow you to change the following:

Left & Right Team:
- Team Name
- Team Primary Colour
- Team Secondary Colour
- Team Logo

Data:
- Left Score
- Right Score
- Hide/Show 'Side' (Attack/Defense) Icons
- Swap Side Icons
- Swap Team Data (change sides)

### Assets
This is where team logos can be uploaded and then used on the overlay after being selected in the Dashboard.

### NodeCG
NodeCG uses JavaSript as its primary language. You can learn more about NodeCG here: nodecg.com

# Setup

## Overlay Setup
1. Make sure you have [NodeJS and NPM Installed](https://nodejs.org/en/download)
2. Once installed, you need to download NodeCG (v 2.1.1+). The easiest way is via the nodecg-cli. Open a terminal, and run the following command `npm install --global nodecg-cli`. This will install nodecg-cli globally.
3. Make a folder for where you want to host the overlay code from.
4. Inside this folder, make another folder called `NodeCG`
5. Whilst navigated inside the folder, run the command `nodecg setup` (this may take some time depending on your system)
6. Once NodeCG has setup, navigate to the `bundles` folder, and run the command `git clone https://github.com/baileybarberscargill/Overwatch-Overlay.git` (this will copy all the files needed)
7. Navigate back inside the NodeCG folder, and run the command `nodecg start` (this may take a minute or two on first boot)
8. If NodeCG has started correctly, if you go to http://localhost:9090/ it should bring up the dashboard.

## Overwatch Setup
1. On the PC where the spectator footage is being captured from, go to `Documents/Overwatch/Settings`
2. Open the `Settings_v0.ini` file in a text editor
3. Add the following lines under the `[Render.13]` header:
  ```dosini
; SPECTATOR SETTINGS
BroadcastMarginBottom = "0.050000"
BroadcastMarginLeft = "0.050000"
BroadcastMarginRight = "0.050000"
BroadcastMarginTop = "0.800000"
; END OF SPECTATOR SETTINGS
```
This will adjust your HUD to be slightly lower than normal. This is needed in order for the overlay to look correct.
