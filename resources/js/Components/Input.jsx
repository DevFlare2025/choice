const Input = ({
    label,
    name,
    onChange,
    required,
    type = "text",
    value,
    placeholder,
    className,
}) => {
    return (
        <div className="flex flex-col mb-4">
            <label htmlFor={name} className="text-gray-700 block mb-1">
                {label}
            </label>
            <input
                type={type}
                id={name}
                name={name}
                onChange={onChange}
                required={required}
                value={value}
                placeholder={placeholder}
                className={`w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 ${className}`}
            />
        </div>
    )
}

export default Input
