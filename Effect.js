let ImagBox = document.querySelector(".img-box");
let imgWrap = document.querySelector(".img-wrap");
let originalImg = document.querySelector("#originalImg");
let line = document.querySelector("#line");

originalImg.style.width = ImagBox.offsetWidth + "px";

let leftSpace = ImagBox.offsetLeft;

ImagBox.onmousemove = function (e) {
  let boxWidht = e.pageX - leftSpace + "px";
  imgWrap.style.width = boxWidht;
  line.style.left = boxWidht;
};
