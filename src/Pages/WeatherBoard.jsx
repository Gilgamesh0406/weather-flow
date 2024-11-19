import Box from "@mui/material/Box";
import Grid from "@mui/material/Unstable_Grid2";
import Detail from "../Containers/Detail/Detail.js";
import List from "../Containers/WeatherList/List.js";
import SearchInput from "../Containers/Search/SearchInput.js";
import { Typography } from "@mui/material";
import React, { useCallback, useState } from "react";
export default function WeatherBoard() {
  const [coutryInformation, setCountryInformation] = useState(null);
  const setFunc = useCallback((data) => {
    setCountryInformation(data);
  }, []);
  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2} mx={4} my={3}>
          <Grid xs={12}>
            <SearchInput setFunc={setFunc} />
          </Grid>
          {coutryInformation === null ? (
            <>
              <Grid xs={12}>
                <Typography variant="h5">No fetching data</Typography>
              </Grid>
            </>
          ) : (
            <Detail coutryInformation={coutryInformation} />
          )}
          <List />
        </Grid>
      </Box>
    </div>
  );
}
