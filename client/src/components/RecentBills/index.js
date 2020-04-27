import React, { useEffect, useState } from 'react'
import { withGlobalState } from 'react-globally'
import API from '../../utils/API'
import { Row, Col, Card, CardTitle, CardText, Button } from 'reactstrap'

function RecentBills(props) {
    console.log(props)
    const [notes, setNotes] = useState([])
   const user = props.globalState.user.userId

   useEffect(() => {
       API.recentBills({
           userId: user
       })
       .then(res => {
           setNotes(res.data)
       })
   }, [])
    
    return (
        <div>
            {notes.map(t => (
                <Row className="bills-row">
                <Col sm="12">
                  <Card body className="body">
                    <CardTitle className="title">{t.billType}</CardTitle>
                    <CardTitle className="title">${t.billAmount}</CardTitle>
                    <CardTitle className="title">{t.date}</CardTitle>
                    <CardText className="text">{t.billDescription}</CardText>
                    {/* <hr></hr> */}
                  </Card>
                </Col>
              </Row>
                
            ))}
        </div>
        
        
    )
}

export default withGlobalState(RecentBills)