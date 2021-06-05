function picShow(which){
    var newone=which.getAttribute("href");
    var placeholder=document.getElementById("placeholder");
    placeholder.setAttribute("src",newone);
    var text=which.getAttribute("title")
    var description=document.getElementById("description")
    description.firstChild.nodeValue=text
}