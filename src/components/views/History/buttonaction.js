import React from 'react';
import {Button} from 'antd';
import { DeleteTwoTone} from '@ant-design/icons';
import firebase from '../../../firebase'

const ButtonAksi = ({ticket}) => {
    const onDelete = () => {
        const db = firebase.firestore()
        db.collection('ticket').doc(ticket.id).delete()
    }

    return (
        <div>
            <Button onClick={onDelete}><DeleteTwoTone twoToneColor="#eb2f96"/></Button>
        </div>
    );
}

export default ButtonAksi;