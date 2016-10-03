# Undulating Jigsaw Editor

This is an editor for [Undulating Jigsaw Puzzles](https://github.com/thatmichaelpark/undulating-jigsaw-puzzle).
It enables the user to edit or delete users and puzzles, or create new puzzles.

## Technologies used

This is a desktop app built with Angular and Electron.

## Preparation for use

Edit readImageDirectory.js and modify the path variable to point to the
Undulating Jigsaw Puzzle image directory. (Note that to support the native
file system scenario, both the Undulating Jigsaw Puzzle server and
the Undulating Jigsaw Editor must run on the same machine.)

## To launch
```
npm start
```
## To package as a native app.
```
npm run electron-packager ./
```
## Biggest challenge

To showcase the fact that it is a desktop app, the program uses native OS menus
and also accesses the local file system (to list the available images). These features
required a different approach than the usual web application.
