console.log("Loaded!");
var element = document.getElementById('main-text');
element.innerHTML ='Hello! I am a webapp of Shreya Singh';
var img= document.getElementById('madi');
img.onclick=function(){
    img.style.marginLeft='100px';
};
var marginLeft=0;
function moveRight()
{
    marginLeft=marginLeft+10;
    img.style.marginLeft =marginLeft+"px";
}
img.onclick=function(){
    var interval=setInterval(moveRight,50);
};
