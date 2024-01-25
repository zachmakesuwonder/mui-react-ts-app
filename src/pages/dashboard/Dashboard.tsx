/*
 * ---------------------------------------------
 * Author: Isaac Mirabueno
 * Date: Wednesday January 24th 2024
 * Last Modified by: Isaac Mirabueno - <imirabueno@yondu.com>
 * Last Modified time: January 25th 2024, 8:30:08 pm
 * ---------------------------------------------
 */

import React from "react";
import { Box } from "@mui/material";
import DataRibbon from "@/components/Dashboard/DataRibbon";
import TransactionsPerDay from "@/components/Dashboard/TransactionsPerDay";
import TransactionBottomRow from "@/components/Dashboard/TransactionBottomRow";
import Grid from "@mui/material/Grid";

const Dashboard = () => {
  return (
    <Box>
      <Grid container gap={4} marginTop={2}>
        <DataRibbon />
        <TransactionsPerDay />
      </Grid>
      <TransactionBottomRow />
    </Box>
  );
};
export default Dashboard;