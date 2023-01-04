import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const DeleteConfirmToast = ({ deleteTask, idTask, modalTarget, bs }) => {
  const handleYes = () => {
    deleteTask(idTask);
    const modal = bs.Modal.getInstance(modalTarget);
    modal.hide();
  };
  return (
    <div className="modal fade" id="confirmModal" tabIndex="-1" aria-labelledby="confirmModalLabel" aria-hidden="true">
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
            <h1 className="modal-title fs-5" id="confirmModalLabel">
              <FontAwesomeIcon icon="circle-question" size="lg" className="text-warning me-3" />
              Modal title
            </h1>
          </div>
          <div className="modal-body">Are you really want to delete this task?</div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">
              Cancel
            </button>
            <button type="button" className="btn btn-danger text-white" onClick={handleYes}>
              Delete it!
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeleteConfirmToast;
