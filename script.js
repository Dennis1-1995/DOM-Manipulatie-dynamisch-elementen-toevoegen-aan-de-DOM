// Deel 1 - Elementen toevoegen aan de DOM

// Buttons
const buttons = document.querySelectorAll('.big-five-button'); 
const btnRemoveFirst = document.querySelector('#remove-first-item-button');
const btnRemoveAll = document.querySelector('#remove-all-button');

// Spotted animals List
const myList = document.querySelector('#spotted-animals-list'); // Parent Ul
const myListItem = document.querySelector('.spotted-animals-list-item'); // Child Li
const mylistLi = document.getElementById('spotted-animals-list').getElementsByTagName('li'); // Li

// Big Five List
const listBigFive = document.querySelectorAll('.big-five-list'); // Parent Ul
const listItemBigFive = document.querySelectorAll('.big-five-list-item'); // Child Li

//=======================================================================================

// Event-listener buttons

const btnEventListener = ()=>{
    for (var i = 0; i < listItemBigFive.length ; i++) {
        listItemBigFive[i].addEventListener("click", function(e) {
            let newItem = document.createElement('li');
            newItem.className = "spotted-animals-list-item ";
            newItem.textContent = (e.target.textContent);
            return myList.appendChild(newItem);
        });
    }
};
console.log(btnEventListener());

// Remove the First
btnRemoveFirst.addEventListener('click', function(){
    myList.removeChild(myList.children[0]);
})

//Remove all animals form the spotted list
btnRemoveAll.addEventListener('click', function(){
    myList.innerHTML = "";
})


