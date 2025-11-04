import React, { useEffect, useState } from "react";

export default function Github(){
    const [data, setData] = useState([])
    useEffect(() => {
        fetch('https://api.github.com/users/Fernandes-Samuel01')
        .then((res) => res.json())
        .then((data) => setData(data))
    }, [])
  return (
    <div className="min-h-screen flex justify-center items-center text-4xl bg-black text-amber-200">Github Account Followers of {data.name}: {data.followers}</div>
  )
}
    