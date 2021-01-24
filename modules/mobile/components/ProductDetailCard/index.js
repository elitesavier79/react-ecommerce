import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';

import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';

import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ProductRating from '@common/components/ProductRating';
import { currencyFormatter } from '@kurs/rupiah';

const useStyles = makeStyles((theme) => ({
	container:{
		marginBottom: theme.spacing(8)
	},
	media:{
		height:0,
		paddingTop: '56.25%',
	},
	productInfo:{
		marginTop: theme.spacing(2)
	},
  expand: {
    transform: 'rotate(0deg)',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)'
  },
}));

const ProductDetailCard = ({
  img,
  title,
  price,
  rating,
  sold,
  description,
  quantity,
  condition,
  weight,
  promo,
}) => {

const classes = useStyles();
const [expanded, setExpanded] = useState(true);

const handleExpandClick = () => {
  setExpanded(!expanded);
}

	return (
	<div className={classes.container}>
      <Card>
        <CardMedia
          className={classes.media}
          image={img}
          title={title}
        />
        <CardContent>
        	<Typography variant="h5" component="h1" gutterBottom>
        		{title}
        	</Typography>

        	<Grid container spacing={1}>
        		<Grid item xs={6} sm={6}>
        			<Typography variant="button" color="secondary">
        				{currencyFormatter(price)}
        			</Typography>
        		</Grid>
        		<Grid item xs={6} sm={6}>
        			<ProductRating rating={rating} sold={sold} alignRight />
           		</Grid>
        	</Grid>

        	<Grid container spacing={1} className={classes.productInfo}>
        		<Grid container direction="column" justify="center" item xs={3} sm={3}>
        			<Typography variant="overline" align="center">
        				Berat
        			</Typography>
        			<Typography variant="button" align="center">
        				{weight}
        			</Typography>
        		</Grid>

        		<Grid container direction="column" justify="center" item xs={3} sm={3}>
        			<Typography variant="overline" align="center">
        				Kondisi
        			</Typography>
        			<Typography variant="button" align="center">
        				{condition}
        			</Typography>
        		</Grid>

        		<Grid container direction="column" justify="center" item xs={3} sm={3}>
        			<Typography variant="overline" align="center">
        				Stock
        			</Typography>
        			<Typography variant="button" align="center">
        				{quantity}
        			</Typography>
        		</Grid>

        		<Grid container direction="column" justify="center" item xs={3} sm={3}>
        			<Typography variant="overline" align="center">
        				Terjual
        			</Typography>
        			<Typography variant="button" align="center">
        				{sold}
        			</Typography>
        		</Grid>
        	</Grid>
        </CardContent>
        <CardActions>
          <Grid container justify="center" alignItems="center">
            <IconButton 
                onClick={handleExpandClick}
                className={clsx(classes.expand, {
                  [classes.expandOpen]:expanded
                })}>
                <ExpandMoreIcon />
            </IconButton>
          </Grid>
        </CardActions>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>
            <Typography paragraph variant="subtitle2">
              Description
            </Typography>
            <Typography paragraph variant="body2">
              {description}
            </Typography>
          </CardContent>
        </Collapse>
      </Card>
	</div>
	)
}

ProductDetailCard.propTypes = {
  img: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  rating: PropTypes.number.isRequired,
  sold: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
  quantity: PropTypes.number.isRequired,
  condition: PropTypes.string.isRequired,
  weight: PropTypes.string.isRequired,
  promo: PropTypes.array.isRequired,
}


export default ProductDetailCard;""