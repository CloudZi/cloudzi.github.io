function onclickTab (e) {
    var active = document.querySelector(".active");
    if(active.getAttribute("id") == e.getAttribute("id")) {
        return;
    }

    if(e.getAttribute("id") == "taba") {
        var tabb = document.getElementById("tabb");
        tabb.classList.remove("active");
        var tabc = document.getElementById("tabc");
        tabc.classList.remove("active");
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
        var tabc = document.getElementById("tabc");
        tabc.classList.remove("active");
        e.classList.add("active");
        var name=e.getAttribute("data-cont");
        var section=document.getElementById(name);
        var cont = document.getElementsByClassName("cont");
        for(var i=0;i<cont.length;i++) {
            cont[i].style.display="none";
        }
        section.style.display="block";
    }

    if(e.getAttribute("id") == "tabc") {
        var taba = document.getElementById("taba");
        taba.classList.remove("active");
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
}

function onclickVTab (e) {
    var active = document.querySelector(".active");
    if(active.getAttribute("id") == e.getAttribute("id")) {
        return;
    }

    if(e.getAttribute("id") == "vtaba") {
        var vtabb = document.getElementById("vtabb");
        vtabb.classList.remove("active");
        e.classList.add("active");
        var name=e.getAttribute("data-vcont");
        var section=document.getElementById(name);
        var cont = document.getElementsByClassName("vcont");
        for(var i=0;i<cont.length;i++) {
            cont[i].style.display="none";
        }
        section.style.display="block";
    }

    if(e.getAttribute("id") == "vtabb") {
        var vtaba = document.getElementById("vtaba");
        vtaba.classList.remove("active");
        e.classList.add("active");
        var name=e.getAttribute("data-vcont");
        var section=document.getElementById(name);
        var cont = document.getElementsByClassName("vcont");
        for(var i=0;i<cont.length;i++) {
            cont[i].style.display="none";
        }
        section.style.display="block";
    }
}

function show(pic) {
    //获取图片的宽和高
    iw = pic.width;
    ih = pic.height;
    //获取屏幕的宽和高
    sw = document.documentElement.clientWidth;
    sh = document.documentElement.clientHeight;
    //动态的创建一个灰色的背景div，就是那个我们带点击后，大图后面的那个灰色的那个背景，当然灰色是可以自由设置的
    gdiv = document.createElement('div');
    gdiv.id = 'gray';
    gdiv.style.height = sh+'px';
    gdiv.style.width = sw+'px';
    document.body.appendChild(gdiv);
    //删除动态的图片和对象，就是点击放大后，再次点击的时候，放大的图片会被删除，并且后面的那个背景也会随之删除
    gdiv.onclick = function(){
        document.body.removeChild(this);
        document.body.removeChild(oimg);
    }
    //创建动态的图片对象，将该对象的src赋值为原图的src
    oimg = document.createElement('img');
    oimg.src = pic.src;
    oimg.width = iw * 3;
    oimg.height = ih * 3;
    oimg.style.position = 'absolute';
    oimg.style.top = (sh-3*ih)/2+'px';
    oimg.style.left= (sw-3*iw)/2+'px';
    document.body.appendChild(oimg);
}
