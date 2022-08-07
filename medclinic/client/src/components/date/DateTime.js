import React from "react";
import {DatePicker} from 'rsuite'

const DateTime = () => {
    return (
       
        // componente que mostra a data e a hora local
        <DatePicker 
            format="dd / MM / yyyy - HH:mm:ss" 
            readOnly
            plaintext
            defaultValue={new Date()}
            style={{ width: 200, color: 'white', border: '3px solid #1F3A68', margin: '2rem', textAlign: 'center' }} 
        />
        
    )
}

export default DateTime;
