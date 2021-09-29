console.log('hello world')
let message = document.querySelector('#message')

function addMovie(event){
    event.preventDefault()
    let inputField = document.querySelector('input').value
    let movie = document.createElement('li')
    let movieTitle = document.createElement('span')
    
    movieTitle.textContent = inputField
    movieTitle.addEventListener('click', crossOffMovie)

    movie.appendChild(movieTitle)
    let deleteBtn = document.createElement('button')
    deleteBtn.textContent = 'X'

    deleteBtn.addEventListener('click',deleteMovie)
    movie.appendChild(deleteBtn)
    
    let list = document.querySelector('ul')
    list.appendChild(movie)
    
    //let inputField = String('')
}

function deleteMovie(event){
    event.target.parentNode.remove()
    message.textContent = event.target.parentNode.textContent + ' Deleted!'
    revealMessage()
}

const formElement = document.querySelector('form')
formElement.addEventListener('submit',addMovie)

function crossOffMovie(event){
    event.target.classList.toggle('checked')
    if(event.target.classList.contains('checked') == true){
        message.textContent = event.target.textContent + ' watched!'
    }
    else{
        message.textContent = event.target.textContent + ' added back!'
    }
    revealMessage()
}

function revealMessage(){
    message.classList.remove('hide')
    setTimeout(function(){message.className = 'hide'}, 1000)
}