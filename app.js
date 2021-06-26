const musicInfo = document.querySelector('.music-info');
const musicArt = document.querySelector('.music-art'); 
const coverImage = document.querySelector('.cover-image'); 
const trackTitle = document.querySelector('.title');

const playButton = document.querySelector('.play-btn');
const pauseButton = document.querySelector('.pause-btn');
const previousButton = document.querySelector('.previous-btn');
const nextButton = document.querySelector('.next-btn');

const playlist = [
    {
        title: 'Art Of Silence',
        cover: "https://images.unsplash.com/photo-1515405295579-ba7b45403062?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        track: "./music/art-of-silence.mp3"
    },
    {
        title: 'Give Me A Smile',
        cover: "https://images.unsplash.com/photo-1531489956451-20957fab52f2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2000&q=80",
        track: "./music/give-me-a-smile.mp3"
    },
    {
        title: 'Happy Clappy Ukulele',
        cover: "https://images.unsplash.com/photo-1533481051286-d6396b74c877?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=682&q=80",
        track: "./music/happy-clappy-ukulele.mp3"
    }
];

const audio = document.querySelector('.music-track');

let i=0;
trackTitle.innerHTML = playlist[i].title;
coverImage.setAttribute('src', playlist[i].cover);
audio.setAttribute('src', playlist[i].track);



playButton.addEventListener('click', () => {
    audio.play();
    console.log(audio.currentTime);
    switchState('play');
})

pauseButton.addEventListener('click', () => {
    audio.pause();
    switchState('pause');
})

nextButton.addEventListener('click', () => {
    if(i<playlist.length-1)
    {
        i++;
        playTrack(i);
    }
    return;
})

previousButton.addEventListener('click', () => {
    if(i>0)
    {
        i--;
        playTrack(i);
    }
    return;
})

const playTrack = (i) => {

    let {title,cover,track} = playlist[i];

    audio.setAttribute('src', track);
    audio.play();
    switchState('play');

    coverImage.setAttribute('src', cover);
    trackTitle.innerHTML = title;
}

const switchState = (state) => {
    if (state ==='play')
    {   
        musicInfo.classList.add('slide-up')
        musicArt.classList.add('spin-track')
        pauseButton.classList.add('show')
        playButton.classList.replace('show','hide')
    }
    else
    {
        musicInfo.classList.remove('slide-up')
        musicArt.classList.remove('spin-track')
        pauseButton.classList.remove('show')
        playButton.classList.replace('hide','show')
    }
}