import React from "react";
import { Card } from "antd";

const { Meta } = Card;

export const CardComponent = ({ article }) => (
  <Card
    style={{ width: 300, margin: "20px" }}
    cover={<img alt={article.title} src={article.urlToImage} />}
  >
    {console.log("article in child", article)}
    <Meta title={article.title} description={article.description} />
    <div style={{ marginTop: "auto", textAlign: "right", alignSelf: "end" }}>
      <p>
        <strong>Author:</strong> {article.author}
      </p>
      <p>
        <strong>Published At:</strong> {article.publishedAt}
      </p>
      <p>
        <strong>Source:</strong> {article.source}
      </p>
      <a href={article.url} target="_blank" rel="noopener noreferrer">
        Read More
      </a>
    </div>
  </Card>
);
