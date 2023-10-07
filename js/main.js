img1 = document.querySelector(".im-1");
img2=document.querySelector(".im-2");
img3=document.querySelector(".im-3");
img4=document.querySelector(".im-4");
img5=document.querySelector(".im-5");
img6=document.querySelector(".im-6");
img7=document.querySelector(".im-7");
img8=document.querySelector(".im-8");
img9= document.querySelector(".im-9");
img10= document.querySelector(".im-10");
img11= document.querySelector(".im-11");
img12= document.querySelector(".im-12");
img13= document.querySelector(".im-13");
img14= document.querySelector(".im-14");
text =document.querySelector(".text-center");
function fun(){
    img1.style.display="block";
    img2.style.display="block";
    img3.style.display="block";
    img4.style.display="block";
    img5.style.display="block";
    img6.style.display="block";
    img7.style.display="block";
    img8.style.display="block";
    img9.style.display="block";
    img10.style.display="block";
    img11.style.display="block";
    img12.style.display="block";
    img13.style.display="block";
    img14.style.display="block";
    text.style.display="block";
    text.style.display="none";
}
function fun1(){
    img1.style.display="none";
    img2.style.display="none";
    img3.style.display="block";
    img4.style.display="block";
    img5.style.display="block";
    img6.style.display="none";
    img7.style.display="block";
    img8.style.display="none";
    img9.style.display="none";
    img10.style.display="none";
    img11.style.display="none";
    img12.style.display="none";
    img13.style.display="none";
    img14.style.display="none";
    text.style.display="none";
}
function fun2(){
    img1.style.display="block";
    img2.style.display="block";
    img3.style.display="none";
    img4.style.display="none";
    img5.style.display="none";
    img6.style.display="block";
    img7.style.display="none";
    img8.style.display="block";
    img9.style.display="block";
    img10.style.display="none";
    img11.style.display="none";
    img12.style.display="none";
    img13.style.display="none";
    img14.style.display="none";
    text.style.display="none";
}
function fun3(){
    img1.style.display="none";
    img2.style.display="none";
    img3.style.display="none";
    img4.style.display="none";
    img5.style.display="none";
    img6.style.display="none";
    img7.style.display="none";
    img8.style.display="none";
    img9.style.display="none";
    img10.style.display="block";
    img11.style.display="block";
    img12.style.display="block";
    img13.style.display="none";
    img14.style.display="none";
    text.style.display="none";
}
function fun4(){
    img1.style.display="none";
    img2.style.display="none";
    img3.style.display="none";
    img4.style.display="none";
    img5.style.display="none";
    img6.style.display="none";
    img7.style.display="none";
    img8.style.display="none";
    img9.style.display="none";
    img10.style.display="none";
    img11.style.display="none";
    img12.style.display="none";
    img13.style.display="block";
    img14.style.display="block";
    text.style.display="none";
}
function Change_For_DropDown(){
    var x = document.querySelector(".dropdown-content");
    if(x.style.display === "block"){
        x.style.display = "none";
        change = document.querySelector(".fa-xmark");
        change.style.display = "none";
        pre = document.querySelector(".fa-bars");
        pre.style.display = "block";
    }
    else{
        x.style.display = "block";
        change = document.querySelector(".fa-xmark");
        change.style.display = "block";
        pre = document.querySelector(".fa-bars");
        pre.style.display = "none";
    }
}
function Change_DropDown(){
    var x = document.querySelector(".dropdown-content");
    x.style.display = "none";
}