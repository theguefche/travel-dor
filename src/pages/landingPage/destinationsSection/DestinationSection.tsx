import Blob3 from "@assets/blob3.svg"
import Destination from "@assets/destination.svg"
import Carousel from '@components/carousel/Carousel'
import LabeledDivider from '@components/divider/LabeledDivider'
import { EmblaOptionsType } from 'embla-carousel'
type Props = {}

const DestinationSection = (props: Props) => {
    const OPTIONS: EmblaOptionsType = { loop: true }
    const SLIDES: string[] = [
        "https://images.unsplash.com/photo-1575664274476-e02d99195164?q=80&w=1931&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1535585538107-e457d37fbde5?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1582638682484-02feebeafc3e?q=80&w=2024&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1583023489019-670278c3752d?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1629989714683-9861709b7856?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1567809447202-cc5413732671?q=80&w=2114&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1664403775784-8a0b32536a0c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    ]

    return (
        <section className='relative'>
            <div className='absolute top-0 w-1/2 h-1/2  -z-10  overflow-hidden'>
                <Blob3 />
            </div>
            <LabeledDivider label='Discover the Best Destinations in Algeria' />
            <article className='flex items-center p-4 max-w-screen-lg mx-auto mb-10 flex-col sm:flex-row gap-5'>
                <h5 className='prose lg:prose-lg text-center mx-auto'>Whether you’re planning a business trip, looking for historical landmarks, seeking cultural experiences, or simply a beautiful place to relax and unwind, Algeria has it all.</h5>
                <figure className='w-5/6'><Destination /></figure>
            </article>
            <Carousel slides={SLIDES} options={OPTIONS} />
        </section>
    )
}

export default DestinationSection