
import { songs } from "./songs.js";


const music = new Audio('audio/1.mp3');


const songListContainer = document.getElementById('songList');
const favList = document.getElementById('fav-list');

const createListItem = (song, index) => `
    <li class="songItem">
        <div class="img_play">
            <img src="${song.poster}" alt="">
            <i class="bi playListPlay bi-play-circle-fill" id="${index + 8}"></i>
        </div>
        <h5>${song.songName}<br>
            <div class="subtitle">${song.subtitle}</div>
        </h5>
    </li>`;

const populateList = (container, songs, templateFunction) => {
    container.innerHTML = songs.map((song, index) => templateFunction(song, index)).join('');
};

populateList(songListContainer, songs, createListItem);
populateList(favList, songs, (song) => `
    <li class="songItem">
        <span>${song.id}</span>
        <img src=${song.poster} alt="">
        <h5>${song.songName}<br>
            <div class="subtitle">${song.subtitle}</div>
        </h5>
        <i class="bi playListPlay bi-play-circle-fill" id="${song.id}"></i>
    </li>`);

// const handlePlayPause = () => {
//     if (music.paused || music.currentTime <= 0) {
//         music.play();
//         wave.classList.add('active1');
//         masterPlay.classList.remove('bi-play-fill');
//         masterPlay.classList.add('bi-pause-fill');
//     } else {
//         music.pause();
//         wave.classList.remove('active1');
//         masterPlay.classList.add('bi-play-fill');
//         masterPlay.classList.remove('bi-pause-fill');
//     }
// };

// const makeAllPlays = () => {
//     Array.from(document.getElementsByClassName('playListPlay')).forEach((el) => {
//         el.classList.add('bi-play-circle-fill');
//         el.classList.remove('bi-pause-circle-fill');
//     });
// };

// const handleSongClick = (el, index) => {
//     music.src = `audio/${index}.mp3`;
//     poster_master_play.src = `img/${index}.webp`;
//     music.play();
//     masterPlay.classList.remove('bi-play-fill');
//     masterPlay.classList.add('bi-pause-fill');
//     download_music.href = `audio/${index}.mp3`;

//     let songTitles = songs.filter((els) => els.id == index);

//     songTitles.forEach(elss => {
//         let { songName } = elss;
//         title.innerHTML = songName;
//         download_music.setAttribute('download', songName);
//     });

//     makeAllBackground();
//     Array.from(document.getElementsByClassName('songItem'))[index - 1].style.background = "rgb(105, 105, 105, .1)";
//     makeAllPlays();
//     el.classList.remove('bi-play-circle-fill');
//     el.classList.add('bi-pause-circle-fill');
//     wave.classList.add('active1');
// };

// const handleTimeUpdate = () => {
//     let music_curr = music.currentTime;
//     let music_dur = music.duration;

//     let min1 = Math.floor(music_dur / 60);
//     let sec1 = Math.floor(music_dur % 60);

//     // Update the time display...

//     let min2 = Math.floor(music_curr / 60);
//     let sec2 = Math.floor(music_curr % 60);

//     // Update the time display...

//     let progressBar = parseInt((music_curr / music_dur) * 100);
//     seek.value = progressBar;

//     // Update the progress bar...
// };

// const handleSeekChange = () => {
//     music.currentTime = seek.value * music.duration / 100;
// };

// // Add similar functions for other actions...

// masterPlay.addEventListener('click', handlePlayPause);

// Array.from(document.getElementsByClassName('playListPlay')).forEach((el, index) => {
//     el.addEventListener('click', () => handleSongClick(el, index + 8));
// });

// music.addEventListener('timeupdate', handleTimeUpdate);

// seek.addEventListener('change', handleSeekChange);

// Continue with the rest of your script...
// ... Previous code ...

const handlePlayPause = () => {
    if (music.paused || music.currentTime <= 0) {
        music.play();
        wave.classList.add('active1');
        masterPlay.classList.remove('bi-play-fill');
        masterPlay.classList.add('bi-pause-fill');
    } else {
        music.pause();
        wave.classList.remove('active1');
        masterPlay.classList.add('bi-play-fill');
        masterPlay.classList.remove('bi-pause-fill');
    }
};

const makeAllPlays = () => {
    Array.from(document.getElementsByClassName('playListPlay')).forEach((el) => {
        el.classList.add('bi-play-circle-fill');
        el.classList.remove('bi-pause-circle-fill');
    });
};

const handleSongClick = (el, index) => {
    music.src = `audio/${index}.mp3`;
    poster_master_play.src = `img/${index}.webp`;
    music.play();
    masterPlay.classList.remove('bi-play-fill');
    masterPlay.classList.add('bi-pause-fill');
    download_music.href = `audio/${index}.mp3`;

    let songTitles = songs.filter((els) => els.id == index);

    songTitles.forEach(elss => {
        let { songName } = elss;
        title.innerHTML = songName;
        download_music.setAttribute('download', songName);
    });

    makeAllBackground();
    Array.from(document.getElementsByClassName('songItem'))[index - 1].style.background = "rgb(105, 105, 105, .1)";
    makeAllPlays();
    el.classList.remove('bi-play-circle-fill');
    el.classList.add('bi-pause-circle-fill');
    wave.classList.add('active1');
};

const handleTimeUpdate = () => {
    let music_curr = music.currentTime;
    let music_dur = music.duration;

    let min1 = Math.floor(music_dur / 60);
    let sec1 = Math.floor(music_dur % 60);

    if (sec1 < 10) {
        sec1 = `0${sec1}`;
    }
    currentEnd.innerText = `${min1}:${sec1}`;

    let min2 = Math.floor(music_curr / 60);
    let sec2 = Math.floor(music_curr % 60);
    
    if (sec2 < 10) {
        sec2 = `0${sec2}`;
    }
    currentStart.innerText = `${min2}:${sec2}`;

    let progressBar = parseInt((music_curr / music_dur) * 100);
    seek.value = progressBar;

    let seekbar = seek.value;
    bar2.style.width = `${seekbar}%`;
    dot.style.left = `${seekbar}%`;
};

const handleSeekChange = () => {
    music.currentTime = seek.value * music.duration / 100;
};

masterPlay.addEventListener('click', handlePlayPause);

Array.from(document.getElementsByClassName('playListPlay')).forEach((el, index) => {
    el.addEventListener('click', () => handleSongClick(el, index + 8));
});

music.addEventListener('timeupdate', handleTimeUpdate);

seek.addEventListener('change', handleSeekChange);

// ... Continue with the rest of your script ...


// ... Previous code ...

let vol_icon = document.getElementById('vol_icon');
let vol = document.getElementById('vol');
let vol_bar = document.getElementsByClassName('vol_bar')[0];
let vol_dot = document.getElementById('vol_dot');

const handleVolumeChange = () => {
    if (vol.value == 0) {
        vol_icon.classList.remove('bi-volume-up-fill');
        vol_icon.classList.remove('bi-volume-down-fill');
        vol_icon.classList.add('bi-volume-off-fill');
    }
    if (vol.value > 0 && vol.value <= 50) {
        vol_icon.classList.remove('bi-volume-up-fill');
        vol_icon.classList.add('bi-volume-down-fill');
        vol_icon.classList.remove('bi-volume-off-fill');
    }
    if (vol.value > 50) {
        vol_icon.classList.add('bi-volume-up-fill');
        vol_icon.classList.remove('bi-volume-down-fill');
        vol_icon.classList.remove('bi-volume-off-fill');
    }
    let vol_a = vol.value;
    vol_bar.style.width = `${vol_a}%`;
    vol_dot.style.left = `${vol_a}%`;
    music.volume = vol_a / 100;
};

vol.addEventListener('change', handleVolumeChange);

let back = document.getElementById('back');
let next = document.getElementById('next');

const handleBackClick = () => {
    index -= 1;
    if (index < 1) {
        index = Array.from(document.getElementsByClassName('songItem')).length;
    }
    loadAndPlayMusic();
};

const handleNextClick = () => {
    index++;
    if (index > Array.from(document.getElementsByClassName('songItem')).length) {
        index = 1;
    }
    loadAndPlayMusic();
};

back.addEventListener('click', handleBackClick);
next.addEventListener('click', handleNextClick);

let pop_song_left = document.getElementById('pop_song_left');
let pop_song_right = document.getElementById('pop_song_right');
let pop_song = document.getElementsByClassName('pop_song')[0];

pop_song_right.addEventListener('click', () => {
    pop_song.scrollLeft += 330;
});

pop_song_left.addEventListener('click', () => {
    pop_song.scrollLeft -= 330;
});

let pop_art_left = document.getElementById('pop_art_left');
let pop_art_right = document.getElementById('pop_art_right');
let Artists_bx = document.getElementsByClassName('Artists_bx')[0];

pop_art_right.addEventListener('click', () => {
    Artists_bx.scrollLeft += 330;
});

pop_art_left.addEventListener('click', () => {
    Artists_bx.scrollLeft -= 330;
});

// ... Continue with the rest of your script ...
// ... Previous code ...

// Search data start
let search_results = document.getElementsByClassName('search_results')[0];

songs.forEach(element => {
    const { id, songName, poster } = element;
    let card = document.createElement('a');
    card.classList.add('card');
    card.href = "#" + id;
    card.innerHTML = `
        <img src="${poster}" alt="">
        <div class="content">${songName}</div>
    `;
    search_results.appendChild(card);
});

let input = document.getElementsByTagName('input')[0];

const handleInputChange = () => {
    let input_value = input.value.toUpperCase();
    let items = search_results.getElementsByTagName('a');

    for (let index = 0; index < items.length; index++) {
        let as = items[index].getElementsByClassName('content')[0];
        let text_value = as.textContent || as.innerHTML;

        if (text_value.toUpperCase().indexOf(input_value) > -1) {
            items[index].style.display = "flex";
        } else {
            items[index].style.display = "none";
        }

        if (input.value == 0) {
            search_results.style.display = "none";
        } else {
            search_results.style.display = "";
        }
    }
};

input.addEventListener('keyup', handleInputChange);
// Search data end

let shuffle = document.getElementsByClassName('shuffle')[0];

const handleShuffleClick = () => {
    let a = shuffle.innerHTML;

    switch (a) {
        case "next":
            shuffle.classList.add('bi-arrow-repeat');
            shuffle.classList.remove('bi-music-note-beamed');
            shuffle.classList.remove('bi-shuffle');
            shuffle.innerHTML = 'repeat';
            break;
        case "repeat":
            shuffle.classList.remove('bi-arrow-repeat');
            shuffle.classList.remove('bi-music-note-beamed');
            shuffle.classList.add('bi-shuffle');
            shuffle.innerHTML = 'random';
            break;
        case "random":
            shuffle.classList.remove('bi-arrow-repeat');
            shuffle.classList.add('bi-music-note-beamed');
            shuffle.classList.remove('bi-shuffle');
            shuffle.innerHTML = 'next';
            break;
    }
};

shuffle.addEventListener('click', handleShuffleClick);

const next_music = () => {
    if (index == songs.length) {
        index = 1
    } else {
        index++;
    }
    loadAndPlayMusic();
};

const repeat_music = () => {
    loadAndPlayMusic();
};

const random_music = () => {
    if (index == songs.length) {
        index = 1
    } else {
        index = Math.floor((Math.random() * songs.length) + 1);
    }
    loadAndPlayMusic();
};

music.addEventListener('ended', () => {
    let b = shuffle.innerHTML;

    switch (b) {
        case 'repeat':
            repeat_music();
            break;
        case 'next':
            next_music();
            break;
        case 'random':
            random_music();
            break;
    }
});

// ... Continue with the rest of your script ...
