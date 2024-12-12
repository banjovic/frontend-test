"use client";

import { Toaster } from "react-hot-toast";

const ToastProvider = () => {
  return (
    <Toaster
      position='top-center'
      containerClassName='w-full'
      reverseOrder={false}
    />
  );
};

export default ToastProvider;
