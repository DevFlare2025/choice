import React from "react"

export default function MiCard({
    title,
    description,
    actionText,
    onActionClick,
    icon,
}) {
    return (
        <div className="max-w-sm mx-auto my-4 mt-2">
            <div className="card border border-base-300 bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="card-title">{title}</h2>
                    <p className="text-sm text-gray-500">{description}</p>
                </div>
                <div className="card-actions justify-center p-5">
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
