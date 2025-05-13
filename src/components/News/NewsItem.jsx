import "./NewsItem.css";

export default function NewsItem({ news }) {
  const { title, date, image, content } = news;

  return (
    <div className="news-item">
      <img src={image} alt={title} className="news-image" />
      <h2 className="news-title">{title}</h2>
      <p className="news-content">
        {content.length > 120 ? content.slice(0, 120) + "..." : content}
      </p>
      <p className="news-date">{date}</p>
    </div>
  );
}
