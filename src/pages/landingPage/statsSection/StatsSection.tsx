import StatElement from "@pages/landingPage/statsSection/StatElement"

const StatsSection = () => {
    return (
        <div className="transparent-layout-element ">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-3xl font-extrabold sm:text-4xl">
                        Elevating Stays and Accommodations
                    </h2>
                    <p className="mt-3 text-xl sm:mt-4">
                        Discover a new standard of hospitality with diverse range of accommodations.
                    </p>
                </div>
            </div>
            <div className="mt-10 pb-1">
                <div className="relative">
                    <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="max-w-4xl mx-auto">
                            <dl className="rounded-lg bg-element shadow-lg sm:grid sm:grid-cols-3">
                                <StatElement icon="mdi:bed" title="Total Stays" value={500} extra="+" />
                                <StatElement icon="game-icons:algeria" title="Coverage" value={58} isPercentage={true} />
                                <StatElement icon="mdi:user" title="New Users" value={30} extra="+" />
                            </dl>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default StatsSection