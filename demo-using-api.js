'use strict'

// load the mysql library
var mysql = require('promise-mysql');

// create a connection to our Cloud9 server
var connection = mysql.createPool({
    host     : 'localhost',
    user     : 'root',
    password : '',
    database: 'reddit',
    connectionLimit: 10
});

// load our API and pass it the connection
var RedditAPI = require('./reddit');

var myReddit = new RedditAPI(connection);

// We call this function to create a new user to test our API
// The function will return the newly created user's ID in the callback
/*myReddit.createUser({
    username: 'userName7',
    password: 'userPassword1'
})
    .then(newUserId => {
        // Now that we have a user ID, we can use it to create a new post
        // Each post should be associated with a user ID
        console.log('New user created! ID=' + newUserId);

        return myReddit.createPost({
            subredditId: 3,
            title: 'Hello Reddit! This is my first post',
            url: 'http://www.digg.com',
            userId: newUserId
        });
    })
    .then(newPostId => {
        // If we reach that part of the code, then we have a new post. We can print the ID
        console.log('New post created! ID=' + newPostId);
    })
    .catch(error => {
        console.log(error.stack);
    })
    .then(function() {
        return connection.end();
    });
*/

/*
//Retrieve all Posts
myReddit.getAllPosts()
    .then(function(result) {
        console.log(result);
    })
    .catch(error => {
        console.log(error.stack);
    });
*/

/*
//Test object of subreddit
var subreddit = {
    name: "reddit test7",
    description: "description of reddit test"
};
*/

/*
//Create Subreddit   
myReddit.createSubreddit(subreddit)
    .then(newSubRedditId => {
        console.log('New subredit created! ID=' + newSubRedditId);
    })
    .catch(error => {
        console.log(error.stack);
    });


//Return all Subreddits
myReddit.getAllSubreddits()
    .then(function(result) {
        console.log(result);
    })
    .catch(error => {
        console.log(error.stack);
    });
*/
    
//Test object of Vote 
var vote = {
    userId: 5,
    postId: 4,
    voteDirection: 1
};
    
// Create Vote
    myReddit.createVote(vote)
    .then (function (result) {
        console.log(result);
    })
    .catch(error => {
        console.log(error);
    });
