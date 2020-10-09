window.onload = setup;

function setup() {
    fetch("https://udchen19.github.io/HSNUxZSGH_Halloween/puzzle.txt").then(response => response.text()).then((data) => {
        console.log(data);
    });
    var grid_str = "<table>";
    for (var i = 0; i < 25; i++) {
        grid_str += "<tr>";
        for (var j = 0; j < 25; j++)
            grid_str += "<td></td>";
        grid_str += "</tr>";
    }
    grid_str += "</table>";
    document.getElementById("grid").innerHTML = grid_str;
}