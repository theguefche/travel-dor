type FeatureItem = {
    icon: string;
    heading: string;
    text: string;
};

export type FeatureSectionProps = {
    title: string;
    items: FeatureItem[];
};
