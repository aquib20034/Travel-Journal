import React from 'react';
import './Card.css'

import star from '../images/map.png';
export default function Card(props){
    return(
        <>
        <div className='card'>
            <img src={props.imageUrl}  className="card--image" />

            
            <div className='card-block'>
                <div className='card-loc-bar'>
                    <img src={star} className="card--star" />
                    <span className='card--country'>{props.location.toUpperCase() }</span>
                    <a href="{props.googleMapsUrl}" className='card--loc'>View on Google Maps</a>
                </div>
                
                <h1>{props.title}</h1>
                
                
                <span className='card--date'>{props.startDate} - {props.endDate}</span><br />
                
                <span className='card--description'>{props.description}</span>

            </div>
            
        </div>
        <hr className='card--hr'/>
        </>
    )
}