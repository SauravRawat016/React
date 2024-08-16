import * as React from 'react';
import { LineChart } from '@mui/x-charts/LineChart';

export default function Graph({para}) {
    const data = para ;
    let x = [] ;
    let y = [] ;
    for(let i = 0 ; i < data.length ; i++){
        x.push(i) ;
        y.push(data[i]['river_discharge'])
    }
  return (
    <LineChart
      xAxis={[{ data: x } ]}
      series={[{data: y,} ]}
      width={500}
      height={300}
    />
  );
}
