import React from "react";
import AuthContext from '../utils/authContext'
import LogOut from '../components/logOutBut'

function Member() {


    return (
        <div>
            <p>hello <span className="name"></span></p>
            <LogOut />
        </div>
    )   
}

export default Member