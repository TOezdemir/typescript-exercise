import { IToDo } from "./interfaces/IToDo";

const TODOS_URL = "https://jsonplaceholder.typicode.com/todos";

//! VERSION 1: NICHT SO SCHÖN :(

const buttonElement = document.getElementById(
  "show-todos"
) as HTMLButtonElement;
const contentDiv = document.getElementById("content") as HTMLDivElement;

buttonElement?.addEventListener("click", () => {
  console.log("Someone wants to see the to dos! :O");
  fetchAndDisplay(TODOS_URL);
});

function fetchAndDisplay(url: string): any {
  fetch(url)
    .then((response: Response) => {
      console.log(response);
      return response.json();
    })
    .then((data: IToDo[]) => {
      const todos = data as IToDo[];
      console.log(todos);
      contentDiv.innerHTML = createToDoList(todos);
    })
    .catch((error: Error) => {
      console.error(error);
    });
}

function createToDoList(todos: IToDo[]): string {
  todos.sort((a, b) => a.title.localeCompare(b.title));
  const result = todos.map((todo: IToDo) => {
    const color = todo.completed ? "green" : "red";
    return `
        <div>
        <p style="color: ${color};">ID: ${todo.id}</p> 
        <p style="color: ${color};">User ID: ${todo.userId}</p>
        <p style="color: ${color};">Titel: ${todo.title}</p>
        <p style="color: ${color};">Erledigt: ${
      todo.completed ? "Ja" : "Nein"
    }</p> 
        </div>
        `;
  });
  return result.join("");
}

//! VERSION 2: VIEL VIEL SCHÖNER

fetch(TODOS_URL)
  .then<IToDo[]>((response) => {
    // Typisierung:
    if (!response.ok) {
      throw new Error("Where data?");
    }
    return response.json();
  })
  .then((todos: IToDo[]) => {
    // Sortierung:
    todos.sort((a, b) => a.title.localeCompare(b.title));

    // Anzeige im HTML:
    const todoList = document.getElementById("todo-list") as HTMLUListElement;
    todos.forEach((todo) => {
      const listItem = document.createElement("li");
      listItem.textContent = todo.title;

      // Erledingungsstatus:
      if (todo.completed) {
        listItem.style.color = "green";
      } else {
        listItem.style.color = "red";
      }

      todoList.appendChild(listItem);
    });
  })
  .catch((error) => {
    console.error("Fehler beim Abrufen der Daten:", error);
  });
