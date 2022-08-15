import React from 'react'
import { NavLink } from 'react-router-dom';
//import web from "../src/images/img.png";
//import Sdata from './Sdata';
const Card = (p) => {
    return (
        <>

            <div className='col-md-4 col-10 mx-auto'>
                <div className="card">
                    <img src={p.imgsrc} className="card-img-top" alt={p.imgsrc} />
                    <div className="card-body">
                        <h5 className="card-title font-weight-bold">{p.title}</h5>
                        <p className="card-text">
                        Some quick example text bulk of the card's content.</p>
                        <NavLink to="" className="btn btn-primary">Go somewhere</NavLink>
                    </div>
                </div>
            </div>


        </>
    )
}

export default Card;
