
import { toast } from 'react-toastify';

const options = {
    position: toast.POSITION.TOP_RIGHT,
    hideProgressBar: true,
    autoClose: 1500
}

const success = (msg) => {
    toast.success(msg, options);
};

const error = (msg) => {
    toast.error(msg, options);
};

const toastService = {
    success,
    error
};

export default toastService;