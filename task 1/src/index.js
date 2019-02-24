window.addEventListener("load",handler,false);

function handler(e){
    document.forms.searchForm.addEventListener("submit",handlerSearch,false);
    handlerLinksLoad()
    document.getElementById("jsLinks").addEventListener("click",handlerLinks,false);
}
function handlerSearch(e){
    console.log("hello");
    return e.preventDefault();
}
function handlerLinksLoad(){
    let ul = document.getElementById("jsLinks").children[1];
    console.log("hui")

    for (let index = 0; index < 4; index++) {
        let li = document.createElement("li");
        li.setAttribute("class","nav-item");
        let a = document.createElement("a");
        a.setAttribute("class","nav-link");
        a.setAttribute("href","#");
        a.innerHTML = "Link"
        li.appendChild(a);
        console.log(a);
        console.log(li);
        ul.appendChild(li);
    }
}
function handlerLinks(e){
    console.log(e.target.tagName);
    if(e.target.tagName!="A"&&e.target.tagName!="H3")
        return;
    for (let index = 0; index < e.currentTarget.children[1].children.length; index++) {
        const element = e.currentTarget.children[1].children[index];
        let el = element.children[0];
        el.innerHTML = "Link";
        el.setAttribute("class","nav-link");
    }
    if(e.target.tagName=="A"){
        e.target.setAttribute("class","nav-link active");
        e.target.innerHTML = "Active";
        
    }
    return e.preventDefault();
}