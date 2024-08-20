// change content 
function contet_change(){ 
document.getElementById("content_demo").innerHTML="Content:  Learn JavaScript";
}

function on(){ 
document.getElementById("img_demo").src="/Javascript basic-advance/image/on.gif";
}
function off(){ 
document.getElementById("img_demo").src="/Javascript basic-advance/image/off.gif";
}

function change_style(){ 
    let ele=document.getElementById("style_demo");
    ele.style.color="red";
    ele.style.fontSize="20px";
    ele.style.fontWeight="Bold";
}

function  hide(){ 
    let el=document.getElementById("hide_show");
    el.style.display="none";
}
function  show(){ 
    let el=document.getElementById("hide_show");
    el.style.display="block";
}
