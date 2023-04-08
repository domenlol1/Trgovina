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

  router.post('/izdelki', (req, res) => {
    functions.izdelki(req.body).then(result => {
      if (result.responseCode === 500) {
        res.status(500).send(result.message);
        return;
      }
      res.send(result.data);
    });
  });

  router.post('/kosarica', (req, res) => {
    functions.addingtocart(req.body).then(result => {
      if (result.responseCode === 500) {
        res.status(500).send(result.message);
        return;
      }
      res.send(result.data);
    });
  });
  
  router.post('/displaykosarica', (req, res) => {
    functions.displayizdelki(req.body).then(result => {
      if (result.responseCode === 500) {
        res.status(500).send(result.message);
        return;
      }
      res.send(result.data);
    });
  });

  router.post('/deleteizdelek', (req, res) => {
    functions.deleteizdelek(req.body).then(result => {
      if (result.responseCode === 500) {
        res.status(500).send(result.message);
        return;
      }
      res.send(result.data);
    });
  });

  router.post('/addtonarocilo', (req, res) => {
    functions.addtonarocilo(req.body).then(result => {
      if (result.responseCode === 500) {
        res.status(500).send(result.message);
        return;
      }
      res.send(result.data);
    });
  });

  router.post('/deletecart', (req, res) => {
    functions.deletecart(req.body).then(result => {
      if (result.responseCode === 500) {
        res.status(500).send(result.message);
        return;
      }
      res.send(result.data);
    });
  });
  return router;
};
