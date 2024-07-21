import React from "react";

export default function About() {
    return (
        <div className="py-16 bg-white">
            <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
                <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
                    <div className="md:5/12 lg:w-5/12">
                        <img
                            src="https://tailus.io/sources/blocks/left-image/preview/images/startup.png"
                            alt="image"
                        />
                    </div>
                    <div className="md:7/12 lg:w-6/12">
                        <h2 className="text-2xl text-gray-900 font-bold md:text-4xl">
                            This is a  React Project . 
                        </h2>
                        <p className="mt-6 text-gray-600">
                        Our news project leverages the power of the News API to provide users with real-time, 
                        up-to-date news articles from a wide range of reliable sources. 
                        Designed with a user-friendly interface, it allows users to easily browse, search, and filter 
                        news by categories and keywords. Whether you are interested in global events, technology, 
                        sports, or entertainment, our platform ensures you stay informed with the latest headlines 
                        and in-depth stories. 
                        </p>
                        <p className="mt-4 text-gray-600">
                        Our mission is to deliver accurate and timely news, enhancing your 
                        reading experience with personalized and relevant content.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}