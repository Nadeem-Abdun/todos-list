import React from 'react'

export default function CustomRequest() {
    return (
        <div className='container my-3 custom_request'>
            <div className="mb-3">
            <label htmlFor="exampleFormControlInput1" className="form-label">Your Email address</label>
            <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
        </div>
            <div className="mb-3">
                <label htmlFor="exampleFormControlTextarea1" className="form-label">Your Request Here</label>
                <textarea className="form-control" id="exampleFormControlTextarea1" rows="9"></textarea>
            </div>
            <button className="btn btn-success">Submit</button>
        </div>
    )
}
