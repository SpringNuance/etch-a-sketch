function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }


var slider = document.getElementById("myRange");
var output = document.getElementById("demo");

output.innerHTML = slider.value;

let size = Number(slider.value)

document.querySelector(".container").style.gridTemplateColumns = `repeat(${size}, 1fr)`
for (let i = 0; i < size; i++){
    for (let j = 0; j < size; j++){
        let node = document.createElement("div");
        node.addEventListener("mouseover", function(event){
            event.target.style.backgroundColor = getRandomColor()
        })
        document.querySelector(".container").appendChild(node);     
    }
}

slider.addEventListener('input', function() {
    output.innerHTML = this.value;
    size = Number(slider.value)
    const container = document.querySelector(".container")
    document.querySelector(".canvas").removeChild(container);  
    let newContainer = document.createElement("div");
    newContainer.className = "container"
    document.querySelector(".canvas").appendChild(newContainer); 
    document.querySelector(".container").style.gridTemplateColumns = `repeat(${size}, 1fr)`
    for (let i = 0; i < size; i++){
    for (let j = 0; j < size; j++){
        let node = document.createElement("div");
        node.addEventListener("mouseover", function(event){
            event.target.style.backgroundColor = getRandomColor()
        })
        document.querySelector(".container").appendChild(node);     
    }
}
  }, false)