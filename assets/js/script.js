/* jshint esversion: 6 */
(function() {
    "use strict";
    document.addEventListener('DOMContentLoaded', () => {
        const video = document.getElementById('video');
        const playPauseButton = document.getElementById('play-pause');
        const seekBar = document.getElementById('seek-bar');
        const currentTimeDisplay = document.getElementById('current-time');
        const durationDisplay = document.getElementById('duration');

        playPauseButton.addEventListener('click', () => {
            if (video.paused) {
                video.play();
                playPauseButton.textContent = 'Pause';
            } else {
                video.pause();
                playPauseButton.textContent = 'Play';
            }
        });

        video.addEventListener('timeupdate', () => {
            const currentTime = video.currentTime;
            const duration = video.duration;

            seekBar.value = (currentTime / duration) * 100;
            currentTimeDisplay.textContent = formatTime(currentTime);
            durationDisplay.textContent = formatTime(duration);
        });

        seekBar.addEventListener('input', () => {
            const duration = video.duration;
            const value = seekBar.value;

            video.currentTime = (value / 100) * duration;
        });

        const formatTime = (time) => {
            const minutes = Math.floor(time / 60);
            const seconds = Math.floor(time % 60);
            return `${minutes < 10 ? '0' : ''}${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
        };
    });
})();