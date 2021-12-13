import Button from "../Button";
import React from "react";
import ReactPlayer from "react-player";

import './featured.css';

export default function FeaturedSection() {
    return (
        <div className="container featuredSection">
            <div class="row">
                <div class="col-sm-6 col-lg-6">
                    <div className="VideoWrap">
                        <ReactPlayer className="video" playing
                            light="/Images/videobg.png" muted={true} url='https://cosmatherapy.co.uk/wp-content/uploads/2021/08/Cosma-APP-An-Therapy-App-for-Dementia.mp4?_=1' />
                    </div>
                </div>
                <div class="col-6 col-lg-6">
                    <div className="featuredSectionContent">
                        <h1>COSMA Platform For Dementia</h1>
                        <p>COSMA is a personalised gamification app designed specifically to stimulate and keep the brain active for people living with Dementia. COSMA therapy is designed with the aim of achieving the cognitive, emotional, and spiritual well-being of people living with dementia.
                            COSMA app helps people living with dementia and their family to self-manage dementia with access to monitor improvements with COSMA reports.
                        </p>
                        <Button to="#down" BtnContent="Let's Go" />
                    </div>
                </div>
            </div>
        </div>
    )
}