import React from 'react'

export default function Drawing() {
    return (
        <iframe src="https://my-drawing.vercel.app" frameBorder="0" title="ToDo App" className="h-full w-full bg-ub-cool-grey"></iframe>
    )
}

export const displayDrawingApp = () => {
    <Drawing> </Drawing>
}
