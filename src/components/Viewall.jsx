import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Navbar from './Navbar'

const ViewAll = () => {




    const [cartData, changeData] = useState(

        { "products": [] }
    )

    const fetchData = () => {
        axios.get("https://dummyjson.com/products").then(
            (response) => {
                changeData({ products: response.data.products })

            }
        ).catch()
    }


    useEffect(() => { fetchData() }, [])

    return (
        <div>
            <Navbar />
            <br />
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div className="row g-3">
                            {
                                cartData.products.map(
                                    (value, index) => {
                                        return (<div className="col col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-3">

                                            <div class="card">
                                                <img src={value.images} class="card-img-top" alt="..." />
                                                    <div class="card-body">
                                                        <h5 class="card-title">{value.title}</h5>
                                                        <p class="card-text">{value.description}</p>
                                                        <a href="#" class="btn btn-primary">BUY NOW</a>
                                                    </div>
                                            </div>
                                        </div>)
                                    }
                                )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ViewAll