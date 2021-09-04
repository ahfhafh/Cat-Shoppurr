import React from 'react'
import { StarFill } from 'react-bootstrap-icons';
import { StarHalf } from 'react-bootstrap-icons';
import { Star } from 'react-bootstrap-icons';

export default function Rating(props) {
    const {rating, numReviews} = props;
    return (
        <div className="rating">
            <span>{rating >= 1?<StarFill/>: rating >=0.5?<StarHalf/>:<Star/>}</span>
            <span>{rating >= 2?<StarFill/>: rating >=1.5?<StarHalf/>:<Star/>}</span>
            <span>{rating >= 3?<StarFill/>: rating >=2.5?<StarHalf/>:<Star/>}</span>
            <span>{rating >= 4?<StarFill/>: rating >=3.5?<StarHalf/>:<Star/>}</span>
            <span>{rating >= 5?<StarFill/>: rating >=4.5?<StarHalf/>:<Star/>}</span>
            <span>{numReviews}</span>
        </div>
    )
}