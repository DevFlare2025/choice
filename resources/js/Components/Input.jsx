const Input = ({
    label,
    name,
    onChange,
    required,
    type = "text",
    value,
    placeholder = "Type here",
    className = "",
}) => {
    return (
        <div className=" flex flex-col mb-2 bg-error w-96 ">
            {label && (
                <label htmlFor={name} className="text-gray-700 block mb-1">
                    {label}
                </label>
            )}
            <input
                type={type}
                id={name}
                name={name}
                onChange={onChange}
                required={required}
                value={value}
                placeholder={placeholder}
                className={`input input-bordered w-96  ${className}`}
            />
        </div>
    )
}

export default Input
