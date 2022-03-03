var aArr=document.querySelectorAll('a');
console.log(aArr)
console.log(document.getElementById("taba"))

/*document.getElementById("taba").onclick = function() {
    //获取当前激活的tab选项卡
    var active=document.querySelector(".active");
    //移除之前的选项卡激活属性
    active.classList.remove("active");
    //给当前点击的选项卡添加激活属性
    this.classList.add("active");
    //获取当前的section标签id名字
    var name=this.getAttribute("data-cont");
    //根据获取到的名字获取当前的内容卡
    var section=document.getElementById(name);
    //获取所有class为cont的元素，并循环遍历，取消所有内容卡的样式
    var cont = document.getElementsByClassName("cont");
    for(var i=0;i<cont.length;i++) {
        cont[i].style.display="none";
    }
    //激活当前内容卡的样式
    section.style.display="block";
} */

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