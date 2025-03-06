console.log("Let's Start JavaScript");
async function getSongs() {
  let a = await fetch("http://192.168.45.33:3000/spotify-clone/song");
  let response = await a.text();
  let div = document.createElement("div");
  div.innerHTML = response;
  let as = div.getElementsByTagName("a");
  let songs = [];
  for (let index = 0; index < as.length; index++) {
    const element = as[index];
    if (element.href.endsWith(".mp3")) {
      songs.push(element.href.split("/song/")[1]);
    }
  }
  return songs;
}
async function main() {
  let songs = await getSongs();
  console.log(songs);

  let songUL = document.querySelector(".songList").getElementsByTagName("ul")[0]
  for (const song of songs) {
      songUL.innerHTML = songUL.innerHTML + `<li>
                            <img class="invert" src="music.svg" alt="">
                            <div class="info">
                                <div>${song.replaceAll("%20", " ")}</div>
                                <div>Arpan</div>
                            </div>
                            <div class="playNow">
                                <span>Play Now</span>
                                <img class="invert" src="play.svg" alt="">
                            </div>
                        </li>`;
  }


//   let songUL = document.querySelector(".songList ul"); // Simplified selection
//   for (const song of songs) {
//     songUL.insertAdjacentHTML(
//       "beforeend",
//       `<li>${song.replaceAll("_", " ")}</li>`
//     );
//   }

  var audio = new Audio(songs[2]);
  // audio.play();

  audio.addEventListener("loadeddata", () => {
    console.log(audio.duration, audio.currentSrc, audio.currentTime);
  });
}

main();
