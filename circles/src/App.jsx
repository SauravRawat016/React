import './App.css'
import React from 'react';
import Circle from './components/Circle.jsx'
import Graph from './components/graph.jsx';
 
const arr = [
  {
      "date": "Sun, 11 Aug 2024 00:00:00 GMT",
      "river_discharge": 105.41429138183594
  },
  {
      "date": "Mon, 12 Aug 2024 00:00:00 GMT",
      "river_discharge": 59.534080505371094
  },
  {
      "date": "Tue, 13 Aug 2024 00:00:00 GMT",
      "river_discharge": 71.94575500488281
  },
  {
      "date": "Wed, 14 Aug 2024 00:00:00 GMT",
      "river_discharge": 58.020111083984375
  },
  {
      "date": "Thu, 15 Aug 2024 00:00:00 GMT",
      "river_discharge": 42.45102310180664
  },
  {
      "date": "Fri, 16 Aug 2024 00:00:00 GMT",
      "river_discharge": 37.54783248901367
  },
  {
      "date": "Sat, 17 Aug 2024 00:00:00 GMT",
      "river_discharge": 37.018943786621094
    }
] ;

const arr1 = [] ;

const App = () => {
  return (
    <>
    <Circle severity={2} probability = {0.51} population = {10000}/>
    <Graph para={arr}/>
    </>
  );
};

export default App;

    