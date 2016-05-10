# pagenry
============

It's a node module that watching specific page and sends email notification .


----------


HOW TO USE IT
---------------

    $ npm install
    $ npm start

Example
---------------

    var pagenry = require('./pagenry');
    var watcher = new pagenry({
        url: 'http://mashable.com',
    emailAccount: 'hello@gmail.com',
    pass: 'password',
    interval: 1000*60, // 1min
    sendingMail: true,
    alert: { // setup e-mail data with unicode symbols
        from: '"Fred Foo 👥" <hello@gmail.com>', // sender address
        to: 'hello@hotmail.com', // list of receivers
        subject: 'Hello You have an alert from pagenry ✔', // Subject line
        text: 'Hello world 🐴', // plaintext body
        html: '<b>Hello world 🐴</b>' // html body
    }
    });
    watcher.start(function () {
        console.log('changed')
    });

Copyright 2016 Mohamed Amged (@mamged) - Released under the MIT [License](LICENSE)