var spawn = require('child_process').spawn;
var rxjs = require('rxjs');

const subject = new rxjs.Subject();
 
// start mode2 and watch IR events
var child = spawn('mode2');


child.stdout.setEncoding('utf8');
child.stdout.on('data', function(data) {
    //Here is where the output goes
    //console.log('stdout: ' + data);
    reciveIR(data);

});

child.stderr.setEncoding('utf8');
child.stderr.on('data', function(data) {
    //Here is where the error output goes

    // console.log('stderr: ' + data);
    
});

child.on('close', function(code) {
    //Here you can get the exit code of the script

    // console.log('closing code: ' + code);

});


function reciveIR(data) {
    var cmds = data.split('\n');
    // console.log('cmd0: ', cmds[0]);
    // console.log('cmd1: ', cmds[1]);

    subject.next(cmds[0]);
}


exports.events = subject;