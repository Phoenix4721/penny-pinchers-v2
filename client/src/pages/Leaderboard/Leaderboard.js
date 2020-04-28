import React, { useEffect, useState } from 'react'
import { withGlobalState } from 'react-globally'
import API from '../../utils/API';
import './Leaderboard.css'
import logo from '../logo2.png'
import NavBar from '../../components/NavBar'
import { Card, Button, CardTitle, CardText } from 'reactstrap'
import { func } from 'prop-types';


function Leaderboard(props) {

    let tempArray = [] 

    const [leaderArray, setLeaderArray] = useState([]) 
    
    function calculatePoints(budget, expenses) {
        let fractionUnder = (budget - expenses)/budget;
        if (Math.floor(fractionUnder * 100) == NaN || Math.floor(fractionUnder * 100) == Infinity) {
            return 0
        }
        return Math.floor(fractionUnder * 100);
     }

    // function sortArray() {
    //     if (a.score < b.score) {
    //         return -1
    //     }  
    //     if (a.score > b.score) {
    //         return 1
    //     }
    //     if (a.score === b.score) {
    //         return 0
    //     }
    // }

    useEffect(() => {
        API.getLeaders()
            .then(value => {
            value.data.map(item => {
                item.score = calculatePoints(item.allBudgets, item.allBills)
                tempArray.push(item)
            })
            // console.log(tempArray)
            // setLeaderArray(tempArray.reverse())
            
            setLeaderArray(tempArray.sort(( a, b ) => b.score - a.score))
            // let tempArray2 = tempArray.reverse()
            // console.log(tempArray2)
        })
    }, [])
    
   

    return (
        <body className="leader-body">
            <NavBar />
        {/* <div className="container"> */}
        
        <h2><img className="leader-logo" src={logo}></img></h2>
        <Card body className='text-left card-div'>
            <CardTitle className='leader-title'>Leaderboard</CardTitle>
        </Card>
           
        {/* <div className='leader-div'>
          <h1 className='text-left leader-header'>Leaderboard</h1>
        </div> */}
            {leaderArray.map(item => {
                return (
                  <div className='card-div'>
                    
                    <Card body className="text-left card-body">
                
                      <CardTitle className='card-title'>{item.username}</CardTitle>
                      <CardText className='card-text'>Score: {item.score}</CardText>
                    </Card>
                    
                  </div>
                    // <div className='leader-container'>
                    // <div className='leader-div'>
                    //   <div className='leader-row'>
                    //     <div className='leader-name'>{item.username}</div>
                    //     <div className='leader-score'>Score: {item.score}</div>  
                    //   </div>
                    // </div>
                )
            })}
        {/* </div> */}
        </body>
    )
}

export default withGlobalState(Leaderboard)
 
