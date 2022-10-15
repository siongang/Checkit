
let elem = '<div class= "checklist" id="last"><input type = "checkbox" name = "check" id = "last-box" class = "check" value = "finished"><input type = "text" class = "text"></div>';

let counter = 0;
let checkArr = new Array(1).fill(false);


let addMore = document.getElementById("add-button");
console.log(addMore)




if (addMore) {
    console.log('hi')
    addMore.addEventListener("click", ()=> {

        document.getElementById('last').id = 'temp';
        document.getElementById('temp').insertAdjacentHTML('afterend', elem);
        document.getElementById('temp').id = counter;


        document.getElementById('last-box').id = counter;
        counter++;
        checkArr.push(false);
        addListener();
        console.log("button pressed");

    });  
}
let checkBoxes = document.getElementsByClassName("check");
addListener();

function addListener() {
    
    console.log(checkBoxes);
    console.log(counter)
    var box = checkBoxes.item(counter);
    checkBoxes.item(counter).addEventListener("click", ()=>{  
            console.log(box.id+"checkbox clicked");

            /*
            console.log(checkBoxes)
            console.log('checked');
            console.log("checkbox id is" + box.id)
            checkArr[box.id] = !checkArr[box.id]
            console.log(checkArr[box.id])
            */
        });
}