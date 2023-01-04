import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const EditForm = ({ defConf, setDefConf, updateTask, modalEdit, bs }) => {
  const handleInput = e => {
    setDefConf({...defConf, editTask: e.currentTarget.value});
  }

  const handleClose = () => {
    setDefConf({ ...defConf, editTask: '' })
  }

  const handleSubmit = e => {
    e.preventDefault()
    if (defConf.editTask) {
      updateTask(defConf.editTask)
      const modal = bs.Modal.getInstance(modalEdit)
      modal.hide()
      const target = document.getElementById('update-success-toast');
      const toast = new bs.Toast(target);
      toast.show();
    } else {
      const target = document.getElementById('empty-input-toast');
      const toast = new bs.Toast(target);
      toast.show();
    }
  }

  setTimeout(() => {
    document.getElementById("form-edit").focus()
  }, 500)

  return (
    <div className="modal fade" data-bs-backdrop="static" id="modalEdit" tabIndex="-1" aria-hidden="true">
      <div className="modal-dialog modal-dialog-centered">
        <form className="modal-content" onSubmit={handleSubmit}>
          <div className="modal-header">
            <h1 className="modal-title fs-5" id="editModalLabel">
              <FontAwesomeIcon icon="clipboard-list" className="text-primary me-2" size="lg"/> Edit Task
            </h1>
            <button className="btn-close" data-bs-dismiss="modal" type="button" aria-label="Close"></button>
          </div>
          <div className="modal-body">
            <div className="mb-3">
              <label htmlFor="form-edit" className="col-form-label">Task to do:</label>
              <input
                type="text"
                className="form-control"
                id="form-edit"
                placeholder="Task to do"
                aria-placeholder="Task to do"
                value={defConf.editTask}
                onChange={handleInput}
              />
            </div>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" onClick={handleClose}>Cancel</button>
            <button type="submit" className="btn btn-primary text-white">Update</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default EditForm