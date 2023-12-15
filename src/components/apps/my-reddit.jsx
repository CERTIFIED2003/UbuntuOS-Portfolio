import React from 'react'

export default function MyReddit() {
    return (
        <iframe src="https://r-clone.vercel.app" frameBorder="0" title="My Reddit" className="h-full w-full bg-ub-cool-grey"></iframe>
    )
}

export const displayMyReddit = () => {
    <MyReddit> </MyReddit>
}
