
/* Definiendo sonido y teclas de los intrumentos*/

/*Piano*/
const pianoSound = document.getElementById('pianoSound');
const pianoTecla = document.getElementById('pianotecla');
const pianoTeclaDos = document.getElementById('pianoteclados');

/* Grafic functions and active functions for piano */

/* Fot PianoUno */
function playPianoSong() {
    const audioCtx = new AudioContext();
    const analyser = audioCtx.createAnalyser();
    const pianoAudio = new Audio('Sounds/Fpiano.mp3');
    const source = audioCtx.createMediaElementSource(pianoAudio);

    let canvas = document.getElementById('displayUno');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    let ctx = canvas.getContext("2d");

    source.connect(analyser);
    analyser.connect(audioCtx.destination);

    analyser.fftSize = 256;

    var bufferLength = analyser.frequencyBinCount;
    console.log(bufferLength);

    var dataArray = new Uint8Array(bufferLength);

    var WIDTH = canvas.width;
    var HEIGHT = canvas.height;

    var barWidth = (WIDTH / bufferLength) * 2.5;
    var barHeight;
    var x = 0;

    function renderFrame() {
        requestAnimationFrame(renderFrame);

        x = 0;

        analyser.getByteFrequencyData(dataArray);

        ctx.fillStyle = "#202124";
        ctx.fillRect(0, 0, WIDTH, HEIGHT);

        for (var i = 0; i < bufferLength; i++) {
        barHeight = dataArray[i];
        
        var r = barHeight + (25 * (i/bufferLength));
        var g = 250 * (i/bufferLength);
        var b = 50;

        ctx.fillStyle = "rgb(" + r + "," + g + "," + b + ")";
        ctx.fillRect(x, HEIGHT - barHeight, barWidth, barHeight);

        x += barWidth + 1;
        }
}

pianoAudio.play();
renderFrame();

}

function StopPianoSong() {
    pianoSound.pause()
}

function makeElementActive() {
    const botonPiano = document.getElementById('pianotecla');
    botonPiano.classList.add('active');
    
}

function justUnactive() {
    const botonPiano = document.getElementById('pianotecla');
    botonPiano.classList.remove('active')
}

/*For PianoDos */
function playPianoSongDos() {
    const audioCtxdos = new AudioContext();
    const analyserdos = audioCtxdos.createAnalyser();
    const pianoAudio = new Audio('Sounds/Fpiano.mp3');
    const sourceDos = audioCtxdos.createMediaElementSource(pianoAudio);

    let canvas = document.getElementById('displayDos');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    let ctxdos = canvas.getContext("2d");

    sourceDos.connect(analyserdos);
    analyserdos.connect(audioCtxdos.destination);

    analyserdos.fftSize = 256;

    var bufferLengthDos = analyserdos.frequencyBinCount;
    console.log(bufferLengthDos);

    var dataArrayDos = new Uint8Array(bufferLengthDos);

    var WIDTH = canvas.width;
    var HEIGHT = canvas.height;

    var barWidthDos = (WIDTH / bufferLengthDos) * 2.5;
    var barHeightDos;
    var x = 0;

    function renderFrame() {
        requestAnimationFrame(renderFrame);

        x = 0;

        analyserdos.getByteFrequencyData(dataArrayDos);

        ctxdos.fillStyle = "#202124";
        ctxdos.fillRect(0, 0, WIDTH, HEIGHT);

        for (var i = 0; i < bufferLengthDos; i++) {
        barHeightDos = dataArrayDos[i];
        
        var r = barHeightDos + (25 * (i/bufferLengthDos));
        var g = 250 * (i/bufferLengthDos);
        var b = 50;

        ctxdos.fillStyle = "rgb(" + r + "," + g + "," + b + ")";
        ctxdos.fillRect(x, HEIGHT - barHeightDos, barWidthDos, barHeightDos);

        x += barWidthDos + 1;
        }
}

pianoAudio.play();
renderFrame();

}

function StopPianoSong() {
    pianoSound.pause()
}

function makeElementActiveDos() {
    const botonPiano = document.getElementById('pianoteclados');
    botonPiano.classList.add('active');
    
}

function justUnactiveDos() {
    const botonPiano = document.getElementById('pianoteclados');
    botonPiano.classList.remove('active')
}


/*Violin*/
const violinSound = document.getElementById('violinSound');
const violinTecla = document.getElementById('violintecla');
const violinTeclaDos = document.getElementById('violinteclados');

/* Grafic functions and active functions for Violin */

/* For Violinuno */
function playViolinSong() {
    const audioCtx = new AudioContext();
    const analyser = audioCtx.createAnalyser();
    const violinAudio = new Audio('Sounds/F-Violin.mp3');
    const source = audioCtx.createMediaElementSource(violinAudio);

    let canvas = document.getElementById('displayUno');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    let ctx = canvas.getContext("2d");

    source.connect(analyser);
    analyser.connect(audioCtx.destination);

    analyser.fftSize = 256;

    var bufferLength = analyser.frequencyBinCount;
    console.log(bufferLength);

    var dataArray = new Uint8Array(bufferLength);

    var WIDTH = canvas.width;
    var HEIGHT = canvas.height;

    var barWidth = (WIDTH / bufferLength) * 2.5;
    var barHeight;
    var x = 0;

    function renderFrame() {
        requestAnimationFrame(renderFrame);

        x = 0;

        analyser.getByteFrequencyData(dataArray);

        ctx.fillStyle = "#202124";
        ctx.fillRect(0, 0, WIDTH, HEIGHT);

        for (var i = 0; i < bufferLength; i++) {
        barHeight = dataArray[i];
        
        var r = barHeight + (25 * (i/bufferLength));
        var g = 250 * (i/bufferLength);
        var b = 50;

        ctx.fillStyle = "rgb(" + r + "," + g + "," + b + ")";
        ctx.fillRect(x, HEIGHT - barHeight, barWidth, barHeight);

        x += barWidth + 1;
        }
}

violinAudio.play();
renderFrame();

}

/* For ViolinDos */
function playViolinSongDos() {
    const audioCtx = new AudioContext();
    const analyser = audioCtx.createAnalyser();
    const violinAudio = new Audio('Sounds/F-Violin.mp3');
    const source = audioCtx.createMediaElementSource(violinAudio);

    let canvas = document.getElementById('displayDos');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    let ctx = canvas.getContext("2d");

    source.connect(analyser);
    analyser.connect(audioCtx.destination);

    analyser.fftSize = 256;

    var bufferLength = analyser.frequencyBinCount;
    console.log(bufferLength);

    var dataArray = new Uint8Array(bufferLength);

    var WIDTH = canvas.width;
    var HEIGHT = canvas.height;

    var barWidth = (WIDTH / bufferLength) * 2.5;
    var barHeight;
    var x = 0;

    function renderFrame() {
        requestAnimationFrame(renderFrame);

        x = 0;

        analyser.getByteFrequencyData(dataArray);

        ctx.fillStyle = "#202124";
        ctx.fillRect(0, 0, WIDTH, HEIGHT);

        for (var i = 0; i < bufferLength; i++) {
        barHeight = dataArray[i];
        
        var r = barHeight + (25 * (i/bufferLength));
        var g = 250 * (i/bufferLength);
        var b = 50;

        ctx.fillStyle = "rgb(" + r + "," + g + "," + b + ")";
        ctx.fillRect(x, HEIGHT - barHeight, barWidth, barHeight);

        x += barWidth + 1;
        }
}

violinAudio.play();
renderFrame();

}

/*Saxophone*/
const saxoSound = document.getElementById('saxoSound');
const saxoTecla = document.getElementById('saxotecla');
const saxoTeclaDos = document.getElementById('saxoteclados');

/* For Violinuno */
function playSaxoSong() {
    const audioCtx = new AudioContext();
    const analyser = audioCtx.createAnalyser();
    const saxoAudio = new Audio('Sounds/f-Saxo.mp3');
    const source = audioCtx.createMediaElementSource(saxoAudio);

    let canvas = document.getElementById('displayUno');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    let ctx = canvas.getContext("2d");

    source.connect(analyser);
    analyser.connect(audioCtx.destination);

    analyser.fftSize = 256;

    var bufferLength = analyser.frequencyBinCount;
    console.log(bufferLength);

    var dataArray = new Uint8Array(bufferLength);

    var WIDTH = canvas.width;
    var HEIGHT = canvas.height;

    var barWidth = (WIDTH / bufferLength) * 2.5;
    var barHeight;
    var x = 0;

    function renderFrame() {
        requestAnimationFrame(renderFrame);

        x = 0;

        analyser.getByteFrequencyData(dataArray);

        ctx.fillStyle = "#202124";
        ctx.fillRect(0, 0, WIDTH, HEIGHT);

        for (var i = 0; i < bufferLength; i++) {
        barHeight = dataArray[i];
        
        var r = barHeight + (25 * (i/bufferLength));
        var g = 250 * (i/bufferLength);
        var b = 50;

        ctx.fillStyle = "rgb(" + r + "," + g + "," + b + ")";
        ctx.fillRect(x, HEIGHT - barHeight, barWidth, barHeight);

        x += barWidth + 1;
        }
}

saxoAudio.play();
renderFrame();

}

/* For ViolinDos */
function playSaxoSongDos() {
    const audioCtx = new AudioContext();
    const analyser = audioCtx.createAnalyser();
    const saxoAudio = new Audio('Sounds/f-Saxo.mp3');
    const source = audioCtx.createMediaElementSource(saxoAudio);

    let canvas = document.getElementById('displayDos');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    let ctx = canvas.getContext("2d");

    source.connect(analyser);
    analyser.connect(audioCtx.destination);

    analyser.fftSize = 256;

    var bufferLength = analyser.frequencyBinCount;
    console.log(bufferLength);

    var dataArray = new Uint8Array(bufferLength);

    var WIDTH = canvas.width;
    var HEIGHT = canvas.height;

    var barWidth = (WIDTH / bufferLength) * 2.5;
    var barHeight;
    var x = 0;

    function renderFrame() {
        requestAnimationFrame(renderFrame);

        x = 0;

        analyser.getByteFrequencyData(dataArray);

        ctx.fillStyle = "#202124";
        ctx.fillRect(0, 0, WIDTH, HEIGHT);

        for (var i = 0; i < bufferLength; i++) {
        barHeight = dataArray[i];
        
        var r = barHeight + (25 * (i/bufferLength));
        var g = 250 * (i/bufferLength);
        var b = 50;

        ctx.fillStyle = "rgb(" + r + "," + g + "," + b + ")";
        ctx.fillRect(x, HEIGHT - barHeight, barWidth, barHeight);

        x += barWidth + 1;
        }
}

saxoAudio.play();
renderFrame();

}

/* Boton de panico */
function panicFunction() {
    location.reload()
}
