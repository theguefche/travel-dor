import Adventure from "@assets/adventure.svg"
import Business from "@assets/business.svg"
import DestinationSection from "@pages/landingPage/destinationsSection/DestinationSection"
import FeaturesSection from "@pages/landingPage/featuresSection/FeaturesSection"
import HeroSection from "@pages/landingPage/heroSection/HeroSection"
import IntrestSection from "@pages/landingPage/intrestSection/IntrestSection"
import NewsLetterSection from "@pages/landingPage/newsLetterSection/NewsLetterSection"
import StatsSection from "@pages/landingPage/statsSection/StatsSection"
import i18next from "@translation/i18n"
import IllustrationProps from "@typing/IllustrationProps"
import { useTranslation } from "react-i18next"

export const illustrationsList: Array<IllustrationProps> = [
    {
        image: <Business />,
        text: "A Business Trip",
        color: "accent"
    },
    {
        image: <Adventure />,
        text: "An Adventurous travel",
        color: "secondary"
    }
];


const LandingPage = () => {

    const { t } = useTranslation()


    return (

        <main className='space-y-10'>
            <p>{t("title")}</p>
            <HeroSection />
            <StatsSection />
            <IntrestSection />
            <FeaturesSection />
            <DestinationSection />
            <NewsLetterSection />

        </main>


    )
}





export default LandingPage