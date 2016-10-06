# Undulating Jigsaw Editor

[![Puzzle Editor on YouTube](http://img.youtube.com/vi/ygPgN7u37EM/0.jpg)](http://www.youtube.com/watch?v=ygPgN7u37EM)



This is a companion program for [Undulating Jigsaw Puzzles](https://github.com/thatmichaelpark/undulating-jigsaw-puzzle).
It enables an administrator to create new puzzles and edit or delete puzzles and users.

(The administrator username is hardcoded to be *admin* with password *admin*.)

## Technologies used

This is a desktop app built with Angular, Materialize, and Electron.

To showcase the fact that it is a desktop app, the program uses native OS menus
and also accesses the local file system to list the available images.

## Preparation for use

Edit readImageDirectory.js and modify the `path` variable to point to the
Undulating Jigsaw Puzzle image directory on your machine.
(Note: in order to support the native
file system scenario, both the Undulating Jigsaw Puzzle server and
the Undulating Jigsaw Editor must run on the same machine.)

## To launch from the command line
```
npm start
```
## To package as a native application
```
npm run electron-packager ./
```
