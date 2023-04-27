import React from "react";
import { useLoaderData, useParams } from "react-router-dom";
import moment from "moment";
import { Button, Card, Image } from "react-bootstrap";
import {
  FaAngleLeft,
  FaEye,
  FaRegBookmark,
  FaRegStar,
  FaShareAlt,
  FaStar,
} from "react-icons/fa";
import Rating from "react-rating";
import { Link } from "react-router-dom";

function News() {
  const {id} = useParams()
  const singleNewsData = useLoaderData()
  console.log(singleNewsData);
  // console.log(news);
  const { image_url, details,title,category_id, } = singleNewsData;
  return (

    
    <Card className="mb-4">
      
      <Card.Body>
        <Card.Img className="mb-3" variant="top" src={image_url} />
        <Card.Title>{title}</Card.Title>
        <Card.Text>
          {details}
        </Card.Text>
        <Link to={`/category/${category_id}`} ><Button variant="danger" className="rounded-0" > <FaAngleLeft />  All news in this category</Button>
</Link>
      </Card.Body>
    </Card>
    
  );
}

export default News;
