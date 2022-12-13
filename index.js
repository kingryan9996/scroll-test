fetch("./data.json")
  .then(function (res) {
    return res.json();
  })
  .then(function (gallery) {
    init(gallery.data);
  });
function init(data) {
  const elGallery = document.querySelector(".gallery div");
  let i = 0;

  timer = setInterval(() => {
    if (i < 10) {
      elGallery.innerHTML = `<img src=${data[i].url}>`;
    }
    i++;
  }, 2500);
}
