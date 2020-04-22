import React, { useState, useEffect } from 'react';
import openSocket from 'socket.io-client';
import './ChatApp.css';
import Tabs from '../Tabs/Tabs.js'
import Friends from '../Friends/Friends.js'
import { withGlobalState } from 'react-globally'
const socket = openSocket('http://localhost:7001');

function ChatApp(props) {

    const [ localUser, setLocalUser ] = useState(socket.id)
    const [ remoteUser, setRemoteUser ] = useState('') // should be an object that includes the username for display
    const [ message, setMessage ] = useState('')
    const [ messages, setMessages ] = useState([])

    // useEffect(() => {
    //     socket.on('assign-socket', function(id) {
    //         console.log('assign socket ' + id)
    //         setLocalUser(id)
    //     })
    // }, [])
    

    // socket.on('assign-remote', function(id) {
    //     setRemoteUser(id)
    //     console.log('remote set ' + id)
    // })

    useEffect(() => {
        socket.on('update-chat', function(value) {
            setRemoteUser(value[0].socket)
        })
    }, [])
    
    useEffect(() => {
        socket.emit('log-user-info', {username: props.globalState.user.username, socket: socket.id })
        console.log('logging user ' + socket.id)
    }, [])

    useEffect(() => {
        socket.on('send-chat-to-client', function(data) {
            setMessages(messages => [...messages, data])
        })
    }, [])

    function sendChat() {
        socket.emit('send-chat-to-server', { message: message, remoteUser: remoteUser, localUser: localUser }) // add remote.username local.username for display 
        setMessage('')
    }

    function handleChange(event) {
        setMessage(event.target.value)
    }

    // return (
    //     <div className="chat-main">
    //         {/* <FriendList /> */}
    //         <h3>Chat between {localUser} and {remoteUser}</h3>
    //         <ul>
    //             {messages.map(item => <li>{item}</li>)}
    //         </ul>
    //         <input value={message} name='message' placeholder='Chat' onChange={handleChange}/>
    //         <button onClick={() => sendChat()}>Send</button>
    //     </div>
    // );

    return (
        <div className='chat-main'>
            <Tabs>
            <div label="Friends">
                <Friends localUser={localUser}/>
            </div>
            <div label="Chat">
                <h3>Chat between {localUser} and {remoteUser}</h3> {/* change this to 'send message to remote.username' */}
                <ul>
                    {messages.map(item => <li>{item}</li>)}
                </ul>
                <input value={message} name='message' placeholder='Chat' onChange={handleChange}/>
                <button onClick={() => sendChat()}>Send</button>
            </div>
            </Tabs>
        </div>
    )

    
}

export default withGlobalState(ChatApp)

