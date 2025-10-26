import React from "react";
import Section1 from "./sections/Section1";
import Section2 from "./sections/Section2";
import Section3 from "./sections/Section3";
import AutoLifeSection from "./sections/AutoLifeSection";
import ShowroomHighlights from "./sections/ShowroomHighlights";
import NewsSection from "./sections/NewsSection";
import ProvinceNewsSection from "./sections/ProvinceNewsSection";
import ContentWithImageSection from "./sections/ContentWithImageSection";
import PhotoFeaturesSection from "./sections/PhotoFeaturesSection";
import BigImageSection from "./sections/BigImageSection";
import BusinessSection from "./sections/BusinessSection";
import SportsSection from "./sections/SportsSection";
import EntertainmentSection from "./sections/EntertainmentSection";
import WorldSection from "./sections/WorldSection";
import FeatureSection from "./sections/FeatureSection";
import NationalSection from "./sections/NationalSection";
import LatestUpdates from "./sections/LatestUpdates";
import ThoughtsSection from "./sections/ThoughtsSection";


const TwoColumnLayout = ({ leftContent, rightContent }) => (
    <div className="w-full max-w-[78.75rem] mx-auto px-2 sm:px-4 lg:px-0 grid grid-cols-1 lg:grid-cols-[minmax(0,3.65fr)_minmax(0,1.25fr)] gap-6 mt-20 mb-8">

        {/* Left Column */}
        <div className="p-1">
            <Section1 />
            <Section2 />
            <Section3 />
            <AutoLifeSection />
            <ShowroomHighlights />
            <NewsSection />
            <ProvinceNewsSection />
            <ContentWithImageSection />
            <PhotoFeaturesSection />
            <BigImageSection />
            <BusinessSection/>
            <SportsSection/>
            <EntertainmentSection/>
            <WorldSection/>
            <FeatureSection/>
            <NationalSection/>
        </div>

        {/* Right Column */}
        <div className="space-y-2 p-1 lg:sticky lg:top-16 self-start h-fit">
            <LatestUpdates/>
            <ThoughtsSection/>
        </div>
    </div>
);

export default TwoColumnLayout;
