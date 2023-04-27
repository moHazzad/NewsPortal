import moment from "moment";
import React from "react";
import { Card, Image } from "react-bootstrap";
import {
  FaEye,
  FaRegBookmark,
  FaRegStar,
  FaShareAlt,
  FaStar,
} from "react-icons/fa";
import Rating from "react-rating";
import { Link } from "react-router-dom";

function NewsCard({news}) {
    const { image_url, details, rating, title, total_view, _id, author } = news;
  return (
    <Card className="mb-4">
      <Card.Header>
        <div className="d-flex gap-2 align-items-center  ">
          <Image style={{ height: "45px" }} src={author?.img} roundedCircle />
          <div className="flex-grow-1">
            <p className="m-0 fw-bold ">{author?.name}</p>
            <p>{moment(author?.published_date).format("YYYY MM DD")}</p>
          </div>
          <div>
            <FaRegBookmark />
            <FaShareAlt />
          </div>
        </div>
      </Card.Header>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Img variant="top" src={image_url} />
        <Card.Text>
          {details.length < 250 ? (
            details
          ) : (
            <>
              {details.slice(0, 250)}...{" "}
              <Link to={`/news/${_id}`}> Read More </Link>
            </>
          )}
        </Card.Text>
        <hr className="hr" />
        <div className="d-flex align-items-center ">
          <div className="flex-grow-1 " >

            <Rating
              placeholderRating={rating.number}
              readonly
              emptySymbol={<FaRegStar />}
              placeholderSymbol={ <FaStar className="text-warning" />}
              fullSymbol={<FaStar />}
              />
              {/* <span className="ms-2">{rating.number}</span> */}
          
              </div>
          
          <div>

          <FaEye className="me-2" />
          {total_view}
          </div>
          
        </div>
      </Card.Body>
    </Card>
  )
}

export default NewsCard