import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const AddSuccessToast = () => {
  return (
    <div className="toast-container position-fixed top-0 end-0 p-3">
      <div id="add-success-toast" className="toast" role="status" aria-live="polite" aria-atomic="true">
        <div className="toast-header">
          <FontAwesomeIcon icon="circle-check" className="text-success" size="lg" />
          <strong className="me-auto ms-3">Success!</strong>
          <button type="button" className="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
        </div>
        <div className="toast-body">New task successfully added</div>
      </div>
    </div>
  );
};

export default AddSuccessToast;
