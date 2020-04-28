import React from 'react' 
import { MDBProgress } from 'mdbreact'

function ProgressBars(props) {
    console.log(props)
    return (
    
    <div>
      <h2>Percentage of Budget Used</h2><br />
      <h4>
        Groceries
      </h4>
        <MDBProgress material value={props.groc} height="60px" animated>
          {Math.round(props.groc)} % 
        </MDBProgress><br />
        <h4>
        Transportation
      </h4>
        <MDBProgress material value={props.trans} height="60px" animated>
        {Math.round(props.trans)} % 
        </MDBProgress> <br />
        <h4>
        Dining
      </h4>
        <MDBProgress material value={props.dine} height="60px" animated>
        {Math.round(props.dine)} % 
        </MDBProgress> <br />
        <h4>
        Shopping
      </h4>
        <MDBProgress material value={props.shop} height="60px" animated>
        {Math.round(props.shop)} % 
        </MDBProgress><br />
    </div>
    )
}

export default ProgressBars