import { useEffect, useState } from "react";
import NewsCard from "./NewsCard";

const News = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    fetch(`http://127.0.0.1:3001/news`)
      .then((response) => response.json())
      .then((data) => {
        setNews(data);
      });
  }, []);

  return news.map((n) => <NewsCard {...n} />);
};

export default News;
