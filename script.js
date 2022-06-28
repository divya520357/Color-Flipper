function colorGenerator(){
    var letters = "0123456789ABCDEF";
    var color = '#';
  
    // generating 6 times as HTML color code consist
    // of 6 letter or digits
    for (var i = 0; i < 6; i++)
       color += letters[(Math.floor(Math.random() * 16))];

    return color;
}

document.querySelector('.change-color').onclick=function(){changeColor()};

function changeColor(){
    let curColor = colorGenerator();
    document.querySelector("body").style.backgroundColor = curColor;
    document.querySelector(".color-des").innerHTML=`Background Color: ${curColor}`
}
