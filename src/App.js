import React, { useState } from "react";
import { nanoid } from "nanoid";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faChevronRight, faClipboardList, faTrash, faCircleExclamation, faEdit, faClose, faCircleCheck, faCircleQuestion } from "@fortawesome/free-solid-svg-icons";
import bootstrap from "bootstrap/dist/js/bootstrap.bundle";
import AddForm from "./components/AddForm";
import TodoList from "./components/TodoList";
import EmptyInputToast from "./components/EmptyInputToast";
import AddSuccessToast from "./components/AddSuccessToast";
import DeletedToast from "./components/DeletedToast";
import UpdateSuccess from "./components/UpdateSuccess";
import DeleteConfirmToast from "./components/DeleteConfirmToast";
import EditForm from "./components/EditForm";
import CardHeader from "./components/CardHeader";
import CardFooter from "./components/CardFooter";

library.add(faChevronRight, faClipboardList, faTrash, faCircleCheck, faCircleExclamation, faEdit, faClose, faCircleQuestion);

function App() {
  const defaultSetItem = { filter: "all", idTask: null, task: '', editTask: ''};
  const [defConf, setDefConf] = useState(defaultSetItem);
  const [todoList, setTodoList] = useState([]);

  const addTask = (userInput) => {
    let copy = [...todoList];
    copy = [...copy, { id: nanoid(8), task: userInput, complete: false }];
    setTodoList(copy);
  };

  const deleteTask = (id) => {
    let indexArg = todoList.map((todo) => todo.id).indexOf(id);
    let mapped = todoList.filter((_, index) => index !== indexArg);
    setTodoList(mapped);
  };

  const updateTask = (userInput) => {
    let mapped = todoList.map((task) => {
      return task.id === defConf.idTask ? { ...task, task: userInput } : { ...task };
    });
    setTodoList(mapped);
  };

  const checkTask = (id, check) => {
    let mapped = todoList.map((task) => {
      return task.id === id ? { ...task, complete: check } : { ...task };
    });
    setTodoList(mapped);
  };

  setTimeout(() => {
    if (todoList.length === 0) document.getElementById("form-input").focus();
  });

  let filteredTodoList = todoList.filter((task) => task.complete === defConf.filter);

  const modalTarget = document.getElementById("confirmModal");
  const modalEdit = document.getElementById("modalEdit");
  const deletedToast = document.getElementById("deleted-toast")

  return (
    <div className="container-fluid bg-linear-gradient min-vh-100">
      <div className="d-flex justify-content-center pt-5 pb-5">
        <div className="card shadow rounded mb-5 p-3 card-width">
          <h1 className="card-title text-center p-3 text-dark-gold">
            <span className="me-3">
              <img src="list128.png" alt="https://www.flaticon.com/free-icons/to-do-list" style={{width: 50}} />
            </span>
            <strong>TODO LIST</strong>
          </h1>

          <AddForm
            todoList={todoList}
            addTask={addTask}
            defConf={defConf}
            setDefConf={setDefConf}
            bs={bootstrap}
          />

          <CardHeader
            defConf={defConf}
            setDefConf={setDefConf}
          />

          <TodoList
            todoList={todoList}
            filteredTodoList={filteredTodoList}
            defConf={defConf}
            checkTask={checkTask}
            setDefConf={setDefConf}
            modalTarget={modalTarget}
            modalEdit={modalEdit}
            bs={bootstrap}
          />

          <CardFooter
            defConf={defConf}
            todoList={todoList}
            filteredTodoList={filteredTodoList}
          />
        </div>
      </div>

      <DeleteConfirmToast
        deleteTask={deleteTask}
        idTask={defConf.idTask}
        modalTarget={modalTarget}
        deletedToast={deletedToast}
        bs={bootstrap}
      />

      <EditForm
        defConf={defConf}
        setDefConf={setDefConf}
        updateTask={updateTask}
        modalEdit={modalEdit}
        bs={bootstrap}
      />

      <EmptyInputToast />
      <AddSuccessToast />
      <UpdateSuccess />
      <DeletedToast />
    </div>
  );
}

export default App;
