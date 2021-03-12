/*Let’s call the placeholder API like in the slides and let’s show the information that we receive in the html.*/

fetch("https://jsonplaceholder.typicode.com/todos/1")
  .then(response => response.json())
  .then(data => {
    let body = document.querySelector('body');
    let todoList = document.createElement('div');
    let p1 = document.createElement('p');
    let p2 = document.createElement('p');
    let p3 = document.createElement('p');
    let p4 = document.createElement('p');
        body.appendChild(todoList);
        todoList.appendChild(p1);
        todoList.appendChild(p2);
        todoList.appendChild(p3);
        todoList.appendChild(p4);
        p1.innerHTML= `Have you finished this task? ${data.completed}`
        p2.innerHTML= `ID : ${data.id}`
        p3.innerHTML= `The task : ${data.title}`
        p4.innerHTML= `User ID : ${data.userid}`
        console.log(data);
  })
    

  