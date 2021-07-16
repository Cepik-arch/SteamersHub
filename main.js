
var audio = $("#Sound")[0];
var audioAaa = new Audio('Audio/Aaaa.wav');
var currentMousePos = { x: -1, y: -1 };
var posX = (Math.random() * ($(document).width()-100)).toFixed();
var posY = (Math.random() * ($(document).height()-100)).toFixed();

$(function () {
  $('#Start').click(function () {
    makeDiv(posX,posY);
  });
});

function makeDiv(posx,posy){
    $newdiv = $('<a/>').css({
    })

    $("#result2").html("X: "+posx+"  Y : "+posy);

    $newdiv.css({
        'width':'80px',
        'height':'120px',
        'background-color': 'red',
        'position':'absolute',
        'left':posx+'px',
        'top':posy+'px',
        'display':'none',
        'cursor':'pointer'
    }).attr({
        id:'box',
        onclick: 'klik()'
    }).appendTo( 'body' ).fadeIn(100);

    var tmp = 1000;

$(document).mousemove(function(event) {
    currentMousePos.x = event.pageX;
    currentMousePos.y = event.pageY;
    $("#result").html("X: "+currentMousePos.x+"  Y : "+currentMousePos.y);

    var tmp = (1000 / (Math.abs((Math.abs(posX - currentMousePos.x) + Math.abs(posY - currentMousePos.y)))))/10;
    if(tmp > 1.0){
        tmp = 1.0
    }
    console.log(tmp);
    audioAaa.volume = tmp;
    audioAaa.play();
    
});
}


function klik() {
  audio.play();
  $("#box").css({
    'background-image': 'url("Photo/VojtaPog.png")',
    'background-repeat': 'no-repeat',
    'background-size': 'contain'
    })
$End = $('<div/>').css({
})
}