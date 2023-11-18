const songs = [
  {
    id: "1",
    songName: "Oru Manam",
    subtitle: "Dhruva Natchathiram",
    poster: "assets/img/1.webp",
  },
  { id: "2", songName: "Badass", subtitle: "Leo", poster: "assets/img/2.webp" },
  {
    id: "3",
    songName: "Naa Ready",
    subtitle: "Leo",
    poster: "assets/img/3.webp",
  },
  {
    id: "4",
    songName: "Thalaivar Alappara",
    subtitle: "Jailer",
    poster: "assets/img/4.webp",
  },
  {
    id: "5",
    songName: "Kaavaalaa",
    subtitle: "Jailer",
    poster: "assets/img/5.webp",
  },
  {
    id: "6",
    songName: "Ninaithu Ninaithu Parthen II ",
    subtitle: "7/G Rainbow Colony",
    poster: "assets/img/6.webp",
  },
  {
    id: "7",
    songName: "Alai Paayum",
    subtitle: "Aadhalal Kadhal Seiveer",
    poster: "assets/img/7.webp",
  },
  {
    id: "8",
    songName: "Ranjithame",
    subtitle: "Varisu",
    poster: "assets/img/8.webp",
  },
  {
    id: "9",
    songName: "Aararai Kodi (Anbe Aaruyire)",
    subtitle: "Anbe Aaruyire",
    poster: "assets/img/9.webp",
  },
  {
    id: "10",
    songName: "Showkali",
    subtitle: "Achcham Yenbadhu Madamaiyada",
    poster: "assets/img/10.webp",
  },
  {
    id: "11",
    songName: "Oliyaaga Vandhaai",
    subtitle: "Ambikapathy",
    poster: "assets/img/11.webp",
  },
  {
    id: "12",
    songName: "Yakkai Thiri",
    subtitle: "Aayutha Ezhuthu",
    poster: "assets/img/12.webp",
  },
  {
    id: "13",
    songName: "Aayutha Ezhuthu ",
    subtitle: "24",
    poster: "assets/img/13.webp",
  },
  {
    id: "14",
    songName: "Secret Of Succes ",
    subtitle: "Boys",
    poster: "assets/img/14.webp",
  },
  {
    id: "15",
    songName: "Adheeraa",
    subtitle: "Cobra",
    poster: "assets/img/15.webp",
  },
  {
    id: "16",
    songName: "Maya Maya",
    subtitle: "Baba",
    poster: "assets/img/16.webp",
  },
  {
    id: "17",
    songName: "Vera Level Sago",
    subtitle: "Ayalan",
    poster: "assets/img/17.webp",
  },
  {
    id: "18",
    songName: "Damakku Damakku",
    subtitle: "Aadhavan",
    poster: "assets/img/18.webp",
  },
  {
    id: "19",
    songName: "Pala Palakura",
    subtitle: "Ayan",
    poster: "assets/img/19.webp",
  },
  {
    id: "20",
    songName: "Oru Punnagai Poove",
    subtitle: "12B",
    poster: "assets/img/20.webp",
  },
  {
    id: "21",
    songName: "Kadhal",
    subtitle: "Jayam",
    poster: "assets/img/21.webp",
  },
  {
    id: "22",
    songName: "Kadhal Thantha Vali",
    subtitle: "Jayam",
    poster: "assets/img/21.webp",
  },
  {
    id: "23",
    songName: "Jayam-Jusitce",
    subtitle: "Jayam",
    poster: "assets/img/21.webp",
  },
  {
    id: "24",
    songName: "Kanna Moochi",
    subtitle: "Jayam",
    poster: "assets/img/21.webp",
  },
  {
    id: "25",
    songName: "Kavithaiyae theriuma",
    subtitle: "Jayam",
    poster: "assets/img/21.webp",
  },
  {
    id: "26",
    songName: "Kodi Kodi Minnial",
    subtitle: "Jayam",
    poster: "assets/img/21.webp",
  },
  {
    id: "27",
    songName: "Kadhal",
    subtitle: "Jayam",
    poster: "assets/img/21.webp",
  },
 
];



export { songs };



// // search data start 
// let search_results = document.getElementsByClassName('search_results')[0];

// songs.forEach(element => {
//     const { id, songName, poster } = element;
//     // console.log(poster);
//     let card = document.createElement('a');
//     card.classList.add('card');
//     card.href = "#" + id;
//     card.innerHTML = `
    
//                             <div class="content">
//                                 ${songName}
//                             </div>
//     `;
//     search_results.appendChild(card);
// });


// let input = document.getElementsByTagName('input')[0];

// input.addEventListener('keyup', () => {
//     let input_value = input.value.toUpperCase();
//     let items = search_results.getElementsByTagName('a');

//     for (let index = 0; index < items.length; index++) {
//         let as = items[index].getElementsByClassName('content')[0];
//         let text_value = as.textContent || as.innerHTML;

//         if (text_value.toUpperCase().indexOf(input_value) > -1) {
//             items[index].style.display = "flex";
//         } else {
//             items[index].style.display = "none";
//         }

//         if (input.value == 0) {
//             search_results.style.display = "none";
//         } else {
//             search_results.style.display = "";
//         }

//     }
// })
