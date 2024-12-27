import React from "react"

export default function Select({
    options,
    label,
    value,
    onChange,
    className = "",
    ...props
}) {
    return (
        <div className={`flex flex-col ${className}`} {...props}>
            {label && <label className="text-gray-700 mb-2">{label}</label>}
            <select
                value={value}
                onChange={onChange}
                className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500">
                {options.map((option, index) => (
                    <option key={index} value={option.value}>
                        {option.label}
                    </option>
                ))}
            </select>
        </div>
    )
}
