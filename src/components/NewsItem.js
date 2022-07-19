import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";

const NewsItem = (props) => {
  let { title, description, imageUrl, newsUrl, author, date, source,darkMode } = props;
  return (
    <>
      <Card sx={{
  margin: "5px",
  backgroundColor:`${darkMode ? "#9FA4C4":"#ffffff"}` 
}}
      >
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            image={
              !imageUrl
                ? "https://fdn.gsmarena.com/imgroot/news/21/08/xiaomi-smart-home-india-annoucnements/-476x249w4/gsmarena_00.jpg"
                : imageUrl
            }
            alt="green iguana"
          />
          <CardContent>
            <span className="badge bg-dark"> {source} </span>
            <Typography gutterBottom variant="h5" component="div">
              {title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {description}
            </Typography>
            <Typography variant="body2">
              By {!author ? "Unknown" : author} on{" "}
              {new Date(date).toGMTString()}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <a href={newsUrl} target="_blank" rel="noopener noreferrer">
            <Button size="small" color="secondary" variant="contained">
              Read More
            </Button>
          </a>
        </CardActions>
      </Card>
    </>
  );
};

export default NewsItem;
