import React from 'react' 
import { MDBProgress } from 'mdbreact'

function ProgressBars(props) {
    console.log(props)
    return (
    <div>
        <MDBProgress material value={props.groc} height="20px" animated>
          Groceries
        </MDBProgress><br />
        <MDBProgress material value={props.trans} height="20px" animated>
          Transportation
        </MDBProgress> <br />
        <MDBProgress material value={props.dine} height="20px" animated>
          Dining
        </MDBProgress> <br />
        <MDBProgress material value={props.shop} height="20px" animated>
          Shopping
        </MDBProgress><br />
    </div>
    )
}

export default ProgressBars