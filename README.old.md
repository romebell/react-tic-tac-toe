# React Tic Tac Toe

For **SEI 713** this is a week-long deliverable, **due Monday, August 31**.

Follow the [React tic tac toe tutorial](https://reactjs.org/tutorial/tutorial.html)!

You'll notice there are two options for setup that the tutorial offers. Do **Setup Option 2: Local Development Environment**. Make the project a github repo and commit as you go.

## How to submit:

* Fork & clone this repository
* Add to this `readme.md`below!
* Pull request :D 

## Paste the link to your finished repo here:


## Write a brief reflection on what you learned from this tutorial here:


This was pretty fun! I found this to be a very encompassing tutorial for react, covering everything from class components to altering state in a variety of different ways.

# Squares

The bottom of the component tree, all this really did was call a function it was grabbing from the game component, and assign then indexes as well. But even then the indexes were inside of the Board component, just being passed to the square through the renderSquare function inside of board as well.

# Board

I found board interesting, it started out as the work horse of the game, but ended up being a shell, just like Squares, all of the real logic ended up right inside of the game class and render function.

# Game

This is where all of the meat and potatoes was, even though the majority of what goes on in here was built into the Board function, it all ended up here. Also the building a game checking function outside of the game is strange, I want to see if it's possible to just build it inside of the class next time.