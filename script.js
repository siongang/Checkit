
let elem = '<div class= "checklist" id="last"><input type = "checkbox" name = "check" id = "last-box" class = "check" value = "finished"><input type = "text" class = "text"></div>';

let counter = 0;
let checkArr = new Array(1).fill(false);
let addMore = document.getElementById("add-button");
let checkBoxes = document.getElementsByClassName("check");

addListener();


//if clicked addmore
if (addMore) {
    console.log('hi')
    addMore.addEventListener("click", ()=> {

        /*
        Gets the last checklist element and sets to temp. Inserts elem after temp.
        Sets temp id to counter
        */ 
        document.getElementById('last').id = 'temp';
        document.getElementById('temp').insertAdjacentHTML('afterend', elem);
        document.getElementById('temp').id = counter;

        // sets last-box id of check box to current counter
        document.getElementById('last-box').id = counter;
        counter++;

        // set default val to false
        checkArr.push(false);
        addListener();

        console.log("button pressed");

    });  
}



function addListener() {
    console.log(checkBoxes);
    console.log(counter)
    var box = checkBoxes.item(counter); //the newly added box

    // assigns add event listener to each box. Changes boolean value of box for each click.
    checkBoxes.item(counter).addEventListener("click", ()=>{  
            console.log(box.id+"checkbox clicked");
            checkArr[box.id] = !checkArr[box.id]
            console.log(checkArr[box.id])
        });
}