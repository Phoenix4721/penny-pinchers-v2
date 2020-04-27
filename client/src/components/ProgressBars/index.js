import React from 'react' 
import { MDBProgress } from 'mdbreact'

function ProgressBars(props) {
    console.log(props)
    return (
    
    <div>
      <h2>Percentage of Budget Used</h2><br />
        <MDBProgress material value={props.groc} height="60px" animated>
          Groceries
        </MDBProgress><br />
        <MDBProgress material value={props.trans} height="60px" animated>
          Transportation
        </MDBProgress> <br />
        <MDBProgress material value={props.dine} height="60px" animated>
          Dining
        </MDBProgress> <br />
        <MDBProgress material value={props.shop} height="60px" animated>
          Shopping
        </MDBProgress><br />
    </div>
    )
}

export default ProgressBars