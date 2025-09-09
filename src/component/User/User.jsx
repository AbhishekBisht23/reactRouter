import React from "react";
import { useLoaderData, useParams } from "react-router-dom";
export default function User()
{
    const data = useLoaderData();
    return(
        <><div className="bg-gray-500 h-10 text-center flex justify-center items-center">Git Followers: {data.followers}</div>
        <div className="flex justify-center"><img src={data.avatar_url} alt="git_picture" /></div></>
    );
}
export const getUserInfo = async()=>{
    const response = await fetch('https://api.github.com/users/AbhishekBisht23')
    return response.json();
}