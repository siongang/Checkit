
let elem = '<div class= "checklist" id="temp"><input type = "checkbox" name = "check" id = "temp-box" class = "check btn" value = "finished"><input type = "text" class = "text">';

let counter = 0; // index of boxes
let checkArr = new Array(1).fill(false);
let addMore = document.getElementById("add-button");
let checkBoxes = document.getElementsByClassName("check"); //creates an html collection of boxes
let textArr = new Array(); //holds string values of textboxes
addListener();


//if clicked addmore
if (addMore) {
    addMore.addEventListener("click", ()=> {

        /*
        Gets the previous checklist and inserts the temp checklist after it. 
        Then, it swaps the temp id to the current counter
        */ 
      
        document.getElementById((counter)+"-checklist").insertAdjacentHTML('afterend', elem);
        document.getElementById('temp').id = (counter+1)+"-checklist";

        // sets last-box id of check box to current counter
        document.getElementById('temp-box').id = (counter+1)+"-box"; 

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
    var box = checkBoxes.item(counter); //the newly added box, box was created in addmore event listener

    // assigns add event listener to each box. Changes boolean value of box for each click.
    checkBoxes.item(counter).addEventListener("click", ()=>{

        var index = box.id.substring(0,1); // current index of clicked checkbox
        var checked = checkArr[index]; // boolean value if checkbox is checked     
        var checklist = document.getElementById(index+"-checklist"); // getting the current checklist
        var textbox = checklist.getElementsByClassName("text")[0]; // sets to the texbox of the current checklist
        
        textArr[index] = textbox.value; // sets the index to the stringval of textbox
        checkArr[index] = !checked; //sets boolean val for index
        console.log(checkArr[index])

        // strikes-through text
        if (checkArr[index])
            textbox.classList.add("strike-through");
        else if (textbox.classList.contains("strike-through"))    
            textbox.classList.remove("strike-through");
    });
}