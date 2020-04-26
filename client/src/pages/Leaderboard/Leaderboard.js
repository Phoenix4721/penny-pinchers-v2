import React, { useEffect, useState } from 'react'
import { withGlobalState } from 'react-globally'
import API from '../../utils/API';
import './Leaderboard.css'

function Leaderboard(props) {

    let tempArray = [] 

    const [leaderArray, setLeaderArray] = useState([]) 
    
    function calculatePoints(budget, expenses) {
        let fractionUnder = (budget - expenses)/budget;
        return Math.floor(fractionUnder * 100);
     }

    useEffect(() => {
        API.getLeaders()
            .then(value => {
            value.data.map(item => {
                item.score = calculatePoints(item.allBudgets, item.allBills)
                tempArray.push(item)
            })
            console.log(tempArray)
            // setLeaderArray(tempArray.sort(( a, b ) => b.score - a.score))
            console.log(tempArray.sort(( a, b ) => a.score - b.score))
        })
    }, [])
    

    return (
        <div className="container">
            {leaderArray.map(item => {
                return (
                    <div className='row'>
                        <div className='name'>{item.username}
                            <div className='score'>{item.score}

                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default withGlobalState(Leaderboard)
 