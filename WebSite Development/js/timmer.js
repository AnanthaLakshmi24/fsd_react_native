var time = 0;
var intervalName = setInterval(function(){
    time = time+1;
    document.getElementsByClassName("minutes")[0].innerText = parseInt(time/60);
    document.getElementsByClassName("seconds")[0].innerText = time%60;
    // console.log(parseInt(time/60),":",time%60 );
},1000)

function Cllear(){
    var k =document.getElementsByClassName("minutes")[0] = parseInt(time/60)
    var t =document.getElementsByClassName("seconds")[0] = time%60
    clearInterval(intervalName)
}
function  Resume(){
}