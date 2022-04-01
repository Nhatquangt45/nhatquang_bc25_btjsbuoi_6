/**
 * bài 1 :
 */

document.getElementById("btnBt").onclick = function () {
  let s = 0;
  let n = 0;
  while (s < 10000) {
    n++;
    s += n;
  }
  document.getElementById("footerTB").innerHTML =
    "số nguyên dương nhỏ nhất là : " + n;
};

/**
 * bài 2
 */

document.getElementById("btnTinh").onclick = function () {
  var x = document.getElementById("txtX").value * 1;
  var z = document.getElementById("txtN").value * 1;
  let lT = 1;
  let t = 0;
  for (var i = 1; i <= z; i++) {
    lT = lT * x;
    t += lT;
  }
  document.getElementById("tbTinh").innerHTML = t;
};

// i = 1 => 1<=3 => lt= 1 * 2 = 2 => t = lt + 0 = 2 ;
// i = 2 => 2<=3 => lt= 2 * 2 = 4 => t = 4 + 2 = 6 ;
// i = 3 => 3==3 => lt = 4*2 = 8 => t = 8+6 = 14;
/**
 * bài 3
 */
document.getElementById("btnGT").onclick = function () {
  var soGT = document.getElementById("txtGT").value * 1;
  tinhGiaiThua(soGT);
};
function tinhGiaiThua(n) {
  var n;
  var GT = 1;
  for (var i = 1; i <= n; i++) {
    GT *= i;
  }
  document.getElementById("footerGT").innerHTML = "Tổng số giai thừa = " + GT;
}
/**
 * bài 4
 *
 */
document.getElementById("btnIn").onclick = function () {
  var theDiv = "";
  for (var i = 1; i <= 10; i++) {
    if (i % 2 === 0) {
      theDiv += "<div class='bg-danger p-4'>" + "div chẵn " + i + "</div>";
    } else {
      theDiv += "<div class='bg-info p-4'>" + "div lẻ " + i + "</div>";
    }
  }
  document.getElementById("footerIn").innerHTML = theDiv;
};
/**bài 5
 *
 */

document.getElementById("btnNT").onclick = function () {
  var n = document.getElementById("txtNT").value * 1;
  var content = "";
  for (var i = 0; i <= n; i++) {
    if (tinhNT(i)) {
      content += i + "  ";
    }
  }
  document.getElementById("footerNT").innerHTML = content;
};
//hàm xử lý
function tinhNT(n) {
  var kiemTraSoNT = true;
  if (n < 2) {
    kiemTraSoNT = false;
  } else {
    for (var i = 2; i < n - 1; i++) {
      if (n % i === 0) {
        kiemTraSoNT = false;
        break;
      }
    }
    return kiemTraSoNT;
  }
}
