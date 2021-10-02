import React from 'react';
import {Grid} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
	},
}));

export default function BasicComponent() {

	return (
		<Grid container item>
			Basic component
		</Grid>
	);
};
