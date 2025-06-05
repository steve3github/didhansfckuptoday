const yesWords = [
  "Yes",
  "Yeah",
  "Yep",
  "Yup",
  "Yea",
  "Sure",
  "Of course",
  "Absolutely",
  "Affirmative",
  "Certainly",
  "Indeed",
  "You bet",
  "Aye",
  "Roger",
  "Totally",
  "Definitely",
  "For sure"
];

function getDayOfYear() {
   const now = new Date();
   const start = new Date(now.getFullYear(), 0, 0);
   const diff = now - start;
   const oneDay = 1000 * 60 * 60 * 24;
   return Math.floor(diff / oneDay);
}

const day = getDayOfYear();
const index = day % yesWords.length;
const todayYes = yesWords[index];

// document.getElementsByClassName("yes-word").textContent = yesWords[index];

const elements = document.querySelectorAll(".yes-word");

elements.forEach(el => {
  el.textContent = yesWords[index];
});


// class AdventMember {
//    constructor(folder, bgm, soundBite, pic, gif, counter) {
//       this.bgm = folder + '/' + bgm;
//       this.soundBite = folder + '/' + soundBite;
//       this.pic = folder + '/' + pic;
//       this.gif = folder + '/' + gif;
//       this.counter = counter;
//    }
// }

// // create advent members
// const biboo = new AdventMember('biboo', 'biboo-bgm.mp3', 'dang-it-biboo.mp3', 'biboo.jpg', 'breakdance-biboo.gif', 'dangits');
// const fwmc = new AdventMember('fwmc', 'fwmc-bgm.mp3', 'fwmc-baubau.mp3', 'fuwawa.jpg', 'fuwamoco-mococo.gif', 'baubaus');

// const advent_members = [biboo, fwmc];

// const submit = document.getElementById('submit-button');
// const searchBar = document.getElementById('search-bar');
// const soundBite = document.getElementById('soundBite-counter');
// let soundBites = 0;
// let advent_images = 1;

// let sound = new Audio('biboo/dang-it-biboo.mp3');
// sound.volume = 0.75;

// document.getElementById("bgm").volume = 0.5;

// let advent_pic = document.createElement('img')
// advent_pic.src = 'biboo/biboo.jpg'

// let advent_gif = 'biboo/breakdance-biboo.gif';
// let counter = 'dangits'

// function handleClick(event) {
//    // pressing enter counts as a mouse click??
//    if (event.target == submit) {
//       return
//    }

//    // create an advent pic
//    advent_pic.className = 'popup'
//    advent_pic.style.left = (event.pageX - 20) + 'px'
//    advent_pic.style.top = (event.pageY - 20) + 'px'

//    // randomize advent_pic popup 
//    const randomScale = Math.random() * 10 + 1
//    const randomRotation = Math.random() * 360 - 180
//    setTimeout(() => {
//       advent_pic.className += ' disappear'
//       advent_pic.style.transform = `scale(${randomScale}) rotate(${randomRotation}deg)`
//    }, 1)

//    // add advent_pic to the dom
//    document.body.appendChild(advent_pic)

//    // cleanup advent_pic :(
//    setTimeout(() => {
//       advent_pic.remove()
//    }, 502)

//    // dang it!
//    sound.cloneNode().play()

//    // update counter
//    soundBites++
//    soundBite.innerHTML = soundBites + ' ' + counter;

//    // add advent_pic images to background
//    const container = document.getElementById("background-container");
//    container.innerHTML = ''; 

//    const newCount = advent_images + 1;

//    for (let i = 0; i < newCount; i++) {
//       const newDiv = document.createElement("div");
//       newDiv.classList.add("image");
//       newDiv.style.backgroundImage = `url('`+advent_gif+`')`;
//       container.appendChild(newDiv);
//    }
//    advent_images++;
// }

// function handleKeyPress(event) {
//    searchBar.focus()
// }

// function playMusic() {
//    document.getElementById("bgm").play();
//    document.getElementById("invisible-button").style.display = "none";
// }

// let i = 1;

// function changeTheme(event) {
//    event.stopPropagation();

//    let current_member = advent_members[i];
//    console.log(advent_members[i]);

//    // change music
//    const music = document.getElementById("bgm");
//    music.src = current_member.bgm;
//    music.load();

//    // change jpg
//    advent_pic.src = current_member.pic;
   

//    // change sound Bites
//    sound = new Audio(current_member.soundBite);

//    // change gif
//    const gif = document.getElementById("advent-img");
//    gif.src = current_member.gif;
//    advent_gif = current_member.gif;

//    // change counter
//    counter = current_member.counter;

//    // reset 
//    document.getElementById("background-container").innerHTML = "";
//    soundBites = 0;
//    advent_images = 0;


//    i = (i + 1) % 2;
// }

// document.body.addEventListener('keyup', handleKeyPress)
// document.body.addEventListener('click', handleClick)