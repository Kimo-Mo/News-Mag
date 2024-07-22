/* eslint-disable react/prop-types */
import image from "../assets/news.jpg";

const NewsItem = ({ title, src, description, url, author }) => {
  return (
    <div
      className="card text-end bg-dark text-light my-3 mx-2 p-2"
      style={{ maxWidth: "320px" }}>
      <img
        src={src ? src : image}
        style={{ maxHeight: "200px", maxWidth: "350px" }}
        className="card-img-top"
        alt="News image"
      />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{description}</p>
        <p className="card-text text-warning">{author}</p>
        <a href={url} className="btn btn-primary" target="_blank">
          Read More
        </a>
      </div>
    </div>
  );
};

export default NewsItem;
