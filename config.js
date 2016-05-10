module.exports = {
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
};