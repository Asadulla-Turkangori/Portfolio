
let edu_btn = document.querySelector("#div-edu");
let skill_btn = document.querySelector("#div-skills");
let exp_btn = document.querySelector("#div-exp");

edu_btn.addEventListener("click",()=>{
    document.querySelector("#skill-content").style.display="none";
    document.querySelector("#edu-content").style.display="block";
    document.querySelector("#exp-content").style.display="none";
});

skill_btn.addEventListener("click",()=>{
    document.querySelector("#edu-content").style.display="none";
    document.querySelector("#skill-content").style.display="block";
    document.querySelector("#exp-content").style.display="none";
});


exp_btn.addEventListener("click",()=>{
    document.querySelector("#edu-content").style.display="none";
    document.querySelector("#skill-content").style.display="none";
    document.querySelector("#exp-content").style.display="block";
});



let nav = document.getElementById("navigate");

function openmore(){
    nav.style.right="0px";
}


function closemore(){
    nav.style.right="-110px";
}

