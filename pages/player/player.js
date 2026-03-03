// Audio Player Enhanced JavaScript

// DOM Elements
const audio = document.getElementById("audio");
const playBtn = document.getElementById("playBtn");
const seek = document.getElementById("seek");
const volume = document.getElementById("volume");
const trackTitle = document.getElementById("trackTitle");
const currentTime = document.getElementById("currentTime");
const totalTime = document.getElementById("totalTime");
const volumeDisplay = document.getElementById("volumeDisplay");
const playlist = document.getElementById("playlist");
const repeatBtn = document.getElementById("repeatBtn");
const eqBars = document.querySelectorAll(".eq-bar");

// Sample tracks - Replace with your actual playlist
const tracks = [
  {
    name: "Alvedon - retire_final",
    file: "https://pub-2c27f4fa82c044b3b5c6a51b67bac564.r2.dev/ambient_idm/Alvedon - retire_final.mp3",
  },
  {
    name: "Aphex Twin - 1",
    file: "https://pub-2c27f4fa82c044b3b5c6a51b67bac564.r2.dev/ambient_idm/Aphex Twin - 1.mp3",
  },
  {
    name: "Aphex Twin - 17",
    file: "https://pub-2c27f4fa82c044b3b5c6a51b67bac564.r2.dev/ambient_idm/Aphex Twin - 17.mp3",
  },
  {
    name: "Aphex Twin - 180db_130",
    file: "https://pub-2c27f4fa82c044b3b5c6a51b67bac564.r2.dev/ambient_idm/Aphex Twin - 180db_130.mp3",
  },
  {
    name: "Aphex Twin - 19",
    file: "https://pub-2c27f4fa82c044b3b5c6a51b67bac564.r2.dev/ambient_idm/Aphex Twin - 19.mp3",
  },
  {
    name: "Aphex Twin - 20",
    file: "https://pub-2c27f4fa82c044b3b5c6a51b67bac564.r2.dev/ambient_idm/Aphex Twin - 20.mp3",
  },
  {
    name: "Aphex Twin - 3",
    file: "https://pub-2c27f4fa82c044b3b5c6a51b67bac564.r2.dev/ambient_idm/Aphex Twin - 3.mp3",
  },
  {
    name: "Aphex Twin - 4",
    file: "https://pub-2c27f4fa82c044b3b5c6a51b67bac564.r2.dev/ambient_idm/Aphex Twin - 4.mp3",
  },
  {
    name: "Aphex Twin - Actium ",
    file: "https://pub-2c27f4fa82c044b3b5c6a51b67bac564.r2.dev/ambient_idm/Aphex Twin - Actium .mp3",
  },
  {
    name: "Aphex Twin - Ageispolis",
    file: "https://pub-2c27f4fa82c044b3b5c6a51b67bac564.r2.dev/ambient_idm/Aphex Twin - Ageispolis.mp3",
  },
  {
    name: "Aphex Twin - aisatsana_102",
    file: "https://pub-2c27f4fa82c044b3b5c6a51b67bac564.r2.dev/ambient_idm/Aphex Twin - aisatsana_102.mp3",
  },
  {
    name: "Aphex Twin - Alberto_Balsalm",
    file: "https://pub-2c27f4fa82c044b3b5c6a51b67bac564.r2.dev/ambient_idm/Aphex Twin - Alberto_Balsalm.mp3",
  },
  {
    name: "Aphex Twin - Avril_14th",
    file: "https://pub-2c27f4fa82c044b3b5c6a51b67bac564.r2.dev/ambient_idm/Aphex Twin - Avril_14th.mp3",
  },
  {
    name: "Aphex Twin - Bbydhyonchord",
    file: "https://pub-2c27f4fa82c044b3b5c6a51b67bac564.r2.dev/ambient_idm/Aphex Twin - Bbydhyonchord.mp3",
  },
  {
    name: "Aphex Twin - Cockver10",
    file: "https://pub-2c27f4fa82c044b3b5c6a51b67bac564.r2.dev/ambient_idm/Aphex Twin - Cockver10.mp3",
  },
  {
    name: "Aphex Twin - Delphium",
    file: "https://pub-2c27f4fa82c044b3b5c6a51b67bac564.r2.dev/ambient_idm/Aphex Twin - Delphium.mp3",
  },
  {
    name: "Aphex Twin - Digeridoo",
    file: "https://pub-2c27f4fa82c044b3b5c6a51b67bac564.r2.dev/ambient_idm/Aphex Twin - Digeridoo.mp3",
  },
  {
    name: "Aphex Twin - Fingerbib",
    file: "https://pub-2c27f4fa82c044b3b5c6a51b67bac564.r2.dev/ambient_idm/Aphex Twin - Fingerbib.mp3",
  },
  {
    name: "Aphex Twin - Flim",
    file: "https://pub-2c27f4fa82c044b3b5c6a51b67bac564.r2.dev/ambient_idm/Aphex Twin - Flim.mp3",
  },
  {
    name: "Aphex Twin - Green_Calx",
    file: "https://pub-2c27f4fa82c044b3b5c6a51b67bac564.r2.dev/ambient_idm/Aphex Twin - Green_Calx.mp3",
  },
  {
    name: "Aphex Twin - Hedphelym",
    file: "https://pub-2c27f4fa82c044b3b5c6a51b67bac564.r2.dev/ambient_idm/Aphex Twin - Hedphelym.mp3",
  },
  {
    name: "Aphex Twin - Heliosphan",
    file: "https://pub-2c27f4fa82c044b3b5c6a51b67bac564.r2.dev/ambient_idm/Aphex Twin - Heliosphan.mp3",
  },
  {
    name: "Aphex Twin - I",
    file: "https://pub-2c27f4fa82c044b3b5c6a51b67bac564.r2.dev/ambient_idm/Aphex Twin - I.mp3",
  },
  {
    name: "Aphex Twin - IZ-US",
    file: "https://pub-2c27f4fa82c044b3b5c6a51b67bac564.r2.dev/ambient_idm/Aphex Twin - IZ-US.mp3",
  },
  {
    name: "Aphex Twin - korg_funk5_London_19.08.2023",
    file: "https://pub-2c27f4fa82c044b3b5c6a51b67bac564.r2.dev/ambient_idm/Aphex Twin - korg_funk5_London_19.08.2023.mp3",
  },
  {
    name: "Aphex Twin - minipops_67_120.2_source field_mix",
    file: "https://pub-2c27f4fa82c044b3b5c6a51b67bac564.r2.dev/ambient_idm/Aphex Twin - minipops_67_120.2_source field_mix.mp3",
  },
  {
    name: "Aphex Twin - Mookid",
    file: "https://pub-2c27f4fa82c044b3b5c6a51b67bac564.r2.dev/ambient_idm/Aphex Twin - Mookid.mp3",
  },
  {
    name: "Aphex Twin - MT1_t29r2",
    file: "https://pub-2c27f4fa82c044b3b5c6a51b67bac564.r2.dev/ambient_idm/Aphex Twin - MT1_t29r2.mp3",
  },
  {
    name: "Aphex Twin - Nanou2",
    file: "https://pub-2c27f4fa82c044b3b5c6a51b67bac564.r2.dev/ambient_idm/Aphex Twin - Nanou2.mp3",
  },
  {
    name: "Aphex Twin - On",
    file: "https://pub-2c27f4fa82c044b3b5c6a51b67bac564.r2.dev/ambient_idm/Aphex Twin - On.mp3",
  },
  {
    name: "Aphex Twin - Polynomial-C",
    file: "https://pub-2c27f4fa82c044b3b5c6a51b67bac564.r2.dev/ambient_idm/Aphex Twin - Polynomial-C.mp3",
  },
  {
    name: "Aphex Twin - Ptolemy",
    file: "https://pub-2c27f4fa82c044b3b5c6a51b67bac564.r2.dev/ambient_idm/Aphex Twin - Ptolemy.mp3",
  },
  {
    name: "Aphex Twin - Pulsewidth",
    file: "https://pub-2c27f4fa82c044b3b5c6a51b67bac564.r2.dev/ambient_idm/Aphex Twin - Pulsewidth.mp3",
  },
  {
    name: "Aphex Twin - QKThr",
    file: "https://pub-2c27f4fa82c044b3b5c6a51b67bac564.r2.dev/ambient_idm/Aphex Twin - QKThr.mp3",
  },
  {
    name: "Aphex Twin - Schottkey_7th_Path",
    file: "https://pub-2c27f4fa82c044b3b5c6a51b67bac564.r2.dev/ambient_idm/Aphex Twin - Schottkey_7th_Path.mp3",
  },
  {
    name: "Aphex Twin - Tham",
    file: "https://pub-2c27f4fa82c044b3b5c6a51b67bac564.r2.dev/ambient_idm/Aphex Twin - Tham.mp3",
  },
  {
    name: "Aphex Twin - Vordhosbn",
    file: "https://pub-2c27f4fa82c044b3b5c6a51b67bac564.r2.dev/ambient_idm/Aphex Twin - Vordhosbn.mp3",
  },
  {
    name: "Aphex Twin - We_Are_the_Music_Makers",
    file: "https://pub-2c27f4fa82c044b3b5c6a51b67bac564.r2.dev/ambient_idm/Aphex Twin - We_Are_the_Music_Makers.mp3",
  },
  {
    name: "Aphex Twin - Windowlicker",
    file: "https://pub-2c27f4fa82c044b3b5c6a51b67bac564.r2.dev/ambient_idm/Aphex Twin - Windowlicker.mp3",
  },
  {
    name: "Aphex Twin - XMAS_EVET1_N",
    file: "https://pub-2c27f4fa82c044b3b5c6a51b67bac564.r2.dev/ambient_idm/Aphex Twin - XMAS_EVET1_N.mp3",
  },
  {
    name: "Aphex Twin - Xtal",
    file: "https://pub-2c27f4fa82c044b3b5c6a51b67bac564.r2.dev/ambient_idm/Aphex Twin - Xtal.mp3",
  },
  {
    name: "Autechre - Bike",
    file: "https://pub-2c27f4fa82c044b3b5c6a51b67bac564.r2.dev/ambient_idm/Autechre - Bike.mp3",
  },
  {
    name: "Autechre - chenc9",
    file: "https://pub-2c27f4fa82c044b3b5c6a51b67bac564.r2.dev/ambient_idm/Autechre - chenc9.mp3",
  },
  {
    name: "Autechre - Eutow",
    file: "https://pub-2c27f4fa82c044b3b5c6a51b67bac564.r2.dev/ambient_idm/Autechre - Eutow.mp3",
  },
  {
    name: "Boards of Canada - Constants_Are_Changing",
    file: "https://pub-2c27f4fa82c044b3b5c6a51b67bac564.r2.dev/ambient_idm/Boards of Canada - Constants_Are_Changing.mp3",
  },
  {
    name: "Boards of Canada - Dayvan_Cowboy",
    file: "https://pub-2c27f4fa82c044b3b5c6a51b67bac564.r2.dev/ambient_idm/Boards of Canada - Dayvan_Cowboy.mp3",
  },
  {
    name: "Boards of Canada - Music_Is_Math",
    file: "https://pub-2c27f4fa82c044b3b5c6a51b67bac564.r2.dev/ambient_idm/Boards of Canada - Music_Is_Math.mp3",
  },
  {
    name: "Boards of Canada - Olson",
    file: "https://pub-2c27f4fa82c044b3b5c6a51b67bac564.r2.dev/ambient_idm/Boards of Canada - Olson.mp3",
  },
  {
    name: "Boards of Canada - Roygbiv",
    file: "https://pub-2c27f4fa82c044b3b5c6a51b67bac564.r2.dev/ambient_idm/Boards of Canada - Roygbiv.mp3",
  },
  {
    name: "Boards of Canada - Wildlife_Analysis",
    file: "https://pub-2c27f4fa82c044b3b5c6a51b67bac564.r2.dev/ambient_idm/Boards of Canada - Wildlife_Analysis.mp3",
  },
  {
    name: "Brian Eno - 11_Remastered_2004",
    file: "https://pub-2c27f4fa82c044b3b5c6a51b67bac564.r2.dev/ambient_idm/Brian Eno - 11_Remastered_2004.mp3",
  },
  {
    name: "Brian Eno - An_Ending_Ascent_Remastered_2005",
    file: "https://pub-2c27f4fa82c044b3b5c6a51b67bac564.r2.dev/ambient_idm/Brian Eno - An_Ending_Ascent_Remastered_2005.mp3",
  },
  {
    name: "Burial - Archangel",
    file: "https://pub-2c27f4fa82c044b3b5c6a51b67bac564.r2.dev/ambient_idm/Burial - Archangel.mp3",
  },
  {
    name: "Burial - Distant_Lights",
    file: "https://pub-2c27f4fa82c044b3b5c6a51b67bac564.r2.dev/ambient_idm/Burial - Distant_Lights.mp3",
  },
  {
    name: "Burial - Forgive",
    file: "https://pub-2c27f4fa82c044b3b5c6a51b67bac564.r2.dev/ambient_idm/Burial - Forgive.mp3",
  },
  {
    name: "Burial - Ghost_Hardware",
    file: "https://pub-2c27f4fa82c044b3b5c6a51b67bac564.r2.dev/ambient_idm/Burial - Ghost_Hardware.mp3",
  },
  {
    name: "Burial - Homeless",
    file: "https://pub-2c27f4fa82c044b3b5c6a51b67bac564.r2.dev/ambient_idm/Burial - Homeless.mp3",
  },
  {
    name: "Burial - Near_Dark",
    file: "https://pub-2c27f4fa82c044b3b5c6a51b67bac564.r2.dev/ambient_idm/Burial - Near_Dark.mp3",
  },
  {
    name: "Burial - Street_Halo",
    file: "https://pub-2c27f4fa82c044b3b5c6a51b67bac564.r2.dev/ambient_idm/Burial - Street_Halo.mp3",
  },
  {
    name: "Burial, Four Tet - Nova",
    file: "https://pub-2c27f4fa82c044b3b5c6a51b67bac564.r2.dev/ambient_idm/Burial, Four Tet - Nova.mp3",
  },
  {
    name: "Caleb Arredondo - Echo_Sax_No4",
    file: "https://pub-2c27f4fa82c044b3b5c6a51b67bac564.r2.dev/ambient_idm/Caleb Arredondo - Echo_Sax_No4.mp3",
  },
  {
    name: "Chino Yoshio - 193193_Sleep",
    file: "https://pub-2c27f4fa82c044b3b5c6a51b67bac564.r2.dev/ambient_idm/Chino Yoshio - 193193_Sleep.mp3",
  },
  {
    name: "Dorian Concept - Hide_Slow",
    file: "https://pub-2c27f4fa82c044b3b5c6a51b67bac564.r2.dev/ambient_idm/Dorian Concept - Hide_Slow.mp3",
  },
  {
    name: "Elijah Fox - Wyoming",
    file: "https://pub-2c27f4fa82c044b3b5c6a51b67bac564.r2.dev/ambient_idm/Elijah Fox - Wyoming.mp3",
  },
  {
    name: "Four Tet - Weird Fish Song",
    file: "https://pub-2c27f4fa82c044b3b5c6a51b67bac564.r2.dev/ambient_idm/Four Tet - Weird Fish Song.mp3",
  },
  {
    name: "Home - Resonance",
    file: "https://pub-2c27f4fa82c044b3b5c6a51b67bac564.r2.dev/ambient_idm/Home - Resonance.mp3",
  },
  {
    name: "Instupendo - Comfort_Chain",
    file: "https://pub-2c27f4fa82c044b3b5c6a51b67bac564.r2.dev/ambient_idm/Instupendo - Comfort_Chain.mp3",
  },
  {
    name: "Luke Vibert, Aphex Twin, AFX - Spiral_Staircase_AFX Remix",
    file: "https://pub-2c27f4fa82c044b3b5c6a51b67bac564.r2.dev/ambient_idm/Luke Vibert, Aphex Twin, AFX - Spiral_Staircase_AFX Remix.mp3",
  },
  {
    name: "Novalley - Youve_forgotten_that_warmth",
    file: "https://pub-2c27f4fa82c044b3b5c6a51b67bac564.r2.dev/ambient_idm/Novalley - Youve_forgotten_that_warmth.mp3",
  },
  {
    name: "Oneohtrix Point Never - Chrome_Country",
    file: "https://pub-2c27f4fa82c044b3b5c6a51b67bac564.r2.dev/ambient_idm/Oneohtrix Point Never - Chrome_Country.mp3",
  },
  {
    name: "Orbital - Belfast",
    file: "https://pub-2c27f4fa82c044b3b5c6a51b67bac564.r2.dev/ambient_idm/Orbital - Belfast.mp3",
  },
  {
    name: "Orbital - HALCYON_ON_ON",
    file: "https://pub-2c27f4fa82c044b3b5c6a51b67bac564.r2.dev/ambient_idm/Orbital - HALCYON_ON_ON.mp3",
  },
  {
    name: "Radiohead - Treefingers",
    file: "https://pub-2c27f4fa82c044b3b5c6a51b67bac564.r2.dev/ambient_idm/Radiohead - Treefingers.mp3",
  },
  {
    name: "Software - Island_Sunrise",
    file: "https://pub-2c27f4fa82c044b3b5c6a51b67bac564.r2.dev/ambient_idm/Software - Island_Sunrise.mp3",
  },
  {
    name: "Solar Fields - Introduction",
    file: "https://pub-2c27f4fa82c044b3b5c6a51b67bac564.r2.dev/ambient_idm/Solar Fields - Introduction.mp3",
  },
  {
    name: "Susumu Yokota - Kodomotachi",
    file: "https://pub-2c27f4fa82c044b3b5c6a51b67bac564.r2.dev/ambient_idm/Susumu Yokota - Kodomotachi.mp3",
  },
  {
    name: "Tanzmuzik - In_Flames",
    file: "https://pub-2c27f4fa82c044b3b5c6a51b67bac564.r2.dev/ambient_idm/Tanzmuzik - In_Flames.mp3",
  },
  {
    name: "Vegyn - Big Fun Never Ending Nightmare",
    file: "https://pub-2c27f4fa82c044b3b5c6a51b67bac564.r2.dev/ambient_idm/Vegyn - Big Fun Never Ending Nightmare.mp3",
  },
  {
    name: "Vegyn - Olbass_All_Bass_004_140_BPM",
    file: "https://pub-2c27f4fa82c044b3b5c6a51b67bac564.r2.dev/ambient_idm/Vegyn - Olbass_All_Bass_004_140_BPM.mp3",
  },
  {
    name: "Yoshinori Sunahara - EARTH_BEAT",
    file: "https://pub-2c27f4fa82c044b3b5c6a51b67bac564.r2.dev/ambient_idm/Yoshinori Sunahara - EARTH_BEAT.mp3",
  },
  {
    name: "Yves Tumor - Limerence",
    file: "https://pub-2c27f4fa82c044b3b5c6a51b67bac564.r2.dev/ambient_idm/Yves Tumor - Limerence.mp3",
  },
];

// Player State
let currentTrack = 0;
let isPlaying = false;
let repeat = false;
let equalizerInterval;

// Initialize Player
function init() {
  shuffleTracks();
  populatePlaylist();
  loadTrack(currentTrack);
  audio.volume = volume.value / 100;
  updateVolumeDisplay();
  startEqualizer();
}

// Fisher-Yates Shuffle
function shuffleTracks() {
  let currentIndex = tracks.length;

  while (currentIndex != 0) {
    let randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    [tracks[currentIndex], tracks[randomIndex]] = [
      tracks[randomIndex],
      tracks[currentIndex],
    ];
  }
}

// Populate Playlist
function populatePlaylist() {
  playlist.innerHTML = "";
  tracks.forEach((track, index) => {
    const item = document.createElement("div");
    item.className = "playlist-item";
    item.textContent = `${index + 1}. ${track.name}`;
    item.onclick = () => playTrack(index);
    item.setAttribute("data-index", index);
    playlist.appendChild(item);
  });
  updatePlaylistHighlight();
}

// Load Track
function loadTrack(index) {
  if (tracks[index]) {
    audio.src = tracks[index].file;
    trackTitle.textContent = tracks[index].name;
    updatePlaylistHighlight();
    audio.load();

    // Reset seek bar
    seek.value = 0;
    currentTime.textContent = "0:00";
  }
}

// Play Specific Track
function playTrack(index) {
  currentTrack = index;
  loadTrack(currentTrack);

  // Handle autoplay restrictions
  const playPromise = audio.play();
  if (playPromise !== undefined) {
    playPromise
      .then(() => {
        isPlaying = true;
        playBtn.textContent = "⏸";
      })
      .catch((error) => {
        console.log("Autoplay prevented:", error);
        isPlaying = false;
        playBtn.textContent = "▶";
      });
  }
}

// Toggle Play/Pause
function togglePlay() {
  if (isPlaying) {
    audio.pause();
    playBtn.textContent = "▶";
    isPlaying = false;
  } else {
    const playPromise = audio.play();
    if (playPromise !== undefined) {
      playPromise
        .then(() => {
          playBtn.textContent = "⏸";
          isPlaying = true;
        })
        .catch((error) => {
          console.log("Play failed:", error);
        });
    }
  }
}

// Stop Track
function stopTrack() {
  audio.pause();
  audio.currentTime = 0;
  playBtn.textContent = "▶";
  isPlaying = false;
  seek.value = 0;
  currentTime.textContent = "0:00";
}

// Next Track
function nextTrack() {
  currentTrack = (currentTrack + 1) % tracks.length;
  playTrack(currentTrack);
}

// Previous Track
function prevTrack() {
  // If more than 3 seconds have passed, restart current track
  if (audio.currentTime > 3) {
    audio.currentTime = 0;
    return;
  }

  currentTrack = (currentTrack - 1 + tracks.length) % tracks.length;
  playTrack(currentTrack);
}

// Toggle Repeat
function toggleRepeat() {
  repeat = !repeat;
  repeatBtn.classList.toggle("active", repeat);

  // Visual feedback
  repeatBtn.style.transform = "scale(0.95)";
  setTimeout(() => {
    repeatBtn.style.transform = "scale(1)";
  }, 100);
}

// Toggle Playlist Visibility
function togglePlaylist() {
  const playlistEl = document.getElementById("playlist");
  const playlistBtn = document.getElementById("playlistBtn");
  const isVisible = playlistEl.classList.contains("show");

  if (isVisible) {
    playlistEl.classList.remove("show");
    playlistBtn.classList.remove("active");
  } else {
    playlistEl.classList.add("show");
    playlistBtn.classList.add("active");
  }
}

// Toggle Equalizer Visibility
function toggleEqualizer() {
  const eqPanel = document.getElementById("eqPanel");
  const eqBtn = document.getElementById("equalizerBtn");
  const isVisible = eqPanel.classList.contains("show");

  if (isVisible) {
    eqPanel.classList.remove("show");
    eqBtn.classList.remove("active");
  } else {
    eqPanel.classList.add("show");
    eqBtn.classList.add("active");
  }
}

// Update Playlist Highlight
function updatePlaylistHighlight() {
  const items = playlist.querySelectorAll(".playlist-item");
  items.forEach((item, index) => {
    item.classList.toggle("current", index === currentTrack);
  });

  // Scroll to current track if needed
  const currentItem = playlist.querySelector(".current");
  if (currentItem) {
    currentItem.scrollIntoView({ block: "nearest", behavior: "smooth" });
  }
}

// Format Time (seconds to MM:SS)
function formatTime(seconds) {
  if (isNaN(seconds)) return "0:00";
  const mins = Math.floor(seconds / 60);
  const secs = Math.floor(seconds % 60);
  return `${mins}:${secs.toString().padStart(2, "0")}`;
}

// Update Volume Display
function updateVolumeDisplay() {
  const vol = Math.round(volume.value);
  volumeDisplay.textContent = vol + "%";
  volumeDisplay.style.color = "#000000"; // always black
}

// Equalizer Animation
function startEqualizer() {
  if (equalizerInterval) {
    clearInterval(equalizerInterval);
  }

  equalizerInterval = setInterval(() => {
    if (isPlaying && !audio.paused) {
      eqBars.forEach((bar) => {
        const height = Math.random() * 25 + 5;
        bar.style.height = height + "px";

        // Add slight color variation
        const greenIntensity = Math.floor(Math.random() * 100 + 155);
        bar.style.backgroundColor = `rgb(0, ${greenIntensity}, 0)`;
      });
    } else {
      eqBars.forEach((bar) => {
        bar.style.height = "2px";
        bar.style.backgroundColor = "#00ff00";
      });
    }
  }, 150);
}

// Event Listeners
audio.ontimeupdate = () => {
  if (audio.duration) {
    seek.value = (audio.currentTime / audio.duration) * 100;
    currentTime.textContent = formatTime(audio.currentTime);
  }
};

audio.onloadedmetadata = () => {
  totalTime.textContent = formatTime(audio.duration || 0);
};

seek.oninput = () => {
  if (audio.duration) {
    audio.currentTime = (seek.value / 100) * audio.duration;
  }
};

volume.oninput = () => {
  audio.volume = volume.value / 100;
  updateVolumeDisplay();
};

// Handle track ending
audio.addEventListener("ended", () => {
  if (repeat) {
    audio.currentTime = 0;
    audio.play();
  } else {
    nextTrack();
  }
});

// Handle audio loading errors
audio.addEventListener("error", (e) => {
  console.error("Audio loading error:", e);
  trackTitle.textContent = "Error loading track";

  // Try next track after a short delay
  setTimeout(() => {
    nextTrack();
  }, 2000);
});

// Handle play/pause events
audio.addEventListener("play", () => {
  isPlaying = true;
  playBtn.textContent = "⏸";
});

audio.addEventListener("pause", () => {
  isPlaying = false;
  playBtn.textContent = "▶";
});

// Auto-start with user interaction (to handle autoplay policies)
document.addEventListener("DOMContentLoaded", () => {
  init();

  // Handle autoplay restrictions
  document.body.addEventListener(
    "click",
    () => {
      if (!isPlaying && audio.src) {
        audio.muted = false; // Unmute if muted for autoplay
      }
    },
    { once: true }
  );
});

// Cleanup on page unload
window.addEventListener("beforeunload", () => {
  if (equalizerInterval) {
    clearInterval(equalizerInterval);
  }
});

// Setup Web Audio API
const audioElement = document.getElementById("audio");
const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
const source = audioCtx.createMediaElementSource(audioElement);
const analyser = audioCtx.createAnalyser();
analyser.fftSize = 256; // more/less bars depending on resolution
const bufferLength = analyser.frequencyBinCount;
const dataArray = new Uint8Array(bufferLength);

// Connect nodes
source.connect(analyser);
analyser.connect(audioCtx.destination);

function animateEQ() {
  requestAnimationFrame(animateEQ);

  analyser.getByteFrequencyData(dataArray);

  // Map analyser bins to your 12 bars
  const step = Math.floor(bufferLength / eqBars.length);
  eqBars.forEach((bar, i) => {
    let sum = 0;
    for (let j = 0; j < step; j++) {
      sum += dataArray[i * step + j];
    }
    const avg = sum / step;
    bar.style.height = `${(avg / 255) * 100}px`;
  });
}

// Start animation after user interaction
audioElement.addEventListener("play", () => {
  audioCtx.resume();
  animateEQ();
});

// Export functions for global access (if needed)
window.togglePlay = togglePlay;
window.stopTrack = stopTrack;
window.nextTrack = nextTrack;
window.prevTrack = prevTrack;
window.togglePlaylist = togglePlaylist;
window.toggleEqualizer = toggleEqualizer;
