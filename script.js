let elem = '<div class = "row" > <div class= "checklist" ><input type = "checkbox" name = "check" class = "check btn" value = "finished"><input type = "text" class = "text"> <div class = "open-button"></div></div> <button type = "button" class = "remove-button hide">x</button></div>';

let counter = 0; // index of boxes
let checkArr = new Array(1).fill(false); //boolean values of checkbox
let addMore = document.getElementById("add-button");
let rows = document.getElementsByClassName("row");
let currentRow;


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
    });  
}

// adds event listner to each checkbox. Everytime the checkbox is clicked, the string value is stored into the array
function addListener() {

    currentRow = rows[counter]; //adds  each listner to each current row
    console.log("current row"+currentRow + counter);

    var box = currentRow.getElementsByClassName("check")[0];

    var row;



    var deleteRow = currentRow.getElementsByClassName("remove-button")[0];
    deleteRow.addEventListener("click", () => {
        var nodes = Array.prototype.slice.call( document.getElementById('env').children);
        var index = nodes.indexOf(deleteRow.parentElement);
        var row = rows[index];
        row.remove();
        checkArr.pop(index);
        counter--;
       
    });


    var showButtons = currentRow.getElementsByClassName("open-button")[0];
    showButtons.addEventListener("click",()=>{
        
        if (deleteRow.classList.contains("hide")){
            deleteRow.classList.remove("hide");
        } else {    
            deleteRow.classList.add("hide")
        }
       // console.log(deleteRow);   

    });

   var rowHover = currentRow.getElementsByClassName("checklist")[0];
    currentRow.addEventListener("mouseover",()=>{
        var nodes = Array.prototype.slice.call( document.getElementById('env').children);
        var index = nodes.indexOf(rowHover.parentElement);
        var row = rows[index];

        var checklist = row.getElementsByClassName("checklist")[0];
        var textbox = row.getElementsByClassName("text")[0];

        console.log("checklist" + checklist + " index is "+counter);
    
       
        if (!checklist.classList.contains("checklist-hover"))
            checklist.classList.add("checklist-hover");
        if (!textbox.classList.contains("text-hover"))
            textbox.classList.add("text-hover");
    
    });



    var rowLeave = currentRow.getElementsByClassName("checklist")[0];

    currentRow.addEventListener("mouseleave",()=>{
        
        var nodes = Array.prototype.slice.call( document.getElementById('env').children);
        var index = nodes.indexOf(rowLeave.parentElement);
        row = rows[index];
        var checklist = row.getElementsByClassName("checklist")[0];
        var textbox = row.getElementsByClassName("text")[0];

        // styles the checklist
        if (checklist.classList.contains("checklist-hover"))
            checklist.classList.remove("checklist-hover");
        if (textbox.classList.contains("text-hover"))
            textbox.classList.remove("text-hover");

        // deletes the delete button on mouse leave
        var deleteRow = row.getElementsByClassName("remove-button")[0];
        if (!deleteRow.classList.contains("hide"))
            deleteRow.classList.add("hide");

    });





    // assigns add event listener to each box. Changes boolean value of box for each click.
     box.addEventListener("click", ()=>{

        var nodes = Array.prototype.slice.call( document.getElementById('env').children);
        var index = nodes.indexOf(box.parentElement.parentElement);
        // console.log("parent " + (box.parentElement.parentElement.id));

        console.log(nodes)

        // var index = box.id.split("-")[0]; // current index of clicked checkbox
        // console.log(box.id);
       // console.log("index is "+index);

        var checked = checkArr[index]; // boolean value if checkbox is checked     
        row = rows[index]; // getting the current checklist
     //   console.log(row); 
        var textbox = row.getElementsByClassName("text")[0]; // sets to the texbox of the current checklist
        console.log("textbox "+textbox + " index is " + index);

        textArr[index] = textbox.value; // sets the index to the stringval of textbox
        checkArr[index] = !checked; //sets boolean val for index
        // console.log(checkArr[index]);
        // console.log(textArr[index])


        // strikes-through text
        if (checkArr[index])
            textbox.classList.add("strike-through");
        else if (textbox.classList.contains("strike-through"))    
            textbox.classList.remove("strike-through");
    });

 


  
}

