import React from 'react'
import MeYaayVid from "../../public/video/Papa-Mamma-Me-Yaay.mp4";

const ResultVideo = () => {
    return (
        <div class="result-video-container">
            <video src={MeYaayVid} width="100%" height="100%" controls="controls" autoPlay />
        </div>
    );
};

export default ResultVideo
