export default function PrimaryButton({
    className = "",
    disabled,
    children,
    ...props
}) {
    return (
        <button
            {...props}
            className={
                `inline-flex items-center rounded-md border  bg-sky-600
             px-5 py-2 text-sm font-semibold uppercase tracking-widest text-white  hover:bg-sky-500  ${
                 disabled && "opacity-25"
             } ` + className
            }
            disabled={disabled}>
            {children}
        </button>
    )
}
