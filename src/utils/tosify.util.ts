import { toast } from 'react-toastify';

export const successNotify = (message: string) => {
  toast.success(message, {
    theme: 'colored',
    position: 'bottom-left',
    autoClose: 3000,
    closeOnClick: false,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });
};

export const errorNotify = (message: string) => {
  toast.error(message, {
    theme: 'colored',
    position: 'bottom-left',
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: false,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });
};
