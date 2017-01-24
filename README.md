# Meh
This application consists of a few parts:
- A dashboard using a [third-party] API to display data and filter through it in a table
- A feed of meh-ish social media updates that you see a lot nowadays. It also has a comment section to let your annoyance speak ;-) 

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

## Building
To build the application for production, use
```
NODE_ENV=production npm start
```
*Note: this command is still in development and will not work now