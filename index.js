var a = document.getElementsByClassName("drum");


for(let i=0;i<7;i++)
{

   

a[i].addEventListener("click",function(){
var b=a[i].innerHTML;


    switch (b)
    {
        case "w":
var audio=new Audio("sounds/tom-1.mp3");
audio.play();
            break;
    
            case "a":
                var audio=new Audio("sounds/tom-2.mp3");
                audio.play();

                break;
    
                case "s":
                    var audio=new Audio("sounds/tom-3.mp3");
audio.play();
                    break;
    
                    case "d":
                        var audio=new Audio("sounds/tom-4.mp3");
audio.play();
                        break;
    
                        case "j":
                            var audio=new Audio("sounds/snare.mp3");
audio.play();
                            break;
    
                            case "k":
                                var audio=new Audio("sounds/crash.mp3");
                                audio.play();
                                break;
    
                                case "l":
                                    var audio=new Audio("sounds/kick-bass.mp3");
                                    audio.play();
                                    break;
    
                                    default:
                                      alert(anu);
    
    }


})


}
document.addEventListener("keypress",function(event)
{
    const vari=document.getElementsByClassName(event.key)[0];
switch (event.key)
    {
        case "w":
var audio=new Audio("sounds/tom-1.mp3");
audio.play();

vari.classList.add("temp");
 setTimeout(function(){vari.classList.remove("temp")},200);
          
 break;
    
            case "a":
                var audio=new Audio("sounds/tom-2.mp3");
                audio.play();

                vari.classList.add("temp");
                setTimeout(function(){vari.classList.remove("temp")},200);

                break;
    
                case "s":
                    var audio=new Audio("sounds/tom-3.mp3");

                    vari.classList.add("temp");
                    setTimeout(function(){vari.classList.remove("temp")},200);

audio.play();
                    break;
    
                    case "d":
                        var audio=new Audio("sounds/tom-4.mp3");

            
audio.play();
vari.classList.add("temp");
setTimeout(function(){vari.classList.remove("temp")},200);

                        break;
    
                        case "j":
                            var audio=new Audio("sounds/snare.mp3");
audio.play();
vari.classList.add("temp");
setTimeout(function(){vari.classList.remove("temp")},200);

                            break;
    
                            case "k":
                                var audio=new Audio("sounds/crash.mp3");
                                audio.play();

                                vari.classList.add("temp");
                                setTimeout(function(){vari.classList.remove("temp")},200);
                               
                                break;
    
                                case "l":
                                    var audio=new Audio("sounds/kick-bass.mp3");
                                    audio.play();

                                    vari.classList.add("temp");
                                    setTimeout(function(){vari.classList.remove("temp")},200);
                                   
                                    break;
    
                                    default:
                                      alert(anu);
    
    }
}
)



