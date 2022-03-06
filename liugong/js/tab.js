function onclickTab (e) {
    var active = document.querySelector(".active");
    if(active.getAttribute("id") == e.getAttribute("id")) {
        return;
    }

    if(e.getAttribute("id") == "taba") {
        var tabb = document.getElementById("tabb");
        tabb.classList.remove("active");
        e.classList.add("active");
        var name=e.getAttribute("data-cont");
        var section=document.getElementById(name);
        var cont = document.getElementsByClassName("cont");
        for(var i=0;i<cont.length;i++) {
            cont[i].style.display="none";
        }
        section.style.display="block";
    }

    if(e.getAttribute("id") == "tabb") {
        var taba = document.getElementById("taba");
        taba.classList.remove("active");
        e.classList.add("active");
        var name=e.getAttribute("data-cont");
        var section=document.getElementById(name);
        var cont = document.getElementsByClassName("cont");
        for(var i=0;i<cont.length;i++) {
            cont[i].style.display="none";
        }
        section.style.display="block";
    }
}