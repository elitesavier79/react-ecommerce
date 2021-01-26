import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';


const useStyles = makeStyles((theme) => ({
	container: {
		marginTop: theme.spacing(2),
	},
	heading: {
		fontSize: theme.typography.pxToRem(15),
		fontWeight: theme.typography.fontWeightRegular,
	},

}))

const ProductInfoPanel = () => {
 const classes = useStyles()

 return (
 	<div className={classes.container}>
 		<ExpansionPanel>
 			<ExpansionPanelSummary expandIcon={<ExpandMoreIcon />} aria-control="panelia-content" id="panel1a-header">
 				<Typography className={classes.heading}>
 					product Info 1
 				</Typography>
 			</ExpansionPanelSummary>
 			<ExpansionPanelDetails>
 				<Typography>
 					Lorem Ipsum is simply dummy text of the printing and typesetting industry.
 				</Typography>
 			</ExpansionPanelDetails>
 		</ExpansionPanel>

 		<ExpansionPanel>
 			<ExpansionPanelSummary expandIcon={<ExpandMoreIcon />} aria-control="panelia-content" id="panel2a-header">
 				<Typography className={classes.heading}>
 					product Info 2
 				</Typography>
 			</ExpansionPanelSummary>
 			<ExpansionPanelDetails>
 				<Typography>
 					Lorem Ipsum is simply dummy text of the printing and typesetting industry.
 				</Typography>
 			</ExpansionPanelDetails>
 		</ExpansionPanel>

 		<ExpansionPanel>
 			<ExpansionPanelSummary expandIcon={<ExpandMoreIcon />} aria-control="panelia-content" id="panel3a-header">
 				<Typography className={classes.heading}>
 					product Info 3
 				</Typography>
 			</ExpansionPanelSummary>
 			<ExpansionPanelDetails>
 				<Typography>
 					Lorem Ipsum is simply dummy text of the printing and typesetting industry.
 				</Typography>
 			</ExpansionPanelDetails>
 		</ExpansionPanel>
 	</div>
 )
}


export default ProductInfoPanel;