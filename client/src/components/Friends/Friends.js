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
          
        setInterval(function() {
            socket.emit('request-friends-list')
        }, 1000)
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
    <div className="chatApp">
        
        <div className="onOff" style={show ?{visibility:"hidden"}:{visibility:"visible"}}>
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
        </div> 

            <ChatApp sock={sockUser} localUser={localUser} name={user} icon={<i class="fa fa-arrow-left back" aria-hidden="true" onClick={switchShow}></i>} style={show ? {visibility:"visible"}:{visibility:"hidden"}}/>
       
     </div>
    )
}

export default withGlobalState(Friends)