var router = require('express').Router();
var four0four = require('./utils/404')();
var data = require('./data');
data.profile = {};

router.get('/people', getPeople);
router.get('/person/:id', getPerson);

router.post('/user/login', login);
router.post('/user/logout', logout);

router.post('/user/profile/', updateProfile);
router.get('/user/profile/', getProfile);

router.get('/search', search);

router.get('/*', four0four.notFoundMiddleware);

module.exports = router;

//////////////

function search(req, res, next) {
    // This would then query against a datastore for the search term
    // and return the results with the search term used for the query

    // For demo purposes we're just going to send back the search term received
    console.log(req.query.searchTerm);
    res.status(200).send(req.query.searchTerm);
}

function getProfile(req, res, next) {
    console.log('User Requesting Read: ', req.cookies.userAuthToken);
    console.log('Profile found: ', data.profile[req.cookies.userAuthToken]);
    res.status(200).send(data.profile[req.cookies.userAuthToken]);
}

function updateProfile(req, res, next) {
    var user = req.cookies.userAuthToken;
    console.log('User Requesting Update: ', user);
    console.log('Updating user profile from: ', data.profile[user]);
    console.log('Updating user profile to: ', req.body);
    console.log('User Found: ', user);

    data.profile[user] = req.body;
    console.log('Updated profile for user: ', user);

    res.status(200).send(data.profile[user]);
}

function login(req, res, next) {
    var randomNumber = Math.random().toString();
    randomNumber = '35592211433686316';//randomNumber.substring(2, randomNumber.length);

    data.randomNumber = randomNumber;
    data.profile[randomNumber] = {
        firstName: 'Jim',
        lastName: 'Bob'
    };

    console.log('Logged in user: ', data.randomNumber);
    res.cookie('userAuthToken', randomNumber, {maxAge: 3600000, path: '/'});
    res.status(200).send(randomNumber);
}

function logout(req, res, next) {
    console.log('Logged out user: ', data.randomNumber);
    data.randomNumber = undefined;
    res.clearCookie('userAuthToken');
    res.status(200).send('logged out!');
}

function getPeople(req, res, next) {
    res.status(200).send(data.people);
}

function getPerson(req, res, next) {
    var id = +req.params.id;
    var person = data.people.filter(function(p) {
        return p.id === id;
    })[0];

    if (person) {
        res.status(200).send(person);
    } else {
        four0four.send404(req, res, 'person ' + id + ' not found');
    }
}
