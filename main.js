
var loc = window.location.pathname;
var dir = "http://localhost/NCTU/General/FCS/2020/%E8%90%AC%E8%81%96RPG/%E9%81%93%E5%85%B7/Nonogram/";

fetch(dir + 'puzzle.txt').then(response => response.text()).then((data) => {
    console.log(response.text);
});

function setup() {
    var fr = new FileReader();
    var fl = new File(["foo", "foo2"], "puzzle.txt", {
        type: "text/plain",
      });
    fr.addEventListener("loadend", function() {
        console.log(fr.result);
     });
    fr.readAsText(fl);
}

window.onload = setup;