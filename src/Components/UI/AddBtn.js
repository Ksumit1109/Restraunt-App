import React from 'react';
import './Addbtn.css'
const AddBtn = ({ children, className }) => {
    return (
        <form>
                <button
                    type="button"
                    className={`add-btn ${className}`}
                >
                    {children}
                </button>
        </form>
    );
};

export default AddBtn;
