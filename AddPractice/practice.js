fruits = document.querySelector('.fruits')
fruit = document.querySelectorAll('.fruit')
  form = document.querySelector('form')

  form.addEventListener('submit', function(event){
    event.preventDefault();
    fruitToAdd = document.getElementById('fruit-to-add')
       newLi = document.createElement('li')

       newLi.innerHTML = fruitToAdd.value + '<button class="delete-btn">x</button>'
       fruits.appendChild(newLi)

    
  })


  // delelte 


  fruits.addEventListener('click', function(event){
   
    if(event.target.classList.contains('delete-btn')){

            const  fruitToDelelte = event.target.parentElement

              fruits.removeChild(fruitToDelelte)
    }
  })