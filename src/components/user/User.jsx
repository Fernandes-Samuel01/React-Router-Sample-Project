import React from "react";
import { useParams } from "react-router-dom";

export default function User() {

    const { userId } = useParams()

    return (
        <div className="flex justify-center items-center min-h-screen">
            <div className="w-60 h-60 rounded-xl bg-white shadow-lg flex flex-col m-5">
                <img
                    src="https://media1.giphy.com/media/z8n8dWgQ0mgEIyzlmV/giphy.gif?cid=790b7611a5ba988db1bc7457636dd163c28af6f6dbc84a77&rid=giphy.gif&ct=g"
                    alt="Giphy"
                    className="rounded-t-xl w-full h-40 object-cover"
                />
                <div className="glass flex justify-center items-center py-4 px-5 rounded-b-xl">
                    <h1 className="font-bold font-mono text-xl text-center">{userId}</h1>
                </div>
            </div>
        </div>

    )
}

