let colormode = 0;

function colorMode() {
    if (colormode === 0) return getRandomColor() 
}

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

  let onoff = 0;

  function erase() {
    if (onoff === 0){
        onoff = 1;
        document.querySelector(".erase").style.backgroundColor = "grey"
        for (let i = 0; i < size; i++){
            for (let j = 0; j < size; j++){
                document.querySelector(".container").addEventListener("mouseover", function(event){
                    event.target.style.backgroundColor = "white"
                })
            }
        }
    } else {
        onoff = 0;
        document.querySelector(".erase").style.backgroundColor = "white"
        for (let i = 0; i < size; i++){
            for (let j = 0; j < size; j++){
                document.querySelector(".container").addEventListener("mouseover", function(event){
                    event.target.style.backgroundColor = getRandomColor()
                })
            }
        }
    }
}

colorPicker.addEventListener("input", updateFirst, false);
colorPicker.addEventListener("change", watchColorPicker, false);

function watchColorPicker(event) {
  document.querySelectorAll("p").forEach(function(p) {
    p.style.color = event.target.value;
  });
}

function clear() {
    
}