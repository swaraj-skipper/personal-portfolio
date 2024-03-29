import React from 'react'

export default function ArtCard({ img, desc }) {
    return (
        <>
            <div className="art-card photo-item art-imgbx">
                <img src={img} alt="Image" />
                <div className="art-txtx">
                    <span>{desc}</span>
                </div>
            </div>
        </>
    )
}
