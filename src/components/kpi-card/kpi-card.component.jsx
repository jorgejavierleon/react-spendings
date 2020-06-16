import React from "react";
import {
  Paper,
  CardContent,
  Typography,
  Chip,
  makeStyles,
} from "@material-ui/core";
import TrendingUpIcon from "@material-ui/icons/TrendingUp";
import TrendingDownIcon from "@material-ui/icons/TrendingDown";

const useStyles = makeStyles((theme) => ({
  card: {
    boxShadow: "0 0 14px 0 rgba(53,64,82,.05)",
    position: "relative",
    minHeight: "178px",
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  cardTittle: {
    marginBottom: "16px",
  },
  cardTotoal: {
    marginBottom: "16px",
  },
  percent: {
    display: "inline",
    paddingRight: "10px",
    paddingLeft: "8px",
    fontWeight: "700",
    fontSize: " 1.3rem",
  },
  success: {
    color: "rgb(76, 175, 80)",
  },
  chip: {
    position: "absolute",
    top: "23px",
    right: "16px",
    height: "20px",
    fontSize: "90%",
    backgroundColor: "rgb(30, 136, 229)",
    color: "rgb(255, 255, 255)",
    marginBottom: "16px",
    padding: "4px 0px",
  },
}));

const KpiCard = (props) => {
  const { title, value, percent, tag, badPerformance } = props;
  const classes = useStyles();
  return (
    <Paper className={classes.card}>
      <CardContent>
        <Typography variant="h6" className={classes.cardTittle}>
          {title}
        </Typography>
        {tag ? <Chip label={tag} className={classes.chip}></Chip> : ""}
        <Typography variant="h4" className={classes.cardTotoal}>
          {value}
        </Typography>
        {percent ? (
          <>
            {!badPerformance ? (
              <>
                {percent > 0 ? (
                  <TrendingUpIcon className={classes.success}></TrendingUpIcon>
                ) : (
                  <TrendingDownIcon
                    className={classes.success}
                  ></TrendingDownIcon>
                )}
                <Typography
                  variant="subtitle1"
                  className={`${classes.percent} ${classes.success}`}
                >
                  {percent}%
                </Typography>
              </>
            ) : (
              <>
                {percent > 0 ? (
                  <TrendingUpIcon color="secondary"></TrendingUpIcon>
                ) : (
                  <TrendingDownIcon color="secondary"></TrendingDownIcon>
                )}
                <Typography
                  variant="subtitle1"
                  color="secondary"
                  className={classes.percent}
                >
                  {percent}%
                </Typography>
              </>
            )}
          </>
        ) : null}
      </CardContent>
    </Paper>
  );
};

export default KpiCard;
