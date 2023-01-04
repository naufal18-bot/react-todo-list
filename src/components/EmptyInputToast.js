import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const EmptyInputToast = () => {
  return (
    <div className="toast-container position-fixed top-0 end-0 p-3">
      <div id="empty-input-toast" className="toast" role="alert" aria-live="assertive" aria-atomic="true">
        <div className="toast-header">
          <FontAwesomeIcon icon="circle-exclamation" className="text-danger" size="lg" />
          <strong className="me-auto ms-3">Warning!</strong>
          <button type="button" className="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
        </div>
        <div className="toast-body">Task is required</div>
      </div>
    </div>
  );
};

export default EmptyInputToast;
