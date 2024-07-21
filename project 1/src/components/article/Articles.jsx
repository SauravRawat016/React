import React, { useEffect, useState } from "react";
import Card from "../Card/Card.jsx";
import axios from 'axios' ;
import Grid from '@mui/material/Grid';

export default function Articles() {
    const [isLoading, setLoading] = useState(true);
    const [data , setData] = useState([]) ;
    useEffect(() => {
        axios.get("https://newsapi.org/v2/everything?q=india&apiKey=dc14f6bf3b96476d88efc6b06c455aba").then(response => {
          setData(response.data.articles);
          setLoading(false);
        });
      }, []);
      if (isLoading) {
        return (<h1> <center>Loading...</center></h1> );
      }
    
      return (

        <div className="py-16 px-10 bg-white">
            <div className="container m-auto px-10 text-gray-600 md:px-12 xl:px-6">
            <Grid container spacing={5} >
                    {data.map(article => {
                    return (<Card obj = {article} />)})}
            </Grid>
            </div>            
        </div>
      );
}


  