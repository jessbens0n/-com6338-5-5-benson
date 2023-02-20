var form = document.querySelector('form')
var todoList = document.querySelector('ul')
var input = document.querySelector('input')

input.required = true

form.onsubmit = function(e) {
    e.preventDefault()

    var item = document.querySelector('input').value

    var inputValue = document.querySelector('input').value.trim()
    
    if(inputValue!==""){
        var li = document.createElement('li')

        li.addEventListener('click', function handleClick(e) {
            if(this.style.textDecoration == "line-through"){
                this.remove()
            }else{
                this.style.textDecoration = "line-through"
            }
        })

        var button = document.createElement('button')
        button.textContent = item
        todoList.appendChild(li)
        li.appendChild(button)
        document.querySelector('input').value = ""
    }
}