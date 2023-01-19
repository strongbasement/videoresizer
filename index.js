reportwinsize();
function reportwinsize()
{
    var inw=window.innerWidth/1.2;
    var inh=window.innerHeight/1.2;
    document.querySelector(".real").innerHTML=inh+"*"+inw;
     document.querySelector(".king").setAttribute("width",inw+"px");
    
    }
    
    window.onresize=reportwinsize;

