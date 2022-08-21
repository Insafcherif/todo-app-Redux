import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import { deletTask } from '../Redux/Action';
import { useDispatch } from 'react-redux';
import Modal from 'react-bootstrap/Modal';
import { updatTask } from '../Redux/Action';
import {doneTask} from '../Redux/Action';

function CardTask({ task }) {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const dispatch = useDispatch();
    const [descp, setDescp] = useState('')
    const handleDelete = () => {
        dispatch(deletTask(task.id))
    }
    const handleUpdate = (e) => {
        dispatch(updatTask(task.id, descp))
        handleClose()
    }
    const handledone=()=>{
        dispatch(doneTask(task.id))
    }
    return (
        <>
            <Card style={{
                width: '18rem',
                paddingTop: "5px",
                marginTop: "10px",
            }}>
                <Card.Body>
                    <Card.Title style={task.done ? {textDecoration : "line-through"} : {textDecoration : "none"} }>{task && task.desc}</Card.Title>
                    <Form.Check type="checkbox" label="Done" onClick={handledone}/>
                    <Button variant="primary" onClick={handleShow}>Update Task</Button>
                    <Button variant="danger" onClick={handleDelete}>Delete Task</Button>
                </Card.Body>
            </Card>
            <Modal show={show} onHide={handleClose} animation={false}>
                <Modal.Header closeButton>
                    <Modal.Title>Update your task</Modal.Title>
                </Modal.Header>
                <Form.Control type="text" placeholder={task.desc} onChange={(e) => setDescp(e.target.value)} />
                <Modal.Footer>
                    <Button variant="primary" onClick={handleUpdate}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </>


    )
}


export default CardTask