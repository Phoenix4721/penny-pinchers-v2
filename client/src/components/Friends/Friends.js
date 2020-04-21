import React, { useEffect, useState } from 'react'
import openSocket from 'socket.io-client';
const socket = openSocket('http://localhost:7001');

function Friends(props) {

    const [ friendList, setFriendList ] = useState([])

    useEffect(() => {
            // socket.emit('request-friends-list') //its probably always emitting the event 
        setInterval(function() {
            socket.emit('request-friends-list')
        }, 10000)
    }, [])

    socket.on('send-friends-list', function(data) {
        setFriendList(data)
    })

    function switchChat(remoteUser) {
        socket.emit('switch-chat', {localUser: props.localUser, remoteUser: remoteUser} )
    }

    return (
        <div>
            <ul>
                {friendList.map(item => {
                    // if (item.socket) {
                        return (
                            <li onClick={() => switchChat(item.username)}>{item.username}</li>
                        )
                    // }
                })}
            </ul>
        </div>
    )
}

export default Friends