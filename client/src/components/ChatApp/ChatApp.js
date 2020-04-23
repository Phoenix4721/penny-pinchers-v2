import React, { useState, useEffect } from 'react';
import openSocket from 'socket.io-client';
import './ChatApp.css';
import Tabs from '../Tabs/Tabs.js'

import { withGlobalState } from 'react-globally'
const socket = openSocket('http://localhost:7001');

function ChatApp(props) {

    const [ localUser, setLocalUser ] = useState(socket.id)
    const [ remoteUser, setRemoteUser ] = useState('') // should be an object that includes the username for display
    const [ message, setMessage ] = useState('')
    const [ messages, setMessages ] = useState([])
    

  
    useEffect(() => {
        socket.emit('log-user-info', {username: props.globalState.user.username, socket: socket.id })
        console.log('logging user ' + socket.id)
    }, [])

    useEffect(() => {
        socket.on('update-chat', function(value) {
            setRemoteUser(value[0].socket)
        })
    }, [])
    


    useEffect(() => {
        socket.on('send-chat-to-client', function(data) {
            console.log(data)
            setMessages(messages => [...messages, data])
        })
    }, [])

    function sendChat() {
        console.log('remote = ' + props.sock)
        socket.emit('send-chat-to-server', { message: message, remoteUser: props.sock, localUser: localUser }) // add remote.username local.username for display 
        setMessage('')
    }

    function handleChange(event) {
        setMessage(event.target.value)
    }

    return (

        <div className='chat-main'  style={props.style}>
            
       
            <div label="Chat">
            {props.icon}
                <h3 className="chatUser">{props.name}</h3>
               
                <div className="messages">
                    <ul className="message">
                        {messages.map(item => <li>{item}</li>)}
                    </ul>
                </div>
                <input className="msg" value={message} name='message' placeholder='Chat' onChange={handleChange}/>
                <button className="sendMsg" onClick={() => sendChat()}>Send</button>
            </div>
            
        </div>
    )

    
}

export default withGlobalState(ChatApp)
