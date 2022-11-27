document.getElementById("button").addEventListener("click", function catf(e) {
    e.preventDefault();
    const url = "https://catfact.ninja/fact"
    
    fetch(url)
    .then(response => response.text())
    .then(data => {console.log(data);
    let cut = data.substr(9, data.length-24)
    document.getElementById("ctext").innerHTML=cut})




});