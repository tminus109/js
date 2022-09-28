const section = document.querySelector("section");
const videos = [
  { name: "crystal" },
  { name: "elf" },
  { name: "frog" },
  { name: "monster" },
  { name: "pig" },
  { name: "rabbit" },
];
const request = window.indexedDB.open("videos_db", 1);
let db;

request.addEventListener("success", () => {
  db = request.result;
  init();
});

request.addEventListener("upgradeneeded", (e) => {
  db = e.target.result;
  const objectStore = db.createObjectStore("videos_os", { kepPath: "name" });
  objectStore.createIndex("mp4", "mp4", { unique: false });
  objectStore.createIndex("webm", "webm", { unique: false });
});

request.addEventListener("error", () => {
  console.error("Database failed to open.");
});

function init() {
  for (const video of videos) {
    const transaction = db.transaction("videos_os");
    const objectStore = transaction.objectStore("videos_os");
    const request = objectStore.get(video.name);
    request.addEventListener("success", () => {
      if (request.result) {
        displyVideo(
          request.result.mp4,
          request.result.webm,
          request.result.name
        );
      } else {
        fetchVideoFromNetwork(video);
      }
    });
  }
}

function fetchVideoFromNetwork(video) {
  const mp4Blob = fetch(`videos/${video.name}.mp4`).then((response) =>
    response.blob()
  );
  const webmBlob = fetch(`videos/${video.name}.webm`).then((response) =>
    response.blob()
  );
  Promise.all([mp4Blob, webmBlob]).then((values) => {
    displyVideo(values[0], values[1], video.name);
    storeVideo(values[0], values[1], video.name);
  });
}

function storeVideo(mp4Blob, webmBlob, name) {
  const transaction = db.transaction(["videos_db"], "readwrite");
  const objectStore = transaction.objectStore("videos_os");
  const request = objectStore.add(mp4Blob, webmBlob, name);
  request.addEventListener("success", () => {
    console.log("Video saved successfully to videos_db/videos_os");
  });
  request.addEventListener("error", () => {
    console.error(request.error);
  });
}

function displyVideo(mp4Blob, webmBlob, name) {
  const article = document.createElement("article");
  const h2 = document.createElement("h2");
  const video = document.createElement("video");
  const src1 = document.createElement("source");
  const src2 = document.createElement("source");
  h2.textContent = name;
  video.controls = true;
  src1.src = URL.createObjectURL(mp4Blob);
  src2.src = URL.createObjectURL(webmBlob);
  src1.type = "video/mp4";
  src2.type = "video/webm";
  section.appendChild(article);
  article.appendChild(h2);
  article.appendChild(video);
  video.appendChild(src1);
  video.appendChild(src2);
}
