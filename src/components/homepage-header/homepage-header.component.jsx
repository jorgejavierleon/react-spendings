import React from "react";
import { Typography, Grid, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import AutorenewOutlinedIcon from "@material-ui/icons/AutorenewOutlined";
import SelectDateRange from "../../components/select-daterange/select-daterange.component";

const useStyles = makeStyles((theme) => ({
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    letterSpacing: "2px",
  },
  welcome: {
    fontSize: "1.8rem",
    marginRight: "12px",
  },
}));

const HomepageHeader = () => {
  const classes = useStyles();
  return (
    <>
      <Grid container spacing={4} justify="space-between" alignItems="center">
        <Grid item>
          <Typography variant="h5" display="inline" className={classes.welcome}>
            Bienvenido Javier
          </Typography>
          <Typography variant="body1" display="inline">
            Lunes, 07 de junio
          </Typography>
        </Grid>
        <Grid item>
          <Button size="small" display="inline">
            <AutorenewOutlinedIcon />
          </Button>
          <SelectDateRange></SelectDateRange>
        </Grid>
      </Grid>
    </>
  );
};

export default HomepageHeader;
