import React from "react";
import FadeIn from "react-fade-in";
import Lottie from "react-lottie";
import "bootstrap/dist/css/bootstrap.css";
import * as errorData from "../networklost.json";

const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: errorData.default,
    rendererSettings: {
        preserveAspectRatio: "xMidYMid slice"
    }
};

export default class Error extends React.Component {
    render() {
        return (
            <FadeIn>
                <div className="d-flex justify-content-center align-items-center">
                    <Lottie options={defaultOptions} height={320} width={320} />
                </div>
            </FadeIn>
        )
    }
}