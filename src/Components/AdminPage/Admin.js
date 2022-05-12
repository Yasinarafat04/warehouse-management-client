import React, { useEffect, useState } from 'react'
import { Area, AreaChart, CartesianGrid, Tooltip, XAxis, YAxis } from 'recharts'

const Admin = () => {
    const [data, setDate] = useState([])
    useEffect(() => {
        fetch('https://peaceful-waters-00676.herokuapp.com/product/')
            .then(res => res.json())
            .then(json => setDate(json))
    }, [])
    console.log(data)
    return (
        <div className='container'>
            <h1 className='text-center py-5 text-success'>Product Anylisis</h1>
            <AreaChart width={1030} height={500} data={data}
                margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                <defs>
                    <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
                        <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
                    </linearGradient>
                    <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
                        <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
                    </linearGradient>
                </defs>
                <XAxis dataKey="price" />
                <YAxis />
                <CartesianGrid strokeDasharray="3 3" />
                <Tooltip />
                <Area type="monotone" dataKey="name" stroke="#82ca9d" fillOpacity={1} fill="url(#colorPv)" />
                <Area type="monotone" dataKey="quantity" stroke="#8884d8" fillOpacity={1} fill="url(#colorUv)" />
                <Area type="monotone" dataKey="price" stroke="#8884d8" fillOpacity={1} fill="url(#colorUv)" />
            </AreaChart>
        </div>
    )
}

export default Admin