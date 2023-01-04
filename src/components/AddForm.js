import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const AddForm = ({ addTask, defConf, setDefConf, bs }) => {
  const handleInput = e => {
    setDefConf({...defConf, task: e.currentTarget.value});
  }
  
  const handleSubmit = e => {
    e.preventDefault();
    if (defConf.task) {
      addTask(defConf.task);
      setDefConf({...defConf, task: ""});
      const target = document.getElementById('add-success-toast');
      const toast = new bs.Toast(target);
      toast.show();
    } else {
      const target = document.getElementById('empty-input-toast')
      const toast = new bs.Toast(target);
      toast.show();
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="input-group" id="add-form">
        <input
          type="text"
          className="form-control"
          placeholder="New Task To Do"
          aria-placeholder="New Task To Do"
          id="form-input"
          value={defConf.task}
          onChange={handleInput}
        />

        <button
          type="submit"
          className="btn btn-primary text-white">
          Submit&ensp;

          <FontAwesomeIcon icon="chevron-right" />
        </button>
      </div>
    </form>
  )
}

export default AddForm;