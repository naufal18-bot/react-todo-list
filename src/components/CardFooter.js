const CardFooter = ({ defConf, filteredTodoList, todoList}) => {
  return (
    <div className="card-footer">
      <span className="float-end">
        Total
        {defConf.filter === "all" ? " all " : defConf.filter === true ? " complete " : " active "}
        task:
        {defConf.filter === "all" ? " " : ` ${filteredTodoList.length} / `}
        {todoList.length}
      </span>
    </div>
  )
}

export default CardFooter