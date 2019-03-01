$(document).ready(handler);
function handler(e){
    $("form[name='searchForm']").on({submit:handlerSearch});
    $("#jsLinks").on("click","li a",handlerLinks);
    $("#jsLinks").on("click","h3",handlerH);
    handlerLinksLoad();    
}
function handlerH(){
    clearLinks();
}
function handlerSearch(e){
    alert("hello");
    return e.preventDefault();
}
function handlerLinksLoad(){
    let ul = $("#jsLinks ul");
    let frag = document.createDocumentFragment();
    for (let index = 0; index < 4; index++) {
        $(frag).append("<li class='nav-item'><a class='nav-link' href='#'>Link</a></li>")
    }
    ul.append(frag);
}
function clearLinks(){
    let ul = $("#jsLinks ul");
    let list = ul.find("a");
    list.removeClass("active");
    list.text("Link");
}
function handlerLinks(e){
    clearLinks();
    $(this).text("Active");
    $(this).addClass("active");
    return e.preventDefault();
}