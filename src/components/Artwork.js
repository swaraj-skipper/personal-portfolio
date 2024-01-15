import React from 'react'
import ArtCard from './ArtCard'
import ait from "../assets/arts/ait.jpg"
import attacktitan from "../assets/arts/attacktitan.jpg"
import birb from "../assets/arts/birb.jpg"
import fam from "../assets/arts/fam.jpg"
import final from "../assets/arts/final.jpg"
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
        { img: ait, desc: "Description for AIT" },
        { img: attacktitan, desc: "Description for Attack Titan" },
        { img: birb, desc: "Description for Birb" },
        { img: fam, desc: "Description for Fam" },
        { img: final, desc: "Description for Final" },
        { img: ganeshji, desc: "Description for Ganeshji" },
        { img: gojo, desc: "Description for Gojo" },
        { img: jellalxerza, desc: "Description for Jellal x Erza" },
        { img: kid, desc: "Description for Kid" },
        { img: levi, desc: "Description for Levi" },
        { img: luffy, desc: "Description for Luffy" },
        { img: maidsama, desc: "Description for Maid Sama" },
        { img: ms, desc: "Description for MS" },
        { img: natsu, desc: "Description for Natsu" },
        { img: skull, desc: "Description for Skull" },
        { img: joker, desc: "Description for Skull" },
        { img: natsudragneel, desc: "Description for Skull" },
        { img: gokussb, desc: "Description for Skull" },
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
