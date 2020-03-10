var ir            = require('./ir');
var videoPlayer   = require('./videoPlayerWrapper');
var rxjsOperators = require('rxjs/operators');

// console.log('Mainprogram is started');

let subription = ir.events
    .pipe(
        rxjsOperators.map( event => event.substring(event.length - 16)),
        // rxjsOperators.throttleTime(1000),
        // rxjsOperators.throttle(x => videoPlayer.eventClose)
    )
    .subscribe( event => {
        // console.log('event -> ', event);
        var filename = ''
        switch (event) {
            case '040004002c000000': filename = 'play.mp4'; break;
            case '0400040001000000': filename = '1.mp4'; break;
            case '0400040002000000': filename = '2.mp4'; break;
            case '0400040003000000': filename = '3.mp4'; break;
            case '0400040004000000': filename = '4.mp4'; break;
            case '0400040005000000': filename = '5.mp4'; break;
            case '0400040006000000': filename = '6.mp4'; break;
            case '0400040007000000': filename = '7.mp4'; break;
            case '0400040008000000': filename = '8.mp4'; break;
            case '0400040009000000': filename = '9.mp4'; break;
        }
        if (filename != '' && !videoPlayer.state.running) {
            let fullFilename = '/media/pi/VIDEOS/' + filename;
            // console.log('start play  -> ', fullFilename);
            videoPlayer.playVideo(fullFilename);
        }
    })