import React, { useState } from 'react';
import Modal from "react-bootstrap/Modal";
import { Row, Button, Col, Form, Card, Container,Nav,Image,FormLabel} from "react-bootstrap";


export default function AddTable() {
        const [isShowModal, setShowModal] = useState(false)
        const handleAddBtn = () => {
            setShowModal(!isShowModal)
        }

        const handleClose = () => {
            setShowModal(false)
        }

  return (
    <div>
        <div className="container-fluid" >
            <div class="row">
                <div class="col-11">
                    <div class="input-group">
                        <input type="text" class="form-control" placeholder="Username" aria-label="Username" aria-describedby="input-group-button-right"/>
                        <button type="button" class="btn btn-primary" id="input-group-button-right">Search</button>
                    </div>
                </div>
                <div class="col-1"><button type="button" class="btn btn-dark" onClick={handleAddBtn}>Add</button></div>
            </div>
        </div>
        <Modal size="xl" show={isShowModal} onHide={handleClose} id="myModal">
			  <Modal.Header closeButton>
				<Modal.Title>Add User</Modal.Title>
			  </Modal.Header>
			  <Modal.Body>
                <div> 
                            <form>
                                <div className="row">
                                    <div className='col-md-6'>
                                        <div className="row">
                                            <div class="col-md-2">
                                                <label class="col-form-label">Name:</label>
                                            </div>
                                            <div class="col-md-10">
                                                <input type="text" className="form-control" placeholder="Enter User Name"/>
                                            </div>
                                        </div>    
                                    </div>
                                        
                                    <div class="col-md-6">
                                        <div className="row">
                                            <div class="col-md-2">
                                                <label class="col-form-label">Email:</label>
                                            </div>
                                            <div class="col-md-10">
                                            <input type="text" className="form-control" placeholder="Enter User email"/>
                                            </div>
                                        </div>
                                    </div>
                                </div><br></br>

                                <div className="row">
                                    <div className='col-md-6'>
                                        <div className="row">
                                            <div classname="col-md-2">
                                                <label className="col-form-label">Mother Tongue:</label>
                                            </div>
                                            <div className="col-md-8">
                                                <select className="form-control" id="selectbox">
                                                    <option value="#">konkani</option>
                                                    <option value="#myModal">kannada</option>                                                    
                                                    <option value="#myModal2">Marathi</option>
                                                    <option value="#myModal3">Tulu</option>
                                                </select>
                                            </div>
                                        </div>    
                                    </div>
                                        
                                    <div class="col-md-6">
                                        <div className="row">

                                            <div className="col-md-2">
                                                <label className="col-form-label">DoB:</label>
                                            </div>
                                            <div className="col-md-10">
                                                <Form.Group controlId="dob">
                                                    <Form.Control type="date" name="dob" placeholder="Date of Birth" />
                                                </Form.Group>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="row">
                                    <div className='col-md-6'>
                                        <div className="row">
                                            <div classname="col-md-2">
                                                <label className="col-form-label">Marital Status:</label>
                                            </div>
                                            <div className="col-md-8">
                                                <select className="form-control" id="selectbox">
                                                    <option value="#">aaa</option>
                                                    <option value="#myModal">bbb</option>                                                    
                                                    <option value="#myModal2">ccc</option>
                                                    <option value="#myModal3">dddd</option>
                                                </select>
                                            </div>
                                        </div>    
                                    </div>
                                </div>    
                            </form>
                </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-dismiss="modal">Cancel</button>
                <button type="button" class="btn btn-primary">Update</button>
            </div>




                 {/* <div className="container">
                    <div className="row">
                        <div className='col-md-6'>
                            <div className='row'>
                                <div className="col-md-4">
                                    <label className="label1">Name</label>
                                </div>
                                <div className='col-md-8'>        
                                <input type="text" className="input_txt" id="login_page" name="email" placeholder="Enter User Name"/>    
                                </div>
                            </div>
                        </div>

                        <div className='col-md-6'>
                            <div className='row'>
                                <div className="col-md-6">
                                    <label className="label1">Name</label>
                                </div>
                                <div className='col-md-6'>        
                                <input type="text" className="input_txt" id="login_page" name="email" placeholder="Enter User Name"/>    
                                </div>
                            </div>
                        </div> */}
                       
                        
                        {/* <div className="col-md-3">
                           <label className="label1">Email-Id</label>
                        </div>
                        <div className='col-md-3'>        
                           <input type="text" className="input_txt" id="login_page" name="email" placeholder="Enter User email-id"/>    
                        </div> */}
                    {/* </div>      
                    <div className="form-group">
                        <div className="row">
                            <div className="col-md-4">
                            <label className="label1">Mother Tongue</label>
                            </div>
                            <div className="col-md-8">
                            <select name="Country" id="Country1" className="Country">
                                <option value="">konkani</option>
                                <option value="">kannada</option>
                            </select>
                            </div>						
                            </div>	  
                    </div> 

                    <div className="row">
                        <div className="col-md-3">
                            <label className="label1">DateofBirth</label>
                        </div>
                        <div className='col-md-6'>        
                            <input type="text" className="input_txt" id="login_page" name="email" placeholder="Enter User DoB"/> 
                        </div>
                    </div>    

                    <div className="row">
                        <div className="col-md-3">
                            <label className="label1">Marital Status</label>
                        </div>
                        <div className='col-md-6'>        
                            <input type="text" className="input_txt" id="login_page" name="email" placeholder="Enter User Marital status"/>    
                        </div>
                    </div>  

                    <div>
                        <div className="row">
                            <div className="col-md-3">
                                <button type="button" class="btn btn-danger">Cancel</button>                           
                            </div>
                            <div className='col-md-6'>        
                                <button type="button" class="btn btn-success">Update</button>
                            </div>
                        </div>
                    </div>  
                 </div> */}



              </Modal.Body>
        </Modal>
        
    </div>
    
  )
}
