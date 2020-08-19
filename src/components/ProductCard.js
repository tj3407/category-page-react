import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import PropTypes from "prop-types";
import { Typography } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    maxHeight: 450,
    minHeight: 100,
    width: "80%",
    margin: "20px auto",
  },
  categoryImage: {
    objectFit: "scale-down",
  },
  cardAction: {
    justifyContent: "center",
  }
});

function ProductCard(props) {
  const classes = useStyles();

  return (
    <Grid item xs={12} sm={6} md={4}>
      <Card className={classes.root} elevation={0}>
        <CardActionArea>
          <CardMedia
            className={classes.categoryImage}
            component="img"
            alt={props.description}
            height="253"
            image={`${process.env.PUBLIC_URL}${props.image}`}
            title={props.description}
          />
          <CardContent>
            <Typography variant="h6">{props.description}</Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Grid>
  );
}

export default ProductCard;

ProductCard.propTypes = {
  description: PropTypes.string,
  image: PropTypes.string,
};
