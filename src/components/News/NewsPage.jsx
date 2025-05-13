import { useEffect, useState } from "react";
import { fetchNews } from "../../utils/fetchNews";
import "./NewsPage.css";
import NewsList from "./NewsList";

export default function NewsPage() {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchNews()
      .then((data) => {
        setNews(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Ошибка при загрузке новостей:", error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="news__page" style={{ marginBottom: "100px" }}>
        Идёт загрузка новостей...
      </div>
    );
  }
  return (
    <div className="news__page">
      <h1 style={{ textTransform: "uppercase", marginBottom: "35px" }}>
        Новости
      </h1>
      <NewsList news={news} />
    </div>
  );
}
