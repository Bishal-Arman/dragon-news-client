import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import Image from "react-bootstrap/Image";
import { FaBookmark, FaShareAlt, FaStar, FaEye } from "react-icons/fa";

const NewsSummaryCard = ({ news }) => {
  const { details, _id, title, image_url, author, rating, total_view } = news;
  // console.log(news);
  return (
    <div>
      <Card className="mb-5">
        <Card.Header>
          <div className="d-flex justify-content-between  align-items-center">
            <div className="d-flex justify-content-center align-items-center">
              <Image
                style={{ height: "60px" }}
                roundedCircle
                src={author.img}
              ></Image>
              <div className="pt-3 ps-2">
                <p className="mb-0">{author.name}</p>
                <p className="">{author?.published_date}</p>
              </div>
            </div>
            <div>
              <FaBookmark className="me-2"></FaBookmark>
              <FaShareAlt></FaShareAlt>
            </div>
          </div>
        </Card.Header>
        <Card.Img src={image_url} alt="Card image" />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>
            {details?.length > 250 ? (
              <>
                {details.slice(0, 250) + "..."}
                <Link to={`/news/${_id}`}>Read More</Link>
              </>
            ) : (
              <>{details}</>
            )}
          </Card.Text>
        </Card.Body>
        <Card.Footer className="d-flex justify-content-between  align-items-center">
          <div className="d-flex  justify-content-center  align-items-center">
            <FaStar className="text-warning me-2"></FaStar>
            <span>{rating?.number}</span>
          </div>
          <div className="d-flex justify-content-center   align-items-center">
            <FaEye className="me-2"></FaEye>
            <span>{total_view}</span>
          </div>
        </Card.Footer>
      </Card>
    </div>
  );
};

export default NewsSummaryCard;
