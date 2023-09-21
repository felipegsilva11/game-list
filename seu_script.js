// Função para reproduzir a música do Mario
function playMarioAudio() {
    const marioAudio = document.getElementById('mario-audio');
    marioAudio.play();
}

// Função para pausar a música do Mario
function pauseMarioAudio() {
    const marioAudio = document.getElementById('mario-audio');
    marioAudio.pause();
    marioAudio.currentTime = 0; // Reinicie a música
}

// Função para reproduzir a música da Snake
function playSnakeAudio() {
    const snakeAudio = document.getElementById('snake-audio');
    snakeAudio.play();
}

// Função para pausar a música da Snake
function pauseSnakeAudio() {
    const snakeAudio = document.getElementById('snake-audio');
    snakeAudio.pause();
    snakeAudio.currentTime = 0; // Reinicie a música
}
