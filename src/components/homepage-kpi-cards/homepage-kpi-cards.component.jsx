import React from "react";
import { Grid } from "@material-ui/core";
import KpiCard from "../kpi-card/kpi-card.component";

const HomepageKpiCards = () => {
  return (
    <Grid container justify="space-between" spacing={6}>
      <Grid item xs={12} sm={6} lg={3} xl={3}>
        <KpiCard
          title="Gasto Total"
          value="$ 226.456"
          percent="-25"
          badPerformance={false}
          tag="En presupuesto"
        ></KpiCard>
      </Grid>
      <Grid item xs={12} sm={6} lg={3} xl={3}>
        <KpiCard
          title="Transacciones"
          value="8"
          percent="4"
          badPerformance={true}
        ></KpiCard>
      </Grid>
      <Grid item xs={12} sm={6} lg={3} xl={3}>
        <KpiCard
          title="Promedio"
          value="$ 28.307"
          percent="17"
          badPerformance={true}
        ></KpiCard>
      </Grid>
      <Grid item xs={12} sm={6} lg={3} xl={3}>
        <KpiCard
          title="Balance"
          value="$ 1.200.307"
          percent="12"
          badPerformance={false}
          tag="En presupuesto"
        ></KpiCard>
      </Grid>
    </Grid>
  );
};

export default HomepageKpiCards;
