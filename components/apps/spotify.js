import React from 'react'

export default function Spotify() {
    return (
        <>
        <iframe src="https://open.spotify.com/embed/playlist/0WRYlRS9wHe2SuRELgJkPZ" title="Spotify" className="h-full w-full bg-ub-cool-grey"></iframe>
        <iframe src="https://open.spotify.com/embed/playlist/37i9dQZF1EVKuMoAJjoTIw" className="h-full w-full"></iframe>
        <iframe src="https://open.spotify.com/embed/playlist/37i9dQZF1DX76Wlfdnj7AP" className="h-full w-full"></iframe>
        </>
    )
}

export const displaySpotify = () => {
    <Spotify> </Spotify>
}
