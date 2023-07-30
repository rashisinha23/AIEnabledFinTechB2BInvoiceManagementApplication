import React, { useEffect, useState } from 'react';
import Highcharts, { color } from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

const Analytics = ({ data ,inputValue}) => {
  const [chartData, setChartData] = useState([]);

  useEffect(() => {
    if (data.length > 0) {
      const filteredAmounts = data.map((row) => row.order_amount);
      setChartData(filteredAmounts);
    }
  }, [data]);

  const chartOptions = {
    chart: {
      type: 'column',
     
    },
    title: {
      text: 'Total Amount for Distribution Channel',
    },
    yAxis: {
      title: {
        text: 'Amount',
      },
      
    },
    series: [
      {
        name: inputValue,
        data: chartData,
      },
    ],
  };
  return (
    <div>
      <HighchartsReact highcharts={Highcharts} options={chartOptions} />
    </div>
  );
};

export default Analytics;