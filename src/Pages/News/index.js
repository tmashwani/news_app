import React, { useEffect, useState } from "react";
import { CardComponent } from "../../Components/NewsCard";
import { Spin, Input, Select } from "antd";
import "./style.css";
import axios from "axios";

const News = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTextt, setSearchTextt] = useState("");
  const [searchFilter, setSearchFilter] = useState("");
  const { Option } = Select;
  useEffect(() => {
    const fetchData = async () => {
      try {
        const responses = await Promise.all([
          axios.get(
            "https://api.nytimes.com/svc/mostpopular/v2/emailed/7.json?api-key=40fLFmoZEklCBNbxSvHZ734nX8AEtc2h"
          ),
          axios.get(
            "https://newsapi.org/v2/everything?q=apple&from=2024-04-17&to=2024-04-17&sortBy=popularity&apiKey=9ad59ea45af14729a546f0a7ca3fd087"
          ),
          //   axios.get('https://api.newscred.org/articles', {
          //       params: {
          //           apiKey: 'YOUR_NEWSCRED_API_KEY',
          //           topics: 'world',
          //           pageSize: 10
          //       }
          //   })
        ]);
        const nyTimesArticles = responses[0].data.results.map((article) => ({
          title: article.title,
          description: article.abstract,
          urlToImage: article.media[0]["media-metadata"][2].url,
          url: article.url,
          author: article.byline,
          publishedAt: article.published_date,
          source: article.source,
        }));

        const newsApiArticles = responses[1].data.articles.map((article) => ({
          title: article.title,
          description: article.description,
          urlToImage: article.urlToImage,
          url: article.url,
          author: article.author,
          publishedAt: article.publishedAt,
          source: article.source.name,
        }));

        const combinedArticles = [...nyTimesArticles, ...newsApiArticles];
        setArticles(combinedArticles);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching articles:", error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);
  const filterData = () => {
    return articles.filter((record) => {
      switch (searchFilter) {
        case "author":
          return (
            record.author &&
            record.author
              .toString()
              .toLowerCase()
              .includes(searchTextt.toLowerCase())
          );
        case "title":
          return (
            record.title &&
            record.title
              .toString()
              .toLowerCase()
              .includes(searchTextt.toLowerCase())
          );
        case "publishedAt":
          return (
            record.publishedAt &&
            record.publishedAt
              .toString()
              .toLowerCase()
              .includes(searchTextt.toLowerCase())
          );
        case "source":
          return (
            record.source &&
            record.source
              .toString()
              .toLowerCase()
              .includes(searchTextt.toLowerCase())
          );
        default:
          return false;
      }
    });
  };
  const filteredData = searchTextt ? filterData() : articles;
  const searchChange = (data) => {
    setSearchFilter(data);
    console.log("data", data);
  };
  const placeholder =
    searchFilter === "title"
      ? "Search By News Title..."
      : searchFilter === "author"
      ? "Search By News Author..."
      : searchFilter === "publishedAt"
      ? "Search By News Published Date..."
      : searchFilter === "source"
      ? "Search by News Source..."
      : "Select Search Type First";
  return (
    <>
      <h1 className="text_center">Enjoy Daily Top - Headlines</h1>
      <Select
        style={{ width: "20vw" }}
        placeholder="Search By"
        onChange={(e) => searchChange(e)}
        allowClear={true}
      >
        <Option value="title"> Title </Option>
        <Option value="author"> Author </Option>
        <Option value="publishedAt"> Publishe Date </Option>
        <Option value="source"> Source </Option>
      </Select>
      <Input.Search
        disabled={!searchFilter}
        style={{ width: "20%", margin: "0px 10px " }}
        placeholder={placeholder}
        onChange={(e) => setSearchTextt(e.target.value)}
      />
      <Spin spinning={loading}>
        <div className="main_div">
          {filteredData &&
            filteredData.map((article, index) => (
              <CardComponent key={index} article={article} />
            ))}
        </div>
      </Spin>
    </>
  );
};

export default News;
