import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { addTask } from '../Redux/Action';
import { useDispatch } from 'react-redux';


function Add() {
  const dispatch = useDispatch();
  const [task, setTask] = useState({ id : 20, desc: "", done: false })
  const handleChange=(e)=> {
    setTask({...task, id : Math.floor(Math.random()*10000) +1 , desc: e.target.value })};

  const handleSubmit=(event)=>{
    event.preventDefault();
    dispatch(addTask(task));
  }
  return (
    <Form onSubmit={handleSubmit} style={{ marginTop:"80px" }}>
      <Form.Group className="mb-3" style={{ width: "50%", margin: "auto" }}>
        <Form.Label>Add your Task</Form.Label>
        <Form.Control type="text"
          placeholder="Add your Task"
          onChange={handleChange}
           />
      </Form.Group>
      <Button type="submit">Submit</Button>
    </Form>
  )
}

export default Add