import React, { useState } from 'react';

function ChangeTextButton(props) {
    const [btnTxt, changeTxt] = useState(true);

    function eventClickBtn() {
        changeTxt(!btnTxt)
    }

    return ( 
        <div>
        <button onClick = { eventClickBtn } >{
            btnTxt ? props.activeTxt : props.disableTxt
        }</button>
        </div>
    );

}
export default ChangeTextButton;