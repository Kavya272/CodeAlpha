const audio = document.getElementById('audio');
const playPauseButton = document.getElementById('play-pause');
const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');
const progress = document.getElementById('progress');

let isPlaying = false;

const songs = [
    { title: 'Song 1', artist: 'Artist 1', src: 'song1.mp3' },
    { title: 'Song 2', artist: 'Artist 2', src: 'song2.mp3' },
];

let currentSongIndex = 0;

function loadSong(index) {
    const song = songs[index];
    document.getElementById('title').innerText = song.title;
    document.getElementById('artist').innerText = song.artist;
    audio.src = song.src;
}

function playPause() {
    if (isPlaying) {
        audio.pause();
        playPauseButton.innerText = 'Play';
    } else {
        audio.play();
        playPauseButton.innerText = 'Pause';
    }
    isPlaying = !isPlaying;
}

function updateProgress() {
    const progressPercent = (audio.currentTime / audio.duration) * 100;
    progress.style.width = `${progressPercent}%`;
}

function nextSong() {
    currentSongIndex = (currentSongIndex + 1) % songs.length;
    loadSong(currentSongIndex);
    playPause();
}

function prevSong() {
    currentSongIndex =
        (currentSongIndex - 1 + songs.length) % songs.length;
    loadSong(currentSongIndex);
    playPause();
}

playPauseButton.addEventListener('click', playPause);
nextButton.addEventListener('click', nextSong);
prevButton.addEventListener('click', prevSong);
audio.addEventListener('timeupdate', updateProgress);

// Load the first song
loadSong(currentSongIndex);
