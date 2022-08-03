import React from 'react'
import Lottie from "lottie-react";
import errors from 'assets/animation/error.json'
export const Error = () => {
    return (
        <div className="container-center-error">
            <Lottie animationData={errors} style={{ width: 50, height: 50 }} loop={true} />
            <h4 className='text-error'>Oops !.. Sepertinya Ada Yang Salah</h4>
            <p className='text-error-desc'>Server tidak merespon, Mohon tunggu beberapa saat karena akan diperbaiki secepatnya ...</p>
        </div>
    )
};