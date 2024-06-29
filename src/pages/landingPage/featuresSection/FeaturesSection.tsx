import LeftWave from "@assets/wave-left.svg";
import FeatureElement from "@pages/landingPage/featuresSection/FeatureElement";
import React from 'react';

type Props = {}


const ForTravelersItems = [
    {
        icon: 'ion:wallet',
        heading: 'Affordable Stays',
        text: 'Enjoy budget-friendly accommodations without compromising on comfort.',
    },
    {
        icon: 'mdi:hotel',
        heading: 'Wide Selection',
        text: 'Choose from a diverse range of dormitories to suit your needs and preferences.',
    },
    {
        icon: 'mdi:calendar-check',
        heading: 'Convenient Booking',
        text: 'Book easily with our user-friendly platform and secure payment options.',
    },
];

const ForOwnersItems = [
    {
        icon: 'mdi:account-group',
        heading: 'Reach More Customers',
        text: 'List your dormitory and reach a wider audience of potential travelers.',
    },
    {
        icon: 'mdi:cash-multiple',
        heading: 'Increase Revenue',
        text: 'Maximize your revenue by filling up your rooms with more guests.',
    },
    {
        icon: 'mdi:calendar-star',
        heading: 'Easy Management',
        text: 'Manage your listings, bookings, and payments all in one place.',
    },
];



const FeaturesSection = (props: Props) => {
    return (
        <React.Fragment>
            <div className="w-full absolute -z-overlay ">
                <LeftWave />
            </div>
            <div className="transparent-layout-element prose lg:prose-lg " style={{ margin: "auto" }}>

                <div className="max-w-7xl mx-auto ">
                    <div className="max-w-4xl mx-auto text-center">
                        <h2>
                            Why Choose Us?
                        </h2>
                        <p>
                            Discover the Benefits for Both Travelers and Dormitory Owners
                        </p>
                    </div>
                </div>

                <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-8 max-w-7xl mx-auto ">
                    <FeatureElement title={'For Travelers'} items={ForTravelersItems} />
                    <FeatureElement title="For Owners" items={ForOwnersItems} />
                </div>
            </div>
        </React.Fragment>

    )
}



export default FeaturesSection