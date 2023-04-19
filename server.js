
const errMsg = document.getElementById("errMsg");
const vid = document.getElementById("vid");
const petButton = document.getElementById("pet");
const feedButton = document.getElementById("feed");
const basementButton = document.getElementById("basement");
const eatButton = document.getElementById("eat");
const nextButton = document.getElementById("next");
const desc = document.getElementById("desc");
let length = 0;
let dir = ""    
let ind = 0;
let currentDate;
let hr = 0;

function setup() {

    //hide buttons
    petButton.style.display = "none";
    feedButton.style.display = "none";
    basementButton.style.display = "none";
    eatButton.style.display = "none";
    desc.innerHTML = "";
    currentDate = new Date();
    hr = currentDate.getHours();
    //hr = getRandomInt(24);
    //alert(hr);
    
    if (hr == 8 || hr == 13 || hr == 20 || hr == 0) { // feed
        disp("videos/hungry", 1, "Bubu is hungry. It's time to feed him");
        feedButton.style.display = "inline";
    } else if (hr == 21) { // inhaler
        disp("videos/inhaler", 1, "Bubu is breathing through his inhaler to help with his asthma");
    } else if (hr == 18) { // teeth
        disp("videos/teeth", 1, "Bubu is getting his teeth brushed");
    } else if ((hr >= 14 && hr < 20) || (hr > 8 && hr < 13) || (hr > 21 && hr <= 23)) { // free time
        let i = getRandomInt(3);
        if (i == 0) {
            disp("videos/play", 7, "Bubu is currently playing!");
        } else if (i == 1) {
            disp("videos/bed/day", 2, "Bubu is relaxing");
        } else {
            disp("videos/door", 4, "Bubu wants to go downstairs");
            basementButton.style.display = "inline";
        }
    }
    else { // sleeping
        disp("videos/bed/night", 1, "Bubu is sleepy. Good night!");
    }

}

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function pet() {
    petButton.style.display = "none";
    vid.src = vid.src.split(".")[0] + "-pet.mp4";
}

function feed() {
    feedButton.style.display = "none";
    if (hr == 8 || hr == 20) {
        disp("videos/medFood", 1, "Bubu's heart medication and vet prescribed kidney meal are being prepared");
    } else {
        disp("videos/prepFood", 1, "Bubu's vet prescribed kidney diet meal is being prepared");
    }
    eatButton.style.display = "inline";
}

function eat() {
    eatButton.style.display = "none";
    disp("videos/eat", 1, "Bubu is enjoying his meal");
}

function basement() {
    basementButton.style.display = "none";
    disp("videos/basement", 2, "Bubu is playing downstairs");
}

function nextVid() {
    ind += 1;
    if (ind >= length) {
        ind = 0;
    }
    vid.src = dir + "/" + ind + ".mp4";
    if (dir == "videos/door" && (ind == 2 || ind == 3)) {
        petButton.style.display = "inline";
    }
}

function disp(d, l, txt) {
    ind = getRandomInt(l);
    dir = d;
    length = l;

    vid.src = d + "/" + ind + ".mp4";
    desc.innerHTML = txt;
    if (d == "videos/door" && (ind == 2 || ind == 3)) {
        petButton.style.display = "inline";
    }
    if (l == 1) {
        nextButton.style.display = "none";
    } else {
        nextButton.style.display = "inline";
    }
}