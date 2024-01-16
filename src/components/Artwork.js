import React from 'react'
import ArtCard from './ArtCard'
import ait from "../assets/arts/ait.jpg"
import attacktitan from "../assets/arts/attacktitan.jpg"
import birb from "../assets/arts/birb.jpg"
import fam from "../assets/arts/fam.jpg"
import rengoku from "../assets/arts/final.jpg"
import ganeshji from "../assets/arts/ganeshji.jpg"
import gojo from "../assets/arts/gojo.jpg"
import jellalxerza from "../assets/arts/jellalxerza.jpg"
import kid from "../assets/arts/kid.jpg"
import levi from "../assets/arts/levi.jpg"
import luffy from "../assets/arts/luffy.jpg"
import maidsama from "../assets/arts/maidsama.jpg"
import ms from "../assets/arts/ms-intern.jpg"
import natsu from "../assets/arts/natsu.jpg"
import skull from "../assets/arts/skull.jpg"
import joker from "../assets/arts/joker.jpg"
import gokussb from "../assets/arts/gokussb.jpg"
import natsudragneel from "../assets/arts/natsudragneel.jpg"

export default function Artwork() {
    const arts = [
        { img: fam, desc: "Description for Fam" },
        { img: attacktitan, desc: "Description for Attack Titan" },
        { img: birb, desc: "Description for Birb" },
        { img: ait, desc: "Description for AIT" },
        { img: gokussb, desc: "Description for Skull" },
        { img: ganeshji, desc: "Description for Ganeshji" },
        { img: gojo, desc: "Description for Gojo" },
        { img: kid, desc: "Description for Kid" },
        { img: natsudragneel, desc: "Description for Skull" },  
        { img: maidsama, desc: "Description for Maid Sama" },
        { img: skull, desc: "Description for Skull" },
        { img: natsu, desc: "Description for Natsu" },
        { img: joker, desc: "Description for Skull" },
        { img: ms, desc: "Description for MS" },
        { img: levi, desc: "Description for Levi" },
        { img: rengoku, desc: "Description for Final" },
        { img: jellalxerza, desc: "Description for Jellal x Erza" },
        { img: luffy, desc: "Description for Luffy" },
    ];
      

    return (
        <div>
            <div className="pintrestcontainer">
                {
                    arts.map((item) => (
                        <div key={item.img}>
                            <ArtCard img={item.img} desc={item.desc} />
                        </div>
                    ))
                }
            </div>
        </div>
    )
}
