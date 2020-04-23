import React, { useEffect, useState } from 'react'
import { withGlobalState } from 'react-globally'
import openSocket from 'socket.io-client';
import ChatApp from '../ChatApp/ChatApp'
const socket = openSocket('http://localhost:7001');

function Friends(props) {
    const [ localUser, setLocalUser ] = useState(socket.id)
    const [sockUser, setSockUser] = useState('')
    const [ friendList, setFriendList ] = useState([])
    const [show, setShow] = useState(false)
    const [user, setUser] = useState('')

    useEffect(() => {
            // socket.emit('request-friends-list') //its probably always emitting the event 
        setInterval(function() {
            socket.emit('request-friends-list')
        }, 100)
    }, [])

    useEffect(() => {
        socket.emit('log-user-info', {username: props.globalState.user.username, socket: socket.id })
        console.log('logging user ' + socket.id)
    }, [])



    socket.on('send-friends-list', function(data) {
        setFriendList(data)
    })

    function switchChat(remoteUser, sock) {
        setUser(remoteUser)
        setSockUser(sock)
        socket.emit('switch-chat', {localUser: localUser, remoteUser: remoteUser} )
        setShow(true)
    }

    function switchShow() {
        setShow(false)
    }

    return (
    <div>
        {!show ? 
        <div className="onOff">
          <div className="online">
            <h4 className="onlineHead">Online</h4>
            <ul>
                {friendList.map(item => (
                    item.socket ? <li key={item.userId} className="friendList"onClick={() => switchChat(item.username, item.socket)}>{item.username}</li> : undefined
                ))}
            </ul>
          </div>
          <div className="offline">
            <h4 className="onlineHead">Offline</h4>
                <ul>
                {friendList.map(item => (
                    !item.socket ? <li key={item.userId} className="friendListOff">{item.username}</li> : undefined
                ))}
                </ul>
          </div>
        </div> : undefined}
        {show ? <ChatApp sock={sockUser} name={user} icon={<i class="fa fa-arrow-left back" aria-hidden="true" onClick={switchShow}></i>} /> : undefined}
     </div>
    )
}

export default withGlobalState(Friends)