const form = document.querySelector('form')
const fruit = document.querySelectorAll('.fruit')
const fruits = document.querySelector('.fruits')
search = document.getElementById('filter')

// To Add new Li 


form.addEventListener('submit', function(event){
    event.preventDefault()

    fruitToAdd = document.getElementById('fruit-to-add')
    newLi = document.createElement('li')
    newLi.innerHTML = fruitToAdd.value + "<button class = 'delete-btn'>x</button>"
    fruits.appendChild(newLi)

})

// to delete Li

fruits.addEventListener('click', function(event){

    if(event.target.classList.contains('delete-btn'))
    {
        const fruitToDelete = event.target.parentElement
    
        fruits.removeChild(fruitToDelete)

    }

})

// to Filter fruit



search.addEventListener('keyup',  function(event){
    const textEntered = event.target.value.toLowerCase();
   
    const fruitItems = document.getElementsByClassName('fruit')
    for(i=0; i<fruitItems.length;i++){
        console.log(fruitItems[i].firstChild.textContent.toLowerCase());
        const currentFruitText = fruitItems[i].firstChild.textContent.toLowerCase();
        if(currentFruitText.indexOf(textEntered) === -1){
            fruitItems[i].style.display = 'none';
        }
        else{
            fruitItems[i].style.display = "flex"
        }
    }
})



