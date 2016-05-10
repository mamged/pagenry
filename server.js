var pagenry = require('./pagenry');
var watcher = new pagenry({
    alert:{
        html: '<a href="http://mashable.com">mashable.com</a> has been changed'
    }
});
watcher.start(function () {
    console.log('chaged')
});