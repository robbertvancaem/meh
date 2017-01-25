# Meh
Meh is an application aimed as a satirical view on what we call 'social media' today.
The internet gets flooded with useless information and irrelevant posts. With meh, you can
up or downvote any entry a friend of you posts. When a status receives too many mehs, that person
will no longer show up on the feed of his/her friends.

*Disclaimer: meh is still in beta, obviously*

## Installation
First, make sure you've got node (6.2.2) and [Homebrew](http://brew.sh) (0.9.5) installed. Get the latest version of libpng by running:
```
brew install libpng
```
This library is needed so that [webpack](http://webpack.github.io) can correctly load the images. Next, install all dependencies using
```
npm install
```


## Serving
To fire up the application, use
```
npm start
```

You can visit the application at [http://localhost:8080](http://localhost:8080)

Also, make sure you run the JSON API server as well, using

```
npm run api
```

This makes sure the meh messages (and in the future comments) are saved in the `messages.json` file

## Building
To build the application for production, use
```
NODE_ENV=production npm start
```
*Note: this command is still in development and will not work now*
