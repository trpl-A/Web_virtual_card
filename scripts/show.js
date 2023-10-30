
function showHiddenSection(id = "contact") {
    // window.alert("SHOW")
    // let contactBox = document.getElementById("contact")
    let contactBox = document.getElementById(id)

    // box.style.cssText("display:block;")
    contactBox.style.display = "block";
    contactBox.style.zIndex = "11";

}

function hide(id = "contact") {
    let box = document.getElementById(id)
    box.style.display = "none";
    box.style.zIndex = "initial";
}