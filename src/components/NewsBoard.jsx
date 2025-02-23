import React, { useEffect, useState } from "react";
import NewsItem from "./NewsItem";

const NewsBoard = ({ category }) => {
  const [articles, setArticles] = useState([]);
  const apiKey = process.env.REACT_APP_NEWS_API_KEY; // Import from .env

  useEffect(() => {
    const fetchNews = async () => {
      try {
        let url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${apiKey}`;
        let res = await fetch(url);
        let data = await res.json();
        setArticles(data.articles || []);
      } catch (error) {
        console.error("Error fetching news:", error);
      }
    };

    fetchNews();
  }, [category, apiKey]);

  return (
    <div>
      <h2 className="text-center">
        Latest <span className="badge bg-danger">News {category}</span>
      </h2>
      {articles.length > 0 ? (
        articles.map((news, index) => (
          <NewsItem
            key={index}
            title={news.title}
            description={news.description}
            src={news.urlToImage}
            url={news.url}
          />
        ))
      ) : (
        <p className="text-center">No news available</p>
      )}
    </div>
  );
};

export default NewsBoard;
