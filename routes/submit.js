var express = require('express');
var router = express.Router();

const https = require('https');

router.get('/', function(req, res, next) {
  var params = {
    id: req.query.client_id,
    redirect_url: req.query.redirect_url,
    scopes: req.query.scope
  };

  var link = "https://id.twitch.tv/oauth2/authorize?" +
    "client_id=" + params.id +
    "&redirect_uri=" + params.redirect_url +
    "&response_type=token" +
    "&scope=" + encodeURI(params.scopes);
    
    res.redirect(link);
});

module.exports = router;
