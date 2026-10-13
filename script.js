window.addEventListener("scroll",
    function(){
        const header=document.getElementById("header");
        if(window.scrollY>50){
            header.style.backgroundColor="#444";
            header.classList.add("scrolled");
        }
        else{
            header.style.backgroundColor="white";
            header.classList.remove("scrolled");
        }
    }
);