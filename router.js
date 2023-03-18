module.exports = (functions) => {
    const express = require('express');
    const router = express.Router();

    router.post('/login', (req, res) => {
        functions.verifyLogin(req.body).then(result => {
            if (result.responseCode === 500) {
                res.status(500).send(result.message);
                return;
            }
            res.send(result.user);
        });
    });

    router.post('/uporabniki', (req, res) => {
        functions.Uporabniki(req.body).then(result => {
            if (result.responseCode === 500) {
                res.status(500).send(result.message);
                return;
            }
            res.send(result.data);
        });
    });

    router.post('/signup', (req, res) => {
        functions.signup(req.body).then(result => {
            if (result.responseCode === 500) {
                res.status(500).send(result.message);
                return;
            }
            res.send(result.signup);
        });
    });
      
    return router;
};