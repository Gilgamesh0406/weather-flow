import * as React from "react";
import Grid from "@mui/material/Unstable_Grid2";

import { Typography } from "@mui/material";
export default function Detail({coutryInformation}) {
  
  return (
    <div style={{display: "contents"}}>
      <Grid xs={2}>
        <Typography variant="h5">Location</Typography>
      </Grid>
      <Grid xs={10}>
        <Typography>{coutryInformation.location}</Typography>
      </Grid>
      <Grid xs={2}>
        <Typography variant="h5">Temperature</Typography>
      </Grid>
      <Grid xs={10}>
        <Typography>{coutryInformation.temperature}</Typography>
      </Grid>
      <Grid xs={2}>
        <Typography variant="h5">Humidity</Typography>
      </Grid>
      <Grid xs={10}>
        <Typography>{coutryInformation.humidity}</Typography>
      </Grid>
      <Grid xs={2}>
        <Typography variant="h5">Condition</Typography>
      </Grid>
      <Grid xs={10}>
        <Typography>{coutryInformation.condition}</Typography>
      </Grid>
    </div>
  );
}
