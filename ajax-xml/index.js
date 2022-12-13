// fetch('./data.xml')
// .then(function(res){
//     return res.text();
// })
// .then(function(data){
//     console.log(data)
// })

$.ajax({
  url: "./data.xml",
  beforeSend: function () {
    console.log("준비");
  },
  complete: function () {
    console.log("완료");
  },

  error: function () {
    console.log("실패");
  },

  success: function (data) {
    console.log($(data).find("item").eq(1).html(), $(data).find("item").length);
    // $(data).find('item').forEach(function(){
    // 바닐라와 제이쿼리 섞어쓰면 에러남
    // })
    $(data)
      .find("item")
      .each(function (key, value) {
        console.log(key, value);
      });
    $(data)
      .find("item")
      .each(function (key, value) {
        console.log($(value).find("url").text()),
          $("body").prepend(`<img src="${$(value).find("url").text()}">`);
        $("body").append(`<img src="${$(value).find("url").text()}">`),
          console.log("성공");
      });
    let lin = "";
    $(data)
      .find("item")
      .each(function (key, value) {
        url = $(value).find("url").text();
        title = $(value).find("title").text();

        lin += `<figure>
        <img src="${url}">
        <figcaption> ${title} </figcaption>
        </figure>`;
        $(".gallery > div").html(lin);
      });
    $(".gallery figure").click(function () {
        let key = $(this).index();
        let detail = $(data).find('item').eq(key).find('detail').html()
      alert(detail);
    });
  },
});

$("선택자").method();

$("about:nth-of0type(2)");
$(".about > button").click();
