import React from 'react'
import { StarFill } from 'react-bootstrap-icons';
import { StarHalf } from 'react-bootstrap-icons';
import { Star } from 'react-bootstrap-icons';

export default function Rating(props) {
    const {rating, numReviews} = props;
    return (
        <div className="rating">
            { rating >= 1?<StarFill/>: rating >=0.5?<StarHalf/>:<Star/>}
            { rating >= 2?<StarFill/>: rating >=1.5?<StarHalf/>:<Star/>}
            { rating >= 3?<StarFill/>: rating >=2.5?<StarHalf/>:<Star/>}
            { rating >= 4?<StarFill/>: rating >=3.5?<StarHalf/>:<Star/>}
            { rating >= 5?<StarFill/>: rating >=4.5?<StarHalf/>:<Star/>}
            {numReviews + ' reviews'}
        </div>
    )
}