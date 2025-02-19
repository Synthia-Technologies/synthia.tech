let homebutton = document.getElementById('homebutton').style.textDecoration;
let getintouchbutton = document.getElementById('getintouchbutton').style.textDecoration;
let portfoliobutton = document.getElementById('portfoliobutton').style.textDecoration;

export function home(){
    window.location.replace("")
    let homebutton = "underline";
    let getintouchbutton = "none";
    let portfoliobutton = "none";
}
export function getintouch(){
    window.location.replace("/#/getintouch")
}
export function portfolio(){
    window.location.replace("/#/portfolio")
}

