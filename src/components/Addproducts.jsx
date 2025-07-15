import React, { useState } from 'react'
import Navbar from './Navbar'

const Addproducts = () => {

    const [input, changeInput] = useState(
        { ProductTitle: "", Category: "", Description: "", Price: "", Discount: "", Rating: "", Stock: "", Branch: "", Weight: "" }
    )

    const inputHandler=(event)=>{
        changeInput({...input,[event.target.name]:event.target.value})
    }

    const readValue=()=>{
        console.log(input)
    }

    return (
        <div>
            <Navbar />
            <div className="container">
                <div className="row">
                    <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div className="row g-3">
                            <div className="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                                <label htmlFor="" className="form-label">Product Title</label>
                                <input type="text" className="form-control" name='ProductTitle' value={input.ProductTitle} onChange={inputHandler} />

                            </div>
                            <div className="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                                <label htmlFor="" className="form-label">Category</label>
                                <input type="text" className="form-control" name='Category' value={input.Category} onChange={inputHandler}/>

                            </div>
                            <div className="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                                <label htmlFor="" className="form-label">Description</label>
                                <textarea name="Description" id="" className="form-control" value={input.Description} onChange={inputHandler}></textarea>

                            </div>
                            <div className="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                                <label htmlFor="" className="form-label">Price</label>
                                <input type="text" className="form-control" name='Price' value={input.Price} onChange={inputHandler}/>

                            </div>
                            <div className="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                                <label htmlFor="" className="form-label">Discount</label>
                                <input type="text" className="form-control" name='Discount' value={input.Discount} onChange={inputHandler}/>

                            </div>
                            <div className="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                                <label htmlFor="" className="form-label">Rating</label>
                                <input type="text" className="form-control" name='Rating' value={input.Rating} onChange={inputHandler}/>

                            </div>
                            <div className="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                                <label htmlFor="" className="form-label">Stock</label>
                                <input type="text" className="form-control" name='Stock' value={input.Stock} onChange={inputHandler}/>

                            </div>
                            <div className="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                                <label htmlFor="" className="form-label">Branch</label>
                                <input type="text" className="form-control" name='Branch' value={input.Branch} onChange={inputHandler}/>

                            </div>
                            <div className="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                                <label htmlFor="" className="form-label">Weight</label>
                                <input type="text" className="form-control" name='Weight' value={input.Weight} onChange={inputHandler}/>

                            </div>
                            <div className="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                                <button className="btn btn-primary" onClick={readValue}>Submit</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Addproducts