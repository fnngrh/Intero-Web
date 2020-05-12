import React from 'react';
import {Button} from 'antd';
import {Link} from 'react-router-dom'
import firebase from '../../../firebase'

const ButtonAksi = ({ticket}) => {
    const onDelete = () => {
        const db = firebase.firestore()
        db.collection('ticket').doc(ticket.id).delete();
    }
   

    return (
            <Link to="/buyNow">
            <Button danger onClick={onDelete}>Delete</Button>
            </Link>
    );
}

export default ButtonAksi;