const audio = document.getElementById("audio");
const playBtn = document.getElementById("playBtn");
const seek = document.getElementById("seek");
const volume = document.getElementById("volume");
const trackTitle = document.getElementById("trackTitle");

// Playlist
const tracks = [
  {
    name: "Alvedon - retire_final",
    file: "pages/player/audio/ambient_idm/Alvedon - retire_final.mp3",
  },
  {
    name: "Aphex Twin - 1",
    file: "pages/player/audio/ambient_idm/Aphex Twin - 1.mp3",
  },
  {
    name: "Aphex Twin - 17",
    file: "pages/player/audio/ambient_idm/Aphex Twin - 17.mp3",
  },
  {
    name: "Aphex Twin - 180db_130",
    file: "pages/player/audio/ambient_idm/Aphex Twin - 180db_130.mp3",
  },
  {
    name: "Aphex Twin - 19",
    file: "pages/player/audio/ambient_idm/Aphex Twin - 19.mp3",
  },
  {
    name: "Aphex Twin - 20",
    file: "pages/player/audio/ambient_idm/Aphex Twin - 20.mp3",
  },
  {
    name: "Aphex Twin - 3",
    file: "pages/player/audio/ambient_idm/Aphex Twin - 3.mp3",
  },
  {
    name: "Aphex Twin - 4",
    file: "pages/player/audio/ambient_idm/Aphex Twin - 4.mp3",
  },
  {
    name: "Aphex Twin - Actium ",
    file: "pages/player/audio/ambient_idm/Aphex Twin - Actium .mp3",
  },
  {
    name: "Aphex Twin - Ageispolis",
    file: "pages/player/audio/ambient_idm/Aphex Twin - Ageispolis.mp3",
  },
  {
    name: "Aphex Twin - aisatsana_102",
    file: "pages/player/audio/ambient_idm/Aphex Twin - aisatsana_102.mp3",
  },
  {
    name: "Aphex Twin - Alberto_Balsalm",
    file: "pages/player/audio/ambient_idm/Aphex Twin - Alberto_Balsalm.mp3",
  },
  {
    name: "Aphex Twin - Avril_14th",
    file: "pages/player/audio/ambient_idm/Aphex Twin - Avril_14th.mp3",
  },
  {
    name: "Aphex Twin - Bbydhyonchord",
    file: "pages/player/audio/ambient_idm/Aphex Twin - Bbydhyonchord.mp3",
  },
  {
    name: "Aphex Twin - Cockver10",
    file: "pages/player/audio/ambient_idm/Aphex Twin - Cockver10.mp3",
  },
  {
    name: "Aphex Twin - Delphium",
    file: "pages/player/audio/ambient_idm/Aphex Twin - Delphium.mp3",
  },
  {
    name: "Aphex Twin - Digeridoo",
    file: "pages/player/audio/ambient_idm/Aphex Twin - Digeridoo.mp3",
  },
  {
    name: "Aphex Twin - Fingerbib",
    file: "pages/player/audio/ambient_idm/Aphex Twin - Fingerbib.mp3",
  },
  {
    name: "Aphex Twin - Flim",
    file: "pages/player/audio/ambient_idm/Aphex Twin - Flim.mp3",
  },
  {
    name: "Aphex Twin - Green_Calx",
    file: "pages/player/audio/ambient_idm/Aphex Twin - Green_Calx.mp3",
  },
  {
    name: "Aphex Twin - Hedphelym",
    file: "pages/player/audio/ambient_idm/Aphex Twin - Hedphelym.mp3",
  },
  {
    name: "Aphex Twin - Heliosphan",
    file: "pages/player/audio/ambient_idm/Aphex Twin - Heliosphan.mp3",
  },
  {
    name: "Aphex Twin - I",
    file: "pages/player/audio/ambient_idm/Aphex Twin - I.mp3",
  },
  {
    name: "Aphex Twin - IZ-US",
    file: "pages/player/audio/ambient_idm/Aphex Twin - IZ-US.mp3",
  },
  {
    name: "Aphex Twin - korg_funk5_London_19.08.2023",
    file: "pages/player/audio/ambient_idm/Aphex Twin - korg_funk5_London_19.08.2023.mp3",
  },
  {
    name: "Aphex Twin - minipops_67_120.2_source field_mix",
    file: "pages/player/audio/ambient_idm/Aphex Twin - minipops_67_120.2_source field_mix.mp3",
  },
  {
    name: "Aphex Twin - Mookid",
    file: "pages/player/audio/ambient_idm/Aphex Twin - Mookid.mp3",
  },
  {
    name: "Aphex Twin - MT1_t29r2",
    file: "pages/player/audio/ambient_idm/Aphex Twin - MT1_t29r2.mp3",
  },
  {
    name: "Aphex Twin - Nanou2",
    file: "pages/player/audio/ambient_idm/Aphex Twin - Nanou2.mp3",
  },
  {
    name: "Aphex Twin - On",
    file: "pages/player/audio/ambient_idm/Aphex Twin - On.mp3",
  },
  {
    name: "Aphex Twin - Polynomial-C",
    file: "pages/player/audio/ambient_idm/Aphex Twin - Polynomial-C.mp3",
  },
  {
    name: "Aphex Twin - Ptolemy",
    file: "pages/player/audio/ambient_idm/Aphex Twin - Ptolemy.mp3",
  },
  {
    name: "Aphex Twin - Pulsewidth",
    file: "pages/player/audio/ambient_idm/Aphex Twin - Pulsewidth.mp3",
  },
  {
    name: "Aphex Twin - QKThr",
    file: "pages/player/audio/ambient_idm/Aphex Twin - QKThr.mp3",
  },
  {
    name: "Aphex Twin - Schottkey_7th_Path",
    file: "pages/player/audio/ambient_idm/Aphex Twin - Schottkey_7th_Path.mp3",
  },
  {
    name: "Aphex Twin - Tham",
    file: "pages/player/audio/ambient_idm/Aphex Twin - Tham.mp3",
  },
  {
    name: "Aphex Twin - Vordhosbn",
    file: "pages/player/audio/ambient_idm/Aphex Twin - Vordhosbn.mp3",
  },
  {
    name: "Aphex Twin - We_Are_the_Music_Makers",
    file: "pages/player/audio/ambient_idm/Aphex Twin - We_Are_the_Music_Makers.mp3",
  },
  {
    name: "Aphex Twin - Windowlicker",
    file: "pages/player/audio/ambient_idm/Aphex Twin - Windowlicker.mp3",
  },
  {
    name: "Aphex Twin - XMAS_EVET1_N",
    file: "pages/player/audio/ambient_idm/Aphex Twin - XMAS_EVET1_N.mp3",
  },
  {
    name: "Aphex Twin - Xtal",
    file: "pages/player/audio/ambient_idm/Aphex Twin - Xtal.mp3",
  },
  {
    name: "Autechre - Bike",
    file: "pages/player/audio/ambient_idm/Autechre - Bike.mp3",
  },
  {
    name: "Autechre - chenc9",
    file: "pages/player/audio/ambient_idm/Autechre - chenc9.mp3",
  },
  {
    name: "Autechre - Eutow",
    file: "pages/player/audio/ambient_idm/Autechre - Eutow.mp3",
  },
  {
    name: "Boards of Canada - Constants_Are_Changing",
    file: "pages/player/audio/ambient_idm/Boards of Canada - Constants_Are_Changing.mp3",
  },
  {
    name: "Boards of Canada - Dayvan_Cowboy",
    file: "pages/player/audio/ambient_idm/Boards of Canada - Dayvan_Cowboy.mp3",
  },
  {
    name: "Boards of Canada - Music_Is_Math",
    file: "pages/player/audio/ambient_idm/Boards of Canada - Music_Is_Math.mp3",
  },
  {
    name: "Boards of Canada - Olson",
    file: "pages/player/audio/ambient_idm/Boards of Canada - Olson.mp3",
  },
  {
    name: "Boards of Canada - Roygbiv",
    file: "pages/player/audio/ambient_idm/Boards of Canada - Roygbiv.mp3",
  },
  {
    name: "Boards of Canada - Wildlife_Analysis",
    file: "pages/player/audio/ambient_idm/Boards of Canada - Wildlife_Analysis.mp3",
  },
  {
    name: "Brian Eno - 11_Remastered_2004",
    file: "pages/player/audio/ambient_idm/Brian Eno - 11_Remastered_2004.mp3",
  },
  {
    name: "Brian Eno - An_Ending_Ascent_Remastered_2005",
    file: "pages/player/audio/ambient_idm/Brian Eno - An_Ending_Ascent_Remastered_2005.mp3",
  },
  {
    name: "Burial - Archangel",
    file: "pages/player/audio/ambient_idm/Burial - Archangel.mp3",
  },
  {
    name: "Burial - Distant_Lights",
    file: "pages/player/audio/ambient_idm/Burial - Distant_Lights.mp3",
  },
  {
    name: "Burial - Forgive",
    file: "pages/player/audio/ambient_idm/Burial - Forgive.mp3",
  },
  {
    name: "Burial - Ghost_Hardware",
    file: "pages/player/audio/ambient_idm/Burial - Ghost_Hardware.mp3",
  },
  {
    name: "Burial - Homeless",
    file: "pages/player/audio/ambient_idm/Burial - Homeless.mp3",
  },
  {
    name: "Burial - Near_Dark",
    file: "pages/player/audio/ambient_idm/Burial - Near_Dark.mp3",
  },
  {
    name: "Burial - Street_Halo",
    file: "pages/player/audio/ambient_idm/Burial - Street_Halo.mp3",
  },
  {
    name: "Burial, Four Tet - Nova",
    file: "pages/player/audio/ambient_idm/Burial, Four Tet - Nova.mp3",
  },
  {
    name: "Caleb Arredondo - Echo_Sax_No4",
    file: "pages/player/audio/ambient_idm/Caleb Arredondo - Echo_Sax_No4.mp3",
  },
  {
    name: "Chino Yoshio - 193193_Sleep",
    file: "pages/player/audio/ambient_idm/Chino Yoshio - 193193_Sleep.mp3",
  },
  {
    name: "Dorian Concept - Hide_Slow",
    file: "pages/player/audio/ambient_idm/Dorian Concept - Hide_Slow.mp3",
  },
  {
    name: "Elijah Fox - Wyoming",
    file: "pages/player/audio/ambient_idm/Elijah Fox - Wyoming.mp3",
  },
  {
    name: "Four Tet - Weird Fish Song",
    file: "pages/player/audio/ambient_idm/Four Tet - Weird Fish Song.mp3",
  },
  {
    name: "Home - Resonance",
    file: "pages/player/audio/ambient_idm/Home - Resonance.mp3",
  },
  {
    name: "Instupendo - Comfort_Chain",
    file: "pages/player/audio/ambient_idm/Instupendo - Comfort_Chain.mp3",
  },
  {
    name: "Luke Vibert, Aphex Twin, AFX - Spiral_Staircase_AFX Remix",
    file: "pages/player/audio/ambient_idm/Luke Vibert, Aphex Twin, AFX - Spiral_Staircase_AFX Remix.mp3",
  },
  {
    name: "Novalley - Youve_forgotten_that_warmth",
    file: "pages/player/audio/ambient_idm/Novalley - Youve_forgotten_that_warmth.mp3",
  },
  {
    name: "Oneohtrix Point Never - Chrome_Country",
    file: "pages/player/audio/ambient_idm/Oneohtrix Point Never - Chrome_Country.mp3",
  },
  {
    name: "Orbital - Belfast",
    file: "pages/player/audio/ambient_idm/Orbital - Belfast.mp3",
  },
  {
    name: "Orbital - HALCYON_ON_ON",
    file: "pages/player/audio/ambient_idm/Orbital - HALCYON_ON_ON.mp3",
  },
  {
    name: "Radiohead - Treefingers",
    file: "pages/player/audio/ambient_idm/Radiohead - Treefingers.mp3",
  },
  {
    name: "Software - Island_Sunrise",
    file: "pages/player/audio/ambient_idm/Software - Island_Sunrise.mp3",
  },
  {
    name: "Solar Fields - Introduction",
    file: "pages/player/audio/ambient_idm/Solar Fields - Introduction.mp3",
  },
  {
    name: "Susumu Yokota - Kodomotachi",
    file: "pages/player/audio/ambient_idm/Susumu Yokota - Kodomotachi.mp3",
  },
  {
    name: "Tanzmuzik - In_Flames",
    file: "pages/player/audio/ambient_idm/Tanzmuzik - In_Flames.mp3",
  },
  {
    name: "Vegyn - Big Fun Never Ending Nightmare",
    file: "pages/player/audio/ambient_idm/Vegyn - Big Fun Never Ending Nightmare.mp3",
  },
  {
    name: "Vegyn - Olbass_All_Bass_004_140_BPM",
    file: "pages/player/audio/ambient_idm/Vegyn - Olbass_All_Bass_004_140_BPM.mp3",
  },
  {
    name: "Yoshinori Sunahara - EARTH_BEAT",
    file: "pages/player/audio/ambient_idm/Yoshinori Sunahara - EARTH_BEAT.mp3",
  },
  {
    name: "Yves Tumor - Limerence",
    file: "pages/player/audio/ambient_idm/Yves Tumor - Limerence.mp3",
  },
];

let currentTrack = Math.floor(Math.random() * tracks.length);

// autoplay
window.addEventListener("DOMContentLoaded", () => {
  audio.muted = true; // allow autoplay
  loadTrack(currentTrack);
  // wait for user interaction to unmute
  document.body.addEventListener(
    "click",
    () => {
      audio.muted = false;
      audio.play();
    },
    { once: true }
  );
});

// Load track
function loadTrack(index) {
  audio.src = tracks[index].file;
  trackTitle.textContent = tracks[index].name;
  audio.load();
  audio.volume = volume.value / 100;
  audio.play();
}
loadTrack(currentTrack);

// Play / Pause toggle
function togglePlay() {
  if (audio.paused) {
    audio.play();
    playBtn.textContent = "⏸";
  } else {
    audio.pause();
    playBtn.textContent = "▶";
  }
}

// Stop
function stopTrack() {
  audio.pause();
  audio.currentTime = 0;
  playBtn.textContent = "▶";
}

// Next / Prev
function nextTrack() {
  let nextIndex;
  do {
    nextIndex = Math.floor(Math.random() * tracks.length);
  } while (nextIndex === currentTrack && tracks.length > 1);

  currentTrack = nextIndex;
  loadTrack(currentTrack);
  audio.volume = volume.value / 100;
  audio.play();
  playBtn.textContent = "⏸";
}
function prevTrack() {
  currentTrack = (currentTrack - 1 + tracks.length) % tracks.length;
  loadTrack(currentTrack);
  audio.volume = volume.value / 100;
  audio.play();
  playBtn.textContent = "⏸";
}

// Seek
audio.ontimeupdate = () => {
  seek.value = (audio.currentTime / audio.duration) * 100 || 0;
};
seek.oninput = () => {
  audio.currentTime = (seek.value / 100) * audio.duration;
};

// Volume
volume.oninput = () => {
  audio.volume = volume.value / 100;
};

audio.addEventListener("ended", () => {
  nextTrack();
});
