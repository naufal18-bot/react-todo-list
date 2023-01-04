import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const TodoList = ({ checkTask, setDefConf, defConf, filteredTodoList, todoList, modalTarget, modalEdit, bs }) => {
  let list = defConf.filter === 'all' ? todoList : filteredTodoList
  
  const handleCheck = e => {
    checkTask(e.currentTarget.id, e.currentTarget.checked)
  }
  
  const deleteConfirmation = e => {
    setDefConf({ ...defConf, idTask: e.currentTarget.id });
    const modal = new bs.Modal(modalTarget)
    modal.show()
  }

  const handleEdit = e => {
    const item = todoList.filter(todo => todo.id === e.currentTarget.id)
    setDefConf({ ...defConf, idTask: e.currentTarget.id, editTask: item[0].task })
    const modal = new bs.Modal(modalEdit)
    modal.show()
  }

  const listItem = list.map(task => 
    <li key={task.id} className="list-group-item">
      <input
        type="checkbox"
        className="form-check-input me-3 align-middle"
        checked={task.complete}
        onChange={handleCheck}
        id={task.id}
      />
      <label
        className="form-check-label align-middle"
        htmlFor={task.id} >
        {task.task}
      </label>
      <span className="float-end">
        <button
          className="btn btn-light"
          id={task.id}
          onClick={deleteConfirmation}
        >
          <FontAwesomeIcon icon="trash" className="text-danger"/>
        </button>
        <button
          className="btn btn-light"
          id={task.id}
          onClick={handleEdit}
        >
          <FontAwesomeIcon icon="edit"/>
        </button>
      </span>
    </li>
  )
  
  if (list.length !== 0) {
    return (
      <div className="card-body">
        <ul className="list-group">
          {listItem}
        </ul>
      </div>
    )
  }

  return (
    <div className="card-body">
      <div className="p-2 text-center">
        No {defConf.filter === 'all' ? '' : defConf.filter === true ? 'complete' : 'active'} task
      </div>
    </div>
  )
}
export default TodoList;