import fs from "fs";
import path from "path";

// Folder
const audioFolder = "./pages/player/audio/ambient_idm";

const files = fs.readdirSync(audioFolder).filter((f) => f.endsWith(".mp3"));

const tracks = files.map((file) => {
  const name = file.replace(/\.mp3$/, "");
  const filePath = path.join(audioFolder, file).replace(/\\/g, "/");
  return { name, file: filePath };
});

console.log("const tracks = [");
tracks.forEach((track) => {
  console.log(`  { name: "${track.name}", file: "${track.file}" },`);
});
console.log("];");
