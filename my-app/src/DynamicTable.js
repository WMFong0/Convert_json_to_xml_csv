import React from 'react'

const DynamicTable = ({data}) =>{
    if (!data || data.length == 0){
        return (
            <p>I got Nothing to show you. <br /> Maybe you forgot to do something?</p>
        )
    }

    const columns = Object.keys(data[0])
    
    return (
        <table>
            <thead>
                <tr>
                    {columns.map((header)=>(
                        <th key = {header}>
                            {header.charAt(0).toUpperCase()+header.slice(1)} {/* Auto Cap Headers */}
                        </th>
                    ))}
                </tr>
            </thead>
            <tbody>
                {data.map((row, index) => (
                <tr key={row.id || index}> 
                    {columns.map((column) => (
                    <td 
                        key={column} 
                    >
                        {row[column]}
                    </td>
                    ))}
                </tr>
                ))}
            </tbody>
        </table>
    )
}

export default DynamicTable