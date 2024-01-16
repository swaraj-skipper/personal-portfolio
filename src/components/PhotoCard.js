import React from 'react'

export default function ArtCard({ img, desc }) {
    return (
        <>
            <div className="art-card photo-item">
                <img src={img} alt="Image" />
            </div>
        </>
    )
}
