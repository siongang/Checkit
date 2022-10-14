
let elem = '<div class= "checklist" id="last"><input type = "checkbox" name = "check" id = "check" class = "check" value = "finished"><input type = "text" class = "text"></div>';


let addMore = document.getElementById("add-button");
console.log(addMore)

if (addMore) {
    console.log('hi')
    addMore.addEventListener("click", ()=> {
        document.getElementById('last').id = 'temp';
        document.getElementById('temp').insertAdjacentHTML('afterend', elem);
        document.getElementById('temp').id = null;

        console.log("button pressed");

    });  
}

/*
let checkBox = document.getElementById("check")

function strike(){
    console.log('checkboxclicked')

}
*/
