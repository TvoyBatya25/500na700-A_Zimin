export const fetchNews = async () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      fetch("/data/news.json")
        .then((response) => response.json())
        .then((data) => resolve(data));
    }, 1000);
  });
};
