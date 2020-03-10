
var spawn = require('child_process').spawn;

var state = { running: false };

function playVideo(filename) {

    var child = spawn('omxplayer', [filename, '-b']);
    state.running = true;


    child.stdout.setEncoding('utf8');
    child.stdout.on('data', function (data) {
        //Here is where the output goes
        // console.log('stdout: ' + data);
    });

    child.stderr.setEncoding('utf8');
    child.stderr.on('data', function (data) {
        //Here is where the error output goes
        // console.log('stderr: ' + data);
    });

    child.on('close', function (code) {
        //Here you can get the exit code of the script
        state.running = false;
        // console.log('closing code: ' + code);
    });

    child.on('error', function (code) {
        //Here you can get the exit code of the script
        state.running = false;
        // console.log('error code: ' + code);
    });

}


exports.playVideo = playVideo;
exports.state   = state;
