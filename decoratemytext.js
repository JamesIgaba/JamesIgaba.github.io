function f1(){
    // alert("Hello, world!");
    const txt = document.getElementById("text_here");
    //x.style.fontSize = "24pt";
    const fntSz = parseInt(window.getComputedStyle(txt).getPropertyValue('font-size')) + 2;
    txt.style.fontSize = fntSz + "pt";
}

function f2() {
    //alert("Hello, world!");
    const x = document.getElementById("text_here");
    if(x.checked){
        x.style.fontWeight = "normal";
        x.style.color = "black";
        x.style.textDecoration = "none";
        x.checked = false;
        document.body.style.backgroundImage = "none";
    }
    else {
        x.style.fontWeight = "bold";
        x.style.color = "green";
        x.style.textDecoration = "underline";
        x.checked = true;
        document.body.style.backgroundImage = "url(\"https://courses.cs.washington.edu/courses/cse190m/CurrentQtr/labs/6/hundred-dollar-bill.jpg\")";
    }

}

function f3(){
    setInterval(f1,500);
}

function  f4() {
    const x = document.getElementById("text_here").value;
    let y = x.split(" ");

    for(let i = 0; i<y.length; i++){
        if(y[i].charAt(0) == "b"||
            y[i].charAt(0) == "c"||
            y[i].charAt(0) == "d"||
            y[i].charAt(0) == "f"||
            y[i].charAt(0) == "g"||
            y[i].charAt(0) == "h"||
            y[i].charAt(0) == "j"||
            y[i].charAt(0) == "k"||
            y[i].charAt(0) == "l"||
            y[i].charAt(0) == "m"||
            y[i].charAt(0) == "n"||
            y[i].charAt(0) == "p"||
            y[i].charAt(0) == "q"||
            y[i].charAt(0) == "r"||
            y[i].charAt(0) == "s"||
            y[i].charAt(0) == "t"||
            y[i].charAt(0) == "v"||
            y[i].charAt(0) == "w"||
            y[i].charAt(0) == "x"||
            y[i].charAt(0) == "y"||
            y[i].charAt(0) == "z"){

            y[i] = y[i].substring(1,y[i].length) + y[i].charAt(0) + "ay";
        }
        else if(y[i].charAt(0) == "a"||
            y[i].charAt(0) == "e"||
            y[i].charAt(0) == "i"||
            y[i].charAt(0) == "o"||
            y[i].charAt(0) == "u"){
            y[i] = y[i] + "ay";
        }
    }
    document.getElementById("text_here").value = y.reduce((x,y)=>x+" "+y);
}

function f5() {
    const x = document.getElementById("text_here").value;
    let y = x.split(" ");

    for(let i = 0; i<y.length; i++){
       if(y[i].length >= 5){
           y[i] = "Malkovitch";
       }
    }
    document.getElementById("text_here").value = y.reduce((x,y)=>x+" "+y);
}