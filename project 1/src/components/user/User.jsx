import React from "react";
import { useParams } from "react-router-dom";
export default function User(){
    const {userId} = useParams() ;
    return (
        <>
        <h1 className="bg-green-600 text-center py-6 text-3xl">User {userId}</h1>
        </>
    )
}