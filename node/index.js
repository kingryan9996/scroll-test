$("body").prepend("<header>");
$("body").append("<footer>");

$("header").load("./inc.html header>div", head);
$("footer").load("./inc.html footer>div", foot);

let idx = localStorage.idx || 0;

function head() {   
  console.log(idx)
  $("header a").eq(idx).css("color","red")
  
  $("header a").click(function () {
    let idx = $(this).index();

    localStorage.idx = idx;

    // localStorage.setItem('idx',2); idx값 수정
    // localStorage.getItem('idx'); idx값 가져오기
    // localStorage.removeItem('idx'); 삭제
    // localStorage.clear(); 로컬스토리지 모두 삭제

  });
}

head();

function foot() {
  $("footer a").click(function () {
    alert("푸터!");
    // $("header a").css("color", "blue").eq(i).css("color", "red");
  });
}
