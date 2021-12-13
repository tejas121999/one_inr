import React from 'react';
import { ToastContainer, toast } from 'react-toastify';

export const ToastBox = () => {
  return (
    <div>
      <ToastContainer
        position="top-center"
        autoClose={2000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable={false}
        pauseOnHover={false}
      />
    </div>
  );
};
