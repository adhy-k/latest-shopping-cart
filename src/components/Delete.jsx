import React, { useState } from 'react'
import Navbar from './Navbar'

const Delete = () => {
    const [input, changeInput] = useState(
        {Delete:""}
    )
    const inputHandler=(event)=>{
        changeInput({...input,[event.target.name]:event.target.value})
    }
    const readInput=()=>{
        console.log(input)
    }
    return (
        <div>
            <Navbar />
            <div className="container">
                <div className="row">
                    <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div className="row g-3">
                            <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                                <label htmlFor="" className="form-label">Delete</label>
                                <input type="text" className="form-control" name='Delete' value={input.Delete} onChange={inputHandler} />

                            </div>
                            <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <button className="btn btn-danger" onClick={readInput}>Delete</button>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Delete