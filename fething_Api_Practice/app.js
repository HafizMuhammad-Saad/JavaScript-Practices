const todosApiUrl = 'https://dummyjson.com/todos';

// Fetch the data from the API

var todosData = []
async function fetchingApis() {
    try {
        const todosRes = await fetch(todosApiUrl)
        const todosJson = await todosRes.json()
        todosData = todosJson.todos
        console.log(todosData);
        renderTodos(todosData)

    } catch (error) {
        console.log(error);
        
    }
}

// fetchingApis()

function renderTodos(todos) {
    const todoList = document.getElementById('todosList')
    todoList.innerHTML = ''; 
   todos.map((data) => {
    const completedStatus = data.completed ? 'completed' : 'not completed';


       todoList.innerHTML += `
       
       <tbody class="table-group-divider">
           <tr>
                <td>${data.id}</td>
                <td contenteditable>${data.todo}</td>
                <td> 
                         ${data.userId} 
                </td>
                <td>
                        ${completedStatus}
                </td>
           </tr>
        </tbody>
       `
    
   })

}

// Filter Completed Todos
function filterTodosByStatus(event) {
    const filterValue = event.target.value; // Get selected value

    let filteredTodos;

    if (filterValue === 'completed') {
        filteredTodos = todosData.filter(todo => todo.completed);
    } else if (filterValue === 'notCompleted') {
        filteredTodos = todosData.filter(todo => !todo.completed);
    } else {
        filteredTodos = todosData; // Show all todos
    }

    renderTodos(filteredTodos); // Render filtered todos
}

fetchingApis()