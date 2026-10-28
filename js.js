let layoutSelect=document.querySelector("select");
let cssIn=document.getElementById("css-in");
layoutSelect.value="no-css";
cssIn.href=`no-css.css`;
layoutSelect.addEventListener("change",e=>{
    if(e.target.value!="no-css"){
        cssIn.href=`${e.target.value}.css`;
    }
    else{
        cssIn.href="";
    }
})