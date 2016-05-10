var defaultConfig = require('./config');
var nodemailer = require('nodemailer'),
    fetch = require('node-fetch');

// If you are not on node v0.12, set a Promise library first, eg. 
// fetch.Promise = require('bluebird'); 

module.exports = {};

module.exports = function(config) {
    var interval, pageLength, fn = this;
    config ? config : config = {};
    config.url = config.url || defaultConfig.url,
    config.emailAccount = config.emailAccount || defaultConfig.emailAccount,
    config.pass = config.pass || defaultConfig.pass,
    config.interval = config.interval || defaultConfig.interval,
    config.sendingMail = config.sendingMail || defaultConfig.sendingMail,
    
    //message option
    config.alert ? config.alert : config.alert = {},
    config.alert.from = config.alert.from || defaultConfig.alert.from,
    config.alert.to = config.alert.to || defaultConfig.alert.to,
    config.alert.subject = config.alert.subject || defaultConfig.alert.subject,
    config.alert.text = config.alert.text || defaultConfig.alert.text,
    config.alert.html = config.alert.html || defaultConfig.alert.html;

    this.start = this.resume = function(then) {
        interval = setInterval(function() {
            fetch(config.url)
                .then(function(res) {
                    return res.text();
                }).then(function(body) {
                    if (!pageLength)
                        pageLength = body.length;
                    if (pageLength != body.length) {
                        pageLength = body.length;
                        then?then():false;
                        fn.sendAlertNow();
                    }
                });

        }, config.interval);
    }

    this.stop = function() {
        if (interval)
            clearInterval(interval)
        else
            console.warn('You are not watching yet! start or resume the watcher');
    }
    this.sendAlertNow = function() {

        // create reusable transporter object using the default SMTP transport
        var transporter = nodemailer.createTransport('smtps://' + encodeURI(config.emailAccount) + ':' + config.pass + '@smtp.gmail.com');

        // send mail with defined transport object
        transporter.sendMail(config.alert, function(error, info) {
            if (error) {
                return console.log(error);
            }
            console.log('Message sent');
        });
    }
}
