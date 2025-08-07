function clickk(){
    var rows=document.getElementsByTagName("input")[0].value
    var cols=document.getElementsByTagName("input")[1].value
    var tab=document.createElement("table")
    var parent =document.getElementsByTagName("body")
    for(var i=0;i<rows;i++){
        var rol=document.createElement("tr")
        for(var j=0;j<cols;j++){
            var col=document.createElement("td")
            col.style.border="2px solid black";
            col.style.width="20px";
            col.style.height="20px";
            rol.append(col)
        }
        tab.append(rol)
    }
    document.body.appendChild(tab)

}