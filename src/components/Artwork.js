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
        { img: fam, desc: "My Family" },
        { img: attacktitan, desc: "Attack Titan from Attack on Titan" },
        { img: birb, desc: "Indian Robin" },
        { img: ait, desc: "SAS unit from Counter-Strike" },
        { img: gokussb, desc: "Goku Super Saiyan Blue from Dragon ball super" },
        { img: ganeshji, desc: "Lord Ganesh ji" },
        { img: gojo, desc: "Gojo Satoru from Jujutsu Kaisen" },
        { img: kid, desc: "Kid" },
        { img: natsudragneel, desc: "Natsu Dragneel from Fairy Tail" },  
        { img: maidsama, desc: "Maid Sama" },
        { img: skull, desc: "Skull" },
        { img: natsu, desc: "Natsu Dragneel" },
        { img: joker, desc: "Joker from Batman 2" },
        { img: ms, desc: "Nezuko from Demon Slayer drawn during Microsoft Internship" },
        { img: levi, desc: "Levi Ackerman from Attack on Titan drawn during Innerve 5.0" },
        { img: rengoku, desc: "Rengoku Kyojuro from Demon Slayer" },
        { img: jellalxerza, desc: "jellal x Erza from Fairy Tail" },
        { img: luffy, desc: "Monkey D Luffy from One piece" },
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
