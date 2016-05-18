pagenry
============

It's a node module that watching specific page and sends email notification .


----------


HOW TO USE IT
---------------

    $ npm install
    $ npm start

> To use Gmail you may need to configure ["Allow Less Secure Apps"](https://www.google.com/settings/security/lesssecureapps) 
> Also scroll down in this ["page"](https://www.google.com/settings/security/lesssecureapps) and find allow less secure apps
> 
> ![see arrow](http://i.imgur.com/WWJRY4P.png)
>
>
>  unless you are using 2FA in which case you would have to create an [Application Specific](https://security.google.com/settings/security/apppasswords) password. You also may need to unlock your account with ["Allow access to your Google account"](https://accounts.google.com/DisplayUnlockCaptcha) to use SMTP.
Example
---------------

    var pagenry = require('pagenry');
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