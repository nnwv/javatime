<script type="text/javascript">
function color_changer() {
var now = new Date();
var seconds = now.getSeconds();
var bcolor = "white";
if(seconds == 0 || seconds == 7 || seconds == 14 || seconds == 21 || seconds == 28 || seconds == 35 || seconds == 42 || seconds == 49 || seconds == 56) {
  bcolor = "red";
}
if(seconds == 1 || seconds == 8 || seconds == 15 || seconds == 22 || seconds == 29 || seconds == 36 || seconds == 43 || seconds == 50 || seconds == 57) {
  bcolor = "orange";
}
if(seconds == 2 || seconds == 9 || seconds == 16 || seconds == 23 || seconds == 30 || seconds == 37 || seconds == 44 || seconds == 51 || seconds == 58) {
  bcolor = "yellow";
}
if(seconds == 3 || seconds == 10 || seconds == 17 || seconds == 24 || seconds == 31 || seconds == 38 || seconds == 45 || seconds == 52 || seconds == 59) {
  bcolor = "green";
}
if(seconds == 4 || seconds == 11 || seconds == 18 || seconds == 25 || seconds == 32 || seconds == 39 || seconds == 46 || seconds == 53 || seconds == 60) {
  document.bcolor = "blue";
}
if(seconds == 5 || seconds == 12 || seconds == 19 || seconds == 26 || seconds == 33 || seconds == 40 || seconds == 47 || seconds == 54) {
  bcolor = "indigo";
}
if(seconds == 6 || seconds == 13 || seconds == 20 || seconds == 27 || seconds == 34 || seconds == 41 || seconds == 48 || seconds == 55) {
  bcolor = "purple";
}
document.getElementsByTagName("body")[0].style.backgroundColor = bcolor;
setTimeout("color_changer()", 1000);
}
</script>

