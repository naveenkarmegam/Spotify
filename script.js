import { songs } from "./songs.js";
const music = new Audio('./assets/vande.mp3');
// music.play();

const currentHour = new Date().getHours();
const updateGreeting = () => {
    const greetingElement = document.getElementById('greeting');

    if (currentHour >= 5 && currentHour < 12) {
        greetingElement.textContent = 'Good Morning';
    } else if (currentHour >= 12 && currentHour < 18) {
        greetingElement.textContent = 'Good Afternoon';
    } else {
        greetingElement.textContent = 'Good Evening';
    }
};
updateGreeting();

const createSongItem = (song, index) => {
    return `
  
      <li class="songItem m-3">
        <div class="img_play">
          <img src="${song.poster}" alt="">
          <i class="bi like bi-suit-heart" id="${song.id}" data-index="${index}"></i>
          <i class="bi playListPlay bi-play-circle-fill" id="${song.id}" data-index="${index}"></i>
        </div>
        <h5 class="card-title">${song.songName}<br>
          <div class="subtitle">${song.subtitle}</div>
        </h5>
      </li>
     
    `;
};


const songListContainers = document.querySelectorAll('.pop_song');

 const songArray = []

songs.forEach((song, index) => {
    const listItemBody = createSongItem(song, index);
    songListContainers.forEach(container => {
        container.innerHTML += listItemBody;
        songArray.push(container)
    });
    
});
// console.log(songArray);





// const favList = document.getElementById('fav-list');

const menuSongItem = (song, index) => {
    return `
    <ul class="fa-ul">
      <li class="songItem">
        <div class="img_play">
          <img src="${song.poster}" alt="">
          
          <i class="bi play playListPlay bi-play-circle-fill" id="${song.id}" data-index="${index}"></i>
        </div>
        <h5 class="card-title">${song.songName}<br>
          <div class="subtitle">${song.subtitle}</div>
        </h5>
      </li>
      </ul>
    `;
};
songs.map((song, index) => {
    // const listItemMenu = menuSongItem(song, index);
    // favList.innerHTML += listItemMenu;
})


let recentlyPlayed = [];
const createRecentlyPlayedItem = (song) => {
    return `
        <ul>
            <li class="songItem">
                <div class="img_play">
                    <img src="${song.poster}" alt="">
                    <i class="bi playListPlay bi-play-circle-fill" id="${song.id}" data-index="${song.id}"></i>
                </div>
                <h5>${song.songName}<br>
                    <div class="subtitle">${song.subtitle}</div>
                </h5>
            </li>
        </ul>
    `;
};



const updateRecentlyPlayedMenu = () => {
    const recentlyPlayedMenu = document.getElementById('recentlyPlayedMenu');

    // Clear existing menu items
    recentlyPlayedMenu.innerHTML = '';

    // Add recently played songs to the menu
    recentlyPlayed.forEach((songId) => {
        const song = songs.find(s => s.id == songId);
        if (song) {
            const menuItem = createRecentlyPlayedItem(song);
            recentlyPlayedMenu.innerHTML += menuItem;
        }
    });

    // Add click event listener to each recently played song
    document.querySelectorAll('.recently-played .playListPlay').forEach((playButton) => {
        playButton.addEventListener('click', (event) => {
            const index = event.target.getAttribute('data-index');
            playSong(index);
        });
    });
};
// Event listener for clicking on a recently played song
document.getElementById('recentlyPlayedMenu').addEventListener('click', (event) => {
    const target = event.target;
    const playButton = target.closest('.playListPlay');
    
    if (playButton) {
        const index = playButton.getAttribute('data-index');
        playSong(index);
    }
});


const likeButtons = document.querySelectorAll('.like');

likeButtons.forEach((liked) => {
    liked.addEventListener('click', () => {
        
    });
});

let likedSongs = [];

likeButtons.forEach((liked) => {
    liked.addEventListener('click', () => {
        const songId = liked.getAttribute('id');

        // Toggle liked status
        const isLiked = liked.classList.contains('bi-suit-heart-fill');

        if (isLiked) {
            liked.classList.remove('bi-suit-heart-fill');
            liked.classList.add('bi-suit-heart');
            // Remove the song ID from the likedSongs array
            likedSongs = likedSongs.filter(id => id !== songId);
        } else {
            liked.classList.add('bi-suit-heart-fill');
            liked.classList.add('text-danger');
            liked.classList.remove('bi-suit-heart');
            // Add the song ID to the likedSongs array
            likedSongs.push(songId);
        }

        // Update the fav-list
        updateFavList();
    });
});


const updateFavList = () => {
    const favList = document.getElementById('fav-list');

    // Clear existing fav-list items
    favList.innerHTML = '';

    // Add liked songs to the fav-list
    likedSongs.forEach((songId) => {
        const song = songs.find(s => s.id == songId);
        if (song) {
            const listItem = createRecentlyPlayedItem(song); // Use the existing function for menu items
            favList.innerHTML += listItem;
        }
    });

    // Add click event listener to each fav-list item
    document.querySelectorAll('#fav-list .playListPlay').forEach((playButton) => {
        playButton.addEventListener('click', (event) => {
            const index = event.target.getAttribute('data-index');
            playSong(index);
        });
    });
};



// Function to play a song by index
function playSong(index) {
    music.src = `assets/audio/${index}.mp3`;
    poster_master_play.src = `assets/img/${index}.webp`;
    music.play();
    masterPlay.classList.remove('bi-play-fill');
    masterPlay.classList.add('bi-pause-fill');

    let songTitles = songs.filter((ele) => {
        return ele.id == index;
    });

    songTitles.forEach(item => {
        let { songName } = item;
        title.innerHTML = songName;
    });

    makeAllBackground();
    Array.from(document.getElementsByClassName('songItem'))[index - 1].style.background = "rgb(105, 105, 105, .1)";
    makeAllplays();
    wave.classList.add('active1');
    
}



document.addEventListener('DOMContentLoaded', () => {
    const homeContent = document.querySelector('.home-display');
    const searchContent = document.querySelector('.search-display');

    const homeButton = document.getElementById('home-content');
    const searchButton = document.getElementById('search-content');

    // Function to show the home display
    const showHomeDisplay = () => {
        homeContent.classList.remove('d-none');
        searchContent.classList.add('d-none');
    };

    // Function to show the search display
    const showSearchDisplay = () => {
        homeContent.classList.add('d-none');
        searchContent.classList.remove('d-none');
    };

    // Initial setup - show home display by default
    showHomeDisplay();
    // showSearchDisplay()

    // Event listeners for Home and Search buttons
    homeButton.addEventListener('click', (event) => {
        event.preventDefault();
        showHomeDisplay();
    });

    searchButton.addEventListener('click', (event) => {
        event.preventDefault();
        showSearchDisplay();
    });
});







//playon-control area...............
let masterPlay = document.getElementById('masterPlay');
let wave = document.getElementById('wave');

masterPlay.addEventListener('click', () => {
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
});

const makeAllplays = () => {
    Array.from(document.getElementsByClassName('playListPlay')).forEach((el) => {
        el.classList.add('bi-play-circle-fill');
        el.classList.remove('bi-pause-circle-fill');
    })
}
const makeAllBackground = () => {
    Array.from(document.getElementsByClassName('songItem')).forEach((el) => {
        el.style.background = 'rgb(105, 105, 105, .0)';
    })
}

let index = 0;
let poster_master_play = document.getElementById('poster_master_play');
let title = document.getElementById('title');
Array.from(document.getElementsByClassName('playListPlay')).forEach((e) => {
    e.addEventListener('click', (el) => {
        index = el.target.id;
       
        music.src = `assets/audio/${index}.mp3`;
        poster_master_play.src = `assets/img/${index}.webp`;
        music.play();
        masterPlay.classList.remove('bi-play-fill');
        masterPlay.classList.add('bi-pause-fill');
        




        // Add the recently played song to the array
        recentlyPlayed.unshift(index);

        // Keep only the latest 5 recently played songs
        if (recentlyPlayed.length > 5) { 
            recentlyPlayed.pop();
        }

        // Update the recently played menu
        updateRecentlyPlayedMenu();



        let songTitles = songs.filter((ele) => {
            return ele.id == index;
        });

        songTitles.forEach(item => {
            let { songName, subtitle } = item;
            title.innerHTML = `${songName} <div class="subtitle " id="song_subtitle">${subtitle}</div>`;
            // song_subtitle.textContent = subtitle;

            // download_music.setAttribute('download', songName);
        });

        makeAllBackground();
        Array.from(document.getElementsByClassName('songItem'))[index - 1].style.background = "rgb(105, 105, 105, .1)";
        makeAllplays();
        el.target.classList.remove('bi-play-circle-fill');
        el.target.classList.add('bi-pause-circle-fill');
        wave.classList.add('active1');
    });
})




let currentStart = document.getElementById('currentStart');
let currentEnd = document.getElementById('currentEnd');
let seek = document.getElementById('seek');
let bar2 = document.getElementById('bar2');
let dot = document.getElementsByClassName('dot')[0];

music.addEventListener('loadedmetadata', () => {
    let music_dur = music.duration;

    let min1 = Math.floor(music_dur / 60);
    let sec1 = Math.floor(music_dur % 60);

    if (sec1 < 10) {
        sec1 = `0${sec1}`;
    }
    currentEnd.innerText = `${min1}:${sec1}`;

    let progressBar = 0; // Initial value
    seek.value = progressBar;
    bar2.style.width = `${progressBar}%`;
    dot.style.left = `${progressBar}%`;

    // Update the progress bar as the time changes
    music.addEventListener('timeupdate', () => {
        let music_curr = music.currentTime;

        let min2 = Math.floor(music_curr / 60);
        let sec2 = Math.floor(music_curr % 60);

        if (sec2 < 10) {
            sec2 = `0${sec2}`;
        }
        currentStart.innerText = `${min2}:${sec2}`;

        progressBar = parseInt((music_curr / music_dur) * 100);
        seek.value = progressBar;
        bar2.style.width = `${progressBar}%`;
        dot.style.left = `${progressBar}%`;
    });
});

seek.addEventListener('change', () => {
    music.currentTime = seek.value * music.duration / 100;
});

let vol_icon = document.getElementById('vol_icon');
let vol = document.getElementById('vol');
let vol_bar = document.getElementsByClassName('vol_bar')[0];
let vol_dot = document.getElementById('vol_dot');

vol.addEventListener('change', () => {
    if (vol.value == 0) {
        vol_icon.classList.remove('bi-volume-up-fill');
        vol_icon.classList.remove('bi-volume-down-fill');
        vol_icon.classList.add('bi-volume-off-fill');
    }
    if (vol.value > 0) {
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
});


let back = document.getElementById('back');
let next = document.getElementById('next');

back.addEventListener('click', () => {
    index -= 1;
    if (index < 1) {
        index = Array.from(document.getElementsByClassName('songItem')).length;
    }
    music.src = `assets/audio/${index}.mp3`;
    poster_master_play.src = `assets/img/${index}.webp`;
    music.play();
    masterPlay.classList.remove('bi-play-fill');
    masterPlay.classList.add('bi-pause-fill');

    let songTitles = songs.filter((ele) => {
        return ele.id == index;
    });

    songTitles.forEach(item => {
        let { songName } = item;
        title.innerHTML = songName;
    });

    makeAllBackground();
    Array.from(document.getElementsByClassName('songItem'))[index - 1].style.background = "rgb(105, 105, 105, .1)";
    makeAllplays();
    el.target.classList.remove('bi-play-circle-fill');
    el.target.classList.add('bi-pause-circle-fill');
    wave.classList.add('active1');
})

next.addEventListener('click', () => {
    index++;
    if (index > Array.from(document.getElementsByClassName('songItem')).length) {
        index = 1;
    }
    music.src = `assets/audio/${index}.mp3`;
    poster_master_play.src = `assets/img/${index}.webp`;
    music.play();
    masterPlay.classList.remove('bi-play-fill');
    masterPlay.classList.add('bi-pause-fill');

    let songTitles = songs.filter((ele) => {
        return ele.id == index;
    });

    songTitles.forEach(item => {
        let { songName } = item;
        title.innerHTML = songName;
    });

    makeAllBackground();
    Array.from(document.getElementsByClassName('songItem'))[index - 1].style.background = "rgb(105, 105, 105, .1)";
    makeAllplays();
    el.target.classList.remove('bi-play-circle-fill');
    el.target.classList.add('bi-pause-circle-fill');
    wave.classList.add('active1');
});


let pop_song_left = document.getElementById('pop_song_left');
let pop_song_right = document.getElementById('pop_song_right');
let pop_song = document.getElementsByClassName('pop_song')[0];


pop_song_right.addEventListener('click', () => {
    pop_song.scrollLeft += 800;
});
pop_song_left.addEventListener('click', () => {
    pop_song.scrollLeft -= 800;
});

let pop_art_left = document.getElementById('pop_art_left');
let pop_art_right = document.getElementById('pop_art_right');
let Artists_bx = document.getElementsByClassName('pop_song')[1];



pop_art_right.addEventListener('click', () => {
    Artists_bx.scrollLeft += 800;
});
pop_art_left.addEventListener('click', () => {
    Artists_bx.scrollLeft -=800;
});





// search data start
let search_results = document.getElementsByClassName('search_results')[0];

songs.forEach(element => {
    const { id, songName, poster } = element;
    // console.log(poster);
    let card = document.createElement('a');
    card.classList.add('card');
    card.href = "#" + id;
    card.innerHTML = `

                            <div class="content">
                                ${songName}
                            </div>
    `;
    search_results.appendChild(card);
});

let input = document.getElementsByTagName('input')[0];

input.addEventListener('keyup', () => {
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
})


const search = document.querySelector("#search-bar");

search.addEventListener('input', () => {
    const searchText = search.value.toLowerCase();
    
    songArray.forEach((container) => {
        const songsInContainer = container.querySelectorAll('.songItem');
        
        songsInContainer.forEach((song) => {
            const songName = song.querySelector('.card-title').textContent.toLowerCase();
            
            if (songName.includes(searchText)) {
                song.style.display = 'block';
                
            } else {
                song.style.display = 'none';
                song.style.margin = '0px'
                song.style.padding = '0px'
            }
        });
    });
});

// search data end 



let shuffle = document.getElementsByClassName('shuffle')[0];

shuffle.addEventListener('click', () => {
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
});



const next_music = () => {
    if (index == songs.length) {
        index = 1
    } else {
        index++;
    }
    music.src = `assets/audio/${index}.mp3`;
    poster_master_play.src = `assets/img/${index}.webp`;
    music.play();
    masterPlay.classList.remove('bi-play-fill');
    masterPlay.classList.add('bi-pause-fill');
    download_music.href = `assets/audio/${index}.mp3`;
    let songTitles = songs.filter((ele) => {
        return ele.id == index;
    });

    songTitles.forEach(item => {
        let { songName } = item;
        title.innerHTML = songName;
        download_music.setAttribute('download', songName);
    });

    makeAllBackground();
    Array.from(document.getElementsByClassName('songItem'))[index - 1].style.background = "rgb(105, 105, 105, .1)";
    makeAllplays();
    el.target.classList.remove('bi-play-circle-fill');
    el.target.classList.add('bi-pause-circle-fill');
    wave.classList.add('active1');
}
const repeat_music = () => {
    index;
    music.src = `assets/audio/${index}.mp3`;
    poster_master_play.src = `assets/img/${index}.webp`;
    music.play();
    masterPlay.classList.remove('bi-play-fill');
    masterPlay.classList.add('bi-pause-fill');
    download_music.href = `assets/audio/${index}.mp3`;
    let songTitles = songs.filter((ele) => {
        return ele.id == index;
    });

    songTitles.forEach(item => {
        let { songName } = item;
        title.innerHTML = songName;
        download_music.setAttribute('download', songName);
    });

    makeAllBackground();
    Array.from(document.getElementsByClassName('songItem'))[index - 1].style.background = "rgb(105, 105, 105, .1)";
    makeAllplays();
    el.target.classList.remove('bi-play-circle-fill');
    el.target.classList.add('bi-pause-circle-fill');
    wave.classList.add('active1');
}

const random_music = () => {
    if (index == songs.length) {
        index = 1
    } else {
        index = Math.floor((Math.random() * songs.length) + 1);
    }
    music.src = `assets/audio/${index}.mp3`;
    poster_master_play.src = `assets/img/${index}.webp`;
    music.play();
    masterPlay.classList.remove('bi-play-fill');
    masterPlay.classList.add('bi-pause-fill');
    download_music.href = `assets/audio/${index}.mp3`;
    let songTitles = songs.filter((ele) => {
        return ele.id == index;
    });

    songTitles.forEach(item => {
        let { songName } = item;
        title.innerHTML = songName;
        download_music.setAttribute('download', songName);
    });

    makeAllBackground();
    Array.from(document.getElementsByClassName('songItem'))[index - 1].style.background = "rgb(105, 105, 105, .1)";
    makeAllplays();
    el.target.classList.remove('bi-play-circle-fill');
    el.target.classList.add('bi-pause-circle-fill');
    wave.classList.add('active1');
}



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
})

