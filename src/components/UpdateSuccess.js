import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const UpdateSuccess = () => {
    return (
        <div className="toast-container position-fixed top-0 end-0 p-3">
            <div id="update-success-toast" className="toast" role="alert" aria-live="assertive" aria-atomic="true">
                <div className="toast-header">
                    <FontAwesomeIcon icon="circle-check" className="text-success" size="lg" />
                    <strong className="me-auto ms-3">Success!</strong>
                    <button type="button" className="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
                </div>
                <div className="toast-body">
                    Task successfully updated
                </div>
            </div>
        </div>
    )
}

export default UpdateSuccess;