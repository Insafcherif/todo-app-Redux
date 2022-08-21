import React from 'react';
import CardTask from './CardTask';
import { useSelector } from 'react-redux';
import Spinner from 'react-bootstrap/Spinner';


function LisstTask() {
    const tasks = useSelector((state) => state)

    return (
        <div style={{
            width: "50%",
            margin: "auto",
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-around"
        }}>
            {tasks.length != 0 ? tasks.map((elt) => (<CardTask key={elt.id} task={elt}/>)) : <Spinner animation="border"/>}
        </div>
    )
}

export default LisstTask