var btnplus = document.getElementsByClassName("fas fa-plus");
var btnmns = document.getElementsByClassName(" fas fa-minus");

var num = document.getElementsByClassName("num");
var price = document.getElementsByClassName("pr");

hh = document.getElementsByClassName("fa-heart");


for (let i = 0; i < btnplus.length; i++) {
  btnplus[i].addEventListener("click", function () {
      console.log(num)
    num[i].innerText++;
    total();
  });
}


for (let i = 0; i < btnplus.length; i++) {
  btnmns[i].addEventListener("click", function () {
    if (num[i].innerText > 0) {
      num[i].innerText--;
      total();
    }
  });
}



for (let i = 0; i < hh.length; i++) {
  hh[i].addEventListener("click", function () {
    if (hh[i].style.color === "black") {
      hh[i].style.color = "red";
    } else {
      hh[i].style.color = "black";
    }
  });
}
del = document.getElementsByClassName("kk");
ca = document.getElementsByClassName("card");

for (let i = 0; i < del.length; i++) {
  del[i].addEventListener("click", function () {
      console.log(del[i].parentElement)
    del[i].parentElement.remove()
    total();
   
  });
}


function total() {
  let somme = 0;
  for (let i = 0; i < price.length; i++) {
    somme += price[i].innerText * num[i].innerText;
  }
  document.getElementById("totalp").innerHTML = somme;
}
var price = document.getElementsByClassName("pr");
var num = document.getElementsByClassName("num");
