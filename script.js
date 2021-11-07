function checkSelector(selector){
     return document.querySelector(selector);
   }
   function setup(){
     let canvas = createCanvas(1879, 885);
     canvas.parent("canvas-wrapper");
     background(255);
   }
   function mouseDragged(){
     let type = checkSelector("#pen-pencil").checked?"pencil":"brush";
     let size = parseInt(checkSelector("#pen-size").value);
     let color = checkSelector("#pen-color").value;
     fill(color);
     if(type == "pencil"){
       line(pmouseX, pmouseY, mouseX, mouseY);
     } else {
       //change ellipse to line to sketch fabric
       line(mouseX, mouseY, size, size);
     }
   }
   function keyPressed(e) {
    if (e.keyCode == 90 && (e.ctrlKey || e.metaKey)) {
      undo();
    }
  }
  function undo(){
    if (!previousState) {
      return;
    }
    background(255);
    image(previousState, 0, 0);
    previousState = null;
  }
  function mousePressed() {
    saveState();
  }
  function saveState() {
    previousState = get();
  }
   checkSelector("#reset-canvas").addEventListener("click", function(){
     background(255);
   });
   checkSelector("#save-canvas").addEventListener("click",function(){
     saveCanvas(canvas, "sketch", "png");
   });

  let colorButton = document.getElementById("pen-color");
  let colorDiv = document.getElementById("color_val");

  colorButton.onchange = function () {
    colorDiv.style.color = colorButton.value;
  };

