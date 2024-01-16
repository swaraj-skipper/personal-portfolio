import React from 'react'
import bulb from "../assets/photo/bulb.jpg";
import bulbul from "../assets/photo/bulbul.jpg";
import cat1 from "../assets/photo/cat1.jpg";
import chameleon from "../assets/photo/chameleon.jpg";
import cockteil1 from "../assets/photo/cockteil1.jpg";
import cockteil2 from "../assets/photo/cockteil2.jpg";
import diya from "../assets/photo/diya.jpg";
import duck from "../assets/photo/duck.jpg";
import dragonfly from "../assets/photo/dragonfly.jpg";
import equality from "../assets/photo/equality.jpg";
import flower from "../assets/photo/flower.jpg";
import flower1 from "../assets/photo/flower1.jpg";
import flower3 from "../assets/photo/flower3.jpg";
import flower2 from "../assets/photo/flower2.jpg";
import flower4 from "../assets/photo/flower4.jpg";
import flower5 from "../assets/photo/flower5.jpg";
import karizma from "../assets/photo/karizma.jpg";
import nightsky from "../assets/photo/nightsky.jpg";
import peacock from "../assets/photo/peacock.jpg";
import raven from "../assets/photo/raven.jpg";
import robin from "../assets/photo/robin.jpg";
import setup from "../assets/photo/setup.jpg";
import spider from "../assets/photo/spider.jpg";
import view from "../assets/photo/view.jpg";
import view1 from "../assets/photo/view1.jpg";
import view2 from "../assets/photo/view2.jpg";
import view3 from "../assets/photo/view3.jpg";
import view4 from "../assets/photo/view4.jpg";
import view5 from "../assets/photo/view5.jpg";

import PhotoCard from './PhotoCard';

export default function Photograph() {
    const photos = [
        bulb,
        bulbul,
        cat1,
        chameleon,
        cockteil1,
        cockteil2,
        view5,
        diya,
        duck,
        dragonfly,
        equality,
        flower,
        flower1,
        flower3,
        flower2,
        flower4,
        flower5,
        karizma,
        nightsky,
        peacock,
        raven,
        robin,
        setup,
        spider,
        view,
        view1,
        view2,
        view3,
        view4,
    ];
    return (
        <div>
            <div className="pintrestcontainer">
                {
                    photos.map((item) => (
                        <div key={item}>
                            <PhotoCard img={item} />
                        </div>
                    ))
                }
            </div>
        </div>
    )
}
