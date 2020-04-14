import React, { Component } from 'react';
import "./Modal.css";

const Modal = (props) => (
		<div className="modal">
		 <div className="modal-content">
		   <div className="modal-body">
		      { props.children }
		    </div>
		 </div>
		</div>
)

export default Modal;
