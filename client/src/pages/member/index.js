import React, { useEffect, useState } from "react";
import fakeAuth from '../../utils/authContext'
import LogOut from '../../components/logOutBut'
import API from '../../utils/API'
import { useHistory } from "react-router-dom";
import { withGlobalState } from 'react-globally'


function Member(props) {

    const [user, setUser] = useState('')
    
    let history = useHistory();
    
    useEffect(() => {
        API.userGreeting({
            id: props.globalState.user.userId
        })
        .then(res => {
            setUser(res.data[0].username)
        })
    }, [])

    let login = (site) => {
      fakeAuth.authenticate(() => {
        history.replace(site);
      });
    };

    return (
        <div>
            <p>hello {user} <span className="name"></span></p>
            <button onClick={() => {login('/setBills')}}>Set Your Bills</button>
            <LogOut />
        </div>
    )   
}

export default withGlobalState(Member)