function onload() {
    console.log("started!");
}

document.onkeypress = function(e) {
    e = (e || window.event); //todo: what does this mean?
    console.log(`rong e= ${e}, e.which=${e.which}, e.keyCode=${e.keyCode}`);
    var charCode = (typeof e.which == "number") ? e.which : e.keyCode; //todo:  why use this??
    if (charCode) {
        console.log("Character typed: " + String.fromCharCode(charCode));
    }
};