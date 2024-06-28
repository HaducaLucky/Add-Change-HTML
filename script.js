//TODO ----- EXAMPLE 1 <h1> -----

//* STEP 1 CREATE THE ELEMENT
// const newH1 = document.createElement("h1");

//* STEP 2 ADD ATTRIBUTES/ PROPERTIES
// newH1.textContent = "I like Adobo!";
// newH1.id = "myH1";
// newH1.style.color = "red";
// newH1.style.textAlign = "center";

//* STEP 3 APPEND ELEMENT TO DOM
// document.body.append(newH1);
// document.body.prepend(newH1);
// document.getElementById("box1").append(newH1);
// document.getElementById("box1").prepend(newH1);

//! Sandwich between box1 and box2
// const box3 = document.getElementById("box3");
// document.body.insertBefore(newH1, box3);

//! What if the boxes don't have id's
// const boxes = document.querySelectorAll(".box");
// document.body.insertBefore(newH1, boxes[2]);

//* REMOVE HTML ELEMENT
// document.getElementById("box1").removeChild(newH1);

//TODO ----- EXAMPLE 2 ORDER LIST -----
//* STEP 1 CREATE THE ELEMENT
const newListItem = document.createElement("li");

//* STEP 2 ADD ATTRIBUTES/ PROPERTIES
newListItem.textContent = "coconut";
newListItem.id = "coconut";
newListItem.style.fontWeight = "bold";
newListItem.style.backgroundColor = "lightgreen";

//* STEP 3 APPEND ELEMENT TO DOM
// document.body.append(newListItem);
// document.body.prepend(newListItem);
// document.getElementById("fruits").append(newListItem);
// document.getElementById("fruits").prepend(newListItem);

// const banana = document.getElementById("banana");
// document.getElementById("fruits").insertBefore(newListItem, banana);

const listItems = document.querySelectorAll("#fruits li");
document.getElementById("fruits").insertBefore(newListItem, listItems[1]);

//* REMOVE HTML ELEMENT
// document.getElementById("fruits").removeChild(newListItem);