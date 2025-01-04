import React from "react"

export default function DynamicTable({ rows, columns, columnNames = [] }) {
    return (
        <div className="overflow-x-auto">
            <table className="min-w-full border-collapse border border-gray-300">
                <thead>
                    <tr>
                        {Array.from({ length: columns }, (_, colIndex) => (
                            <th
                                key={colIndex}
                                className="border border-gray-300 px-4 py-2 text-left text-gray-600">
                                {columnNames[colIndex] ||
                                    `Columna ${colIndex + 1}`}
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {Array.from({ length: rows }, (_, rowIndex) => (
                        <tr key={rowIndex}>
                            {Array.from({ length: columns }, (_, colIndex) => (
                                <td
                                    key={colIndex}
                                    className="border border-gray-300 px-4 py-2">
                                    Fila {rowIndex + 1}, Col {colIndex + 1}
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}
