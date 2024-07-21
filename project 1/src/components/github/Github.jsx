import React, { useEffect, useState } from "react";

export default function Github() {
    const [data , setData] = useState([]) ;
    useEffect( () => {
        fetch('https://api.github.com/users/sauravrawat016')
        .then(response => response.json())
        .then(data => {  console.log(data) ; setData(data) ; });
    } , [] )
    return (
        <>
        <h1 className="bg-green-600 text-center text-4xl py-6 my-5 "> Github Followers : {data['followers']}</h1>
        <a href=""> </a>
        </>
    )
}