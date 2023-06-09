const express = require('express');
const router = express.Router();

router.get('/logged', (req, res) => {
    if(req.user) {
    res.render('logged', {userName: req.user.displayName, image: req.user.photos[0].value});
    }
});

router.get('/no-permission', (req, res) => {
  res.render('noPermission');
});

router.get('/profile', (req, res) => {
    if(req.user) {
    res.render('profile');
    }
  });

  router.get('/profile/settings', (req, res) => {
    if(req.user) {
    res.render('settings');
    }
  });

module.exports = router;