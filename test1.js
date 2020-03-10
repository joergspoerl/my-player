// Setup the event listeners
var nodeLIRC = require('node-lirc');
nodeLIRC.init();


nodeLIRC.on('stdout', function(event) {
	console.log('event: ', event);
	console.log(event.instructions);
	
	
	if (event.eventName == 'EVENT_BUTTON_NAME')
		nodeLIRC.writeLine('VOLUME_UP');
		
	
});

start();



/******************************************************* */
/* Helper
/******************************************************* */

async function start() {

    console.log("Start ...");
    await Sleep(3000000); // Pausiert die Funktion für 3 Sekunden
 }

function Sleep(milliseconds) {
    return new Promise(resolve => setTimeout(resolve, milliseconds));
 }