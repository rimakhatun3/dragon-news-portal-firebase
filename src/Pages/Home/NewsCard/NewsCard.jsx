import moment from 'moment';
import React from 'react';
import { Card } from 'react-bootstrap';
import { FaBookmark, FaEye, FaRegStar, FaShare, FaStar, FaStarHalf } from 'react-icons/fa';
import Rating from 'react-rating';
import { Link } from 'react-router-dom';

const NewsCard = ({news}) => {
    const {title,_id,details,thumbnail_url,image_url,author,rating,total_view} = news
    return (
        <Card >
        <Card.Header className='d-flex gap-2  align-items-center'>
        <Card.Img className='rounded-circle w-25  ' variant="bottom" src={author.img} />
        <div className='flex-grow-1'>
            <p>{author.name}</p>
            <p>{moment(author.published_date).format("YYYY, MMMM ,D ")}</p>
            
        </div>
        <div>
            <FaBookmark></FaBookmark>
            <FaShare></FaShare>
            </div>

        </Card.Header>
        
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Img variant="bottom" src={thumbnail_url} />
          <Card.Text>
            {details.length<250?details:details.slice(0,250)}...<Link to={`/news/${_id}`}>reademore</Link>
          </Card.Text>
          
        </Card.Body>
        <Card.Footer className="text-muted d-flex gap-2 align-items-center justify-content-center">
            
<div className='flex-grow-1  '>
<Rating placeholderRating={rating?.number}
readonly
  emptySymbol={<FaRegStar></FaRegStar>}
  placeholderSymbol={<FaStar className='text-warning'></FaStar>}
  fullSymbol={<FaStar></FaStar>}>

</Rating>
<span className='px-2'>{rating?.number}</span>
</div>
            
            {<div className='d-flex  align-items-center  gap-2'>
                <FaEye></FaEye>
                <div>
                <p>{total_view}</p>
                </div>
                </div>}
            </Card.Footer>
      </Card>
    );
};

export default NewsCard;