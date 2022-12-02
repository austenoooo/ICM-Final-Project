const oesButton = document.getElementById("oestrogen_button");
const pogButton = document.getElementById("pogestrogen_button");

oesButton.addEventListener("click", function(){
  oesVisShow = !oesVisShow;
  console.log(oesVisShow);
});

pogButton.addEventListener("click", function(){
  pogVisShow = !pogVisShow;
});