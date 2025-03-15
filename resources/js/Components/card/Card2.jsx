import React from "react"

export default function Welcome({
    title,
    description,
    actionText,
    onActionClick,
    icon,
}) {
    return (
        <div className="max-w-3xl mx-auto mt-4">
            <div className="card border border-base-300 bg-base-100 shadow-lg">
                <div className="card-body">
                    <h2 className="text-xl font-semibold">{title}</h2>
                    <p className="mt-1.5 text-sm text-gray-600">
                        {description}
                    </p>
                </div>
                <div className="card-actions justify-end">
                    <button
                        className="btn btn-primary btn-sm"
                        onClick={onActionClick}>
                        {icon && <span className="mr-2">{icon}</span>}
                        {actionText}
                    </button>
                </div>
            </div>
        </div>
    )
}
