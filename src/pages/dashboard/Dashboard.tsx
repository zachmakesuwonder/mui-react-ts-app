/*
 * ---------------------------------------------
 * Author: Isaac Mirabueno
 * Date: Wednesday January 24th 2024
 * Last Modified by: Isaac Mirabueno - <imirabueno@yondu.com>
 * Last Modified time: January 25th 2024, 4:58:03 pm
 * ---------------------------------------------
 */

import React from 'react';
import {Box, Grid, Paper} from "@mui/material";
import classes from './Dashboard.module.scss';

const Dashboard = () => {
    return (
        <Box>
            <Grid container gap={2} className={classes.topCardsContainer} >
                <Grid>
                    <Paper className={classes.dataCard}>xs=4</Paper>
                </Grid>
                <Grid>
                    <Paper className={classes.dataCard}>xs=4</Paper>
                </Grid>
                <Grid>
                    <Paper className={classes.dataCard}>xs=4</Paper>
                </Grid>
            </Grid>
            <Grid xs={12} marginY={2}>
                <Paper className={classes.dataCard}>xs=12</Paper>
            </Grid>
        </Box>
    )
}
export default Dashboard;