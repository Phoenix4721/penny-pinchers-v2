import React, { useEffect, useState } from "react";
import Cookies from 'js-cookie'
import API from '../../utils/API'
import { withGlobalState } from 'react-globally'
import NavBar from '../../components/NavBar'
import ProgressBars from '../../components/ProgressBars'


function Progress(props) {
    Cookies.set('url', '/member', { path: '' })
      const [user, setUser] = useState('')
      const [groc, setGroc] = useState(0)
      const [trans, setTrans] = useState(0)
      const [dine, setDine] = useState(0)
      const [shop, setShop] = useState(0)

      useEffect(() => {
        API.userGreeting({
            id: props.globalState.user.userId
        })
        .then(res => {
            setGroc(res.data[0].groceries/res.data[0].GroceriesBudget * 100)
            setTrans(res.data[0].transportation/res.data[0].TransportationBudget * 100)
            setDine(res.data[0].dining/res.data[0].DiningBudget * 100)
            setShop(res.data[0].shopping/res.data[0].ShoppingBudget * 100)
            setUser(res.data[0].username)
        })
        
    }, [])

    return (
      <body className="main-body">
        <NavBar />
          <ProgressBars groc = {groc} trans = {trans} dine = {dine} shop = {shop} />
      </body>
    )   
}

export default withGlobalState(Progress)