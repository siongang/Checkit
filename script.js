
let elem = '<div class = "row" id = "temp"> <div class= "checklist" id="temp-checklist"><input type = "checkbox" name = "check" id = "temp-box" class = "check btn" value = "finished"><input type = "text" class = "text"> </div> <button type = "button" class = "remove-button">x</button></div>';

let counter = 0; // index of boxes
let checkArr = new Array(1).fill(false); //boolean values of checkbox
let addMore = document.getElementById("add-button");
let rows = document.getElementsByClassName("row");



// let checkBoxes = document.getElementsByClassName("check"); //creates an html collection of boxes
let textArr = new Array(); //holds string values of textboxes

addListener();

//if clicked addmore
if (addMore) {
    addMore.addEventListener("click", ()=> {

        /*
        Gets the previous checklist and inserts the temp checklist after it. 
        Then, it swaps the temp id to the current counter
        */ 
        console.log(counter);
        if (counter == -1) {
            document.getElementById("env").insertAdjacentHTML("afterbegin", elem);
        } else {
          //  counter = rows.length-1;
            rows[counter].insertAdjacentHTML('afterend', elem);
            // document.getElementById('temp').id = (counter+1)+"-row";

            // // sets last-box id of check box to current counter
            // document.getElementById('temp-box').id = (counter+1)+"-box"; 
        }

        // set default val to false
        checkArr.push(false);
        textArr.push("");
       
        counter++;
        addListener(); 
       
        console.log("button pressed");
    });  
}

// adds event listner to each checkbox. Everytime the checkbox is clicked, the string value is stored into the array
function addListener() {

    var currentRow = rows[counter];
    console.log(currentRow);

    var box = currentRow.getElementsByClassName("check")[0];
    console.log(box)

    
    // assigns add event listener to each box. Changes boolean value of box for each click.
     box.addEventListener("click", ()=>{

        var nodes = Array.prototype.slice.call( document.getElementById('env').children);
        var index = nodes.indexOf(box.parentElement.parentElement);
        // console.log("parent " + (box.parentElement.parentElement.id));

        // var index = box.id.split("-")[0]; // current index of clicked checkbox
        // console.log(box.id);
        console.log("index is "+index);

        var checked = checkArr[index]; // boolean value if checkbox is checked     
        var row = rows[index]; // getting the current checklist
        console.log(row); 
        var textbox = row.getElementsByClassName("text")[0]; // sets to the texbox of the current checklist
        

        textArr[index] = textbox.value; // sets the index to the stringval of textbox
        checkArr[index] = !checked; //sets boolean val for index
        console.log(checkArr[index]);
        console.log(textArr[index])


        // strikes-through text
        if (checkArr[index])
            textbox.classList.add("strike-through");
        else if (textbox.classList.contains("strike-through"))    
            textbox.classList.remove("strike-through");
    });

    var deleteRow = currentRow.getElementsByClassName("remove-button")[0];
    deleteRow.addEventListener("click", () => {
        var nodes = Array.prototype.slice.call( document.getElementById('env').children);
        var index = nodes.indexOf(deleteRow.parentElement.parentElement);
        currentRow.remove();
        checkArr.pop(index);
        counter--;
       
    });

    console.log(deleteRow);

}

function saveText(){



}