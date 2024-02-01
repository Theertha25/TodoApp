let array=[]
function ExicuteTask(){
  let input=document.getElementById('input').value
  array.push(input)
  console.log(array)
  let itemsContainer=document.getElementById('itemsContainer')


  let todoListItems=document.createElement('div')
  let checkBox=document.createElement('input')
  checkBox.type='checkbox'

  let paragraph=document.createElement('p')
  paragraph.innerHTML=input
  todoListItems.classList.add('todo-flex')
  checkBox.classList.add('box')
  checkBox.classList.add('box')

  todoListItems.appendChild(checkBox)
  todoListItems.appendChild(paragraph)
  itemsContainer.appendChild(todoListItems)
}