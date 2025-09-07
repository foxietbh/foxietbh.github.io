// save this as generatePlaylist.js and run with `node generatePlaylist.js`
import fs from "fs";
import path from "path";

// Path to your audio folder
const audioFolder = "./pages/player/audio/ambient_idm";

// Get all mp3 files in the folder
const files = fs.readdirSync(audioFolder).filter((f) => f.endsWith(".mp3"));

// Generate playlist array
const tracks = files.map((file) => {
  // Remove file extension for display name
  const name = file.replace(/\.mp3$/, "");
  // Construct the relative file path
  const filePath = path.join(audioFolder, file).replace(/\\/g, "/");
  return { name, file: filePath };
});

// Print the array as JS code
console.log("const tracks = [");
tracks.forEach((track) => {
  console.log(`  { name: "${track.name}", file: "${track.file}" },`);
});
console.log("];");
