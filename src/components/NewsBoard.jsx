/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import NewsItem from "./NewsItem";

const NewsBoard = ({ category }) => {
  const [articles, setArticles] = useState([]);
  useEffect(() => {
    let url = `https://newsapi.org/v2/top-headlines?country=eg&category=${category}&apiKey=${
      import.meta.env.VITE_API_KEY
    }`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        // console.log(data.articles);
        setArticles(data.articles);
      });
  }, [category]);
  if (articles.length > 0) {
    return (
      <div className="container-fluid">
        <h2 className="text-center my-3 fw-bold">
          Latest <span className="badge bg-danger">News</span>
        </h2>
        <div className="d-flex flex-wrap justify-content-center">
          {articles.map((news, index) => {
            return (
              <NewsItem
                key={index}
                title={news.title}
                src={news.urlToImage}
                description={news.description}
                url={news.url}
                author={news.author}
              />
            );
          })}
        </div>
      </div>
    );
  } else {
    return (
      <div className="spinner-border text-primary" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    );
  }
};

export default NewsBoard;
