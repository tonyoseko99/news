// GET request for news articles from newsapi.org
router.get("/news", (req, res) => {
  const url = `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=${process.env.NEWS_API_KEY}`;
  axios
    .get(url)
    .then((response) => {
      res.json(response.data.articles);
    })
    .catch((error) => {
      res.send(error);
    });
});
