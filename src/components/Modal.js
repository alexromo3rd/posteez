import React from 'react';
import EditPostIt from './EditPostIt';
import Button from './Button';
import './Modal.css';

const Modal = (props) => {
  const { updatePostItFn, hideModalFn } = props;
  return (
    <div className='modal'>
      <section className="modal-main">
        <h1>Hello Modal!</h1>
        {/* <Button handleClick={} /> */}
        <Button handleClick={() => updatePostItFn()} label='Update' />
        <Button handleClick={() => hideModalFn()} label='Cancel' />
      </section>
    </div>
  );
};

export default Modal;
