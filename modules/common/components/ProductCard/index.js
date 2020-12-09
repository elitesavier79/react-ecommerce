import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import { makeStyles } from '@material-ui/core/styles';

import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

import PromoLabel from '@common/components/PromoLabel';

const useStyles = makeStyles({
	card:{
		maxWidth: 360
	},
	image: {
		height:140
	},
	price: {
		LineHeight: 'normal'
	},
	 relative: {
    position: 'relative'
  },
  promoLabel: {
    position: 'absolute',
    bottom: 6,
    left: 4,
  },
  price: {
    lineHeight: 'normal',
  }
});


const ProductCard = ({ img, title, promoLabel, price, rating, sold, productID }) => {
  const classes = useStyles();

	return (
		<card>
			<div className={classes.card}>
				  <div className={classes.relative}>
				  <CardMedia 
				  	className={classes.image}
				  	image={img}
				  	title={title}
				  />
				  	<div className={classes.promolabel}>
				  		<PromoLabel  promoLabel={promoLabel}/>
				  	</div>
				  </div>
				  <CardContent>
				  	<Grid container direction="column">
				  		<Typography gutterBottom variant="subtitle2" component="h2">
				  			{title}
				  		</Typography>
				  		<Typography variant="overline" className={classes.price}>
				  			{price}
				  		</Typography>
				  	</Grid>
				  </CardContent>
			</div>
		</card>

	)

}
ProductCard.propTypes = {
	img:PropTypes.string.isRequired,
	title:PropTypes.string.isRequired,
	promoLabel:PropTypes.array,
	price:PropTypes.number.isRequired,
	rating:PropTypes.number,
	sold:PropTypes.number,
	productID:PropTypes.number.isRequired
}



export default ProductCard;