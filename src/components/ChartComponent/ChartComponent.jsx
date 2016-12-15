import React, { Component } from 'react';
// flags, placeName
const RadarChart = require("react-chartjs").Radar;

const ChartComponent = React.createClass({
  render: function() {
    return <RadarChart data={{
    labels: ["Race", "Body", "Sexuality", "Gender", "Religion"],
    datasets: [
        {
            label: "My First dataset",
            backgroundColor: "rgba(179,181,198,0.2)",
            borderColor: "rgba(179,181,198,1)",
            pointBackgroundColor: "rgba(179,181,198,0.1)",
            pointBorderColor: "#fff",
            pointHoverBackgroundColor: "#fff",
            pointHoverBorderColor: "rgba(179,181,198,1)",
            data: [this.props.flags.Race, this.props.flags.Body, this.props.flags.Sexuality, this.props.flags.Gender, this.props.flags.Religion]
        }
    ]
}} height="200" width="200" redraw/>
  }
});

export default ChartComponent;
