import React from "react";
import { makeStyles, Container, Divider } from "@material-ui/core";
import Header from "../../components/header/header.component";
import HomepageHeader from "../../components/homepage-header/homepage-header.component";
import HomepageKpiCards from "../../components/homepage-kpi-cards/homepage-kpi-cards.component";

const useStyles = makeStyles((theme) => ({
  wrapper: {
    flexGrow: 1,
    height: "100vh",
    overflow: "auto",
    padding: "40px",
    background: "rgb(247, 249, 252)",
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  divider: {
    marginBottom: "24px",
    marginTop: "24px",
  },
}));

const HomePage = () => {
  const classes = useStyles();

  return (
    <>
      <Header />
      <main className={classes.wrapper}>
        <Container>
          <HomepageHeader></HomepageHeader>
          <Divider className={classes.divider} />
          <HomepageKpiCards></HomepageKpiCards>
        </Container>
      </main>
    </>
  );
};

export default HomePage;
