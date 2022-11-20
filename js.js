document.getElementById("button").addEventListener("click", function catf(e) {
    e.preventDefault();
    const url = "https://catfact.ninja/fact"
    
    fetch(url)
    .then(response => response.text())
    .then(data => {console.log(data);})

});