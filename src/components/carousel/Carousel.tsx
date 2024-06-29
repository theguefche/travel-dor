import { EmblaCarouselType, EmblaEventType, EmblaOptionsType } from 'embla-carousel'
import React, { useCallback, useEffect, useRef, useState } from 'react'

import { DotButton, useDotButton } from '@components/carousel/CarouselDotButton'
import { LazyLoadImage } from '@components/carousel/CarouselLazyLoadImage'
import Autoplay, { AutoplayType } from 'embla-carousel-autoplay'
import useEmblaCarousel from 'embla-carousel-react'

type PropType = {
    slides: string[]
    options?: EmblaOptionsType
}
const TWEEN_FACTOR_BASE = 0.2
const numberWithinRange = (number: number, min: number, max: number): number =>
    Math.min(Math.max(number, min), max)

const EmblaCarousel: React.FC<PropType> = (props) => {
    const { slides, options } = props
    const [emblaRef, emblaApi] = useEmblaCarousel(options, [Autoplay()])
    const tweenFactor = useRef(0)
    const tweenNodes = useRef<HTMLElement[]>([])

    const onNavButtonClick = useCallback((emblaApi: EmblaCarouselType) => {
        const autoplay = emblaApi?.plugins()?.autoplay as AutoplayType;
        if (!autoplay) return

        const resetOrStop =
            autoplay.options.stopOnInteraction === false
                ? autoplay.reset
                : autoplay.stop

        resetOrStop()
    }, [])


    const { selectedIndex, scrollSnaps, onDotButtonClick } = useDotButton(
        emblaApi,
        onNavButtonClick
    )

    const [slidesInView, setSlidesInView] = useState<number[]>([])



    const updateSlidesInView = useCallback((emblaApi: EmblaCarouselType) => {
        setSlidesInView((slidesInView) => {
            if (slidesInView.length === emblaApi.slideNodes().length) {
                emblaApi.off('slidesInView', updateSlidesInView)
            }
            const inView = emblaApi
                .slidesInView()
                .filter((index) => !slidesInView.includes(index))
            return slidesInView.concat(inView)
        })
    }, [])


    const setTweenNodes = useCallback((emblaApi: EmblaCarouselType): void => {
        tweenNodes.current = emblaApi.slideNodes().map((slideNode) => {
            return slideNode.querySelector('.embla__slide__img') as HTMLElement
        })
    }, [])

    const setTweenFactor = useCallback((emblaApi: EmblaCarouselType) => {
        tweenFactor.current = TWEEN_FACTOR_BASE * emblaApi.scrollSnapList().length
    }, [])

    const tweenScale = useCallback(
        (emblaApi: EmblaCarouselType, eventName?: EmblaEventType) => {
            const engine = emblaApi.internalEngine()
            const scrollProgress = emblaApi.scrollProgress()
            const slidesInView = emblaApi.slidesInView()
            const isScrollEvent = eventName === 'scroll'

            emblaApi.scrollSnapList().forEach((scrollSnap, snapIndex) => {
                let diffToTarget = scrollSnap - scrollProgress
                const slidesInSnap = engine.slideRegistry[snapIndex]

                slidesInSnap.forEach((slideIndex) => {
                    if (isScrollEvent && !slidesInView.includes(slideIndex)) return

                    if (engine.options.loop) {
                        engine.slideLooper.loopPoints.forEach((loopItem) => {
                            const target = loopItem.target()

                            if (slideIndex === loopItem.index && target !== 0) {
                                const sign = Math.sign(target)

                                if (sign === -1) {
                                    diffToTarget = scrollSnap - (1 + scrollProgress)
                                }
                                if (sign === 1) {
                                    diffToTarget = scrollSnap + (1 - scrollProgress)
                                }
                            }
                        })
                    }

                    const tweenValue = 1 - Math.abs(diffToTarget * tweenFactor.current)
                    const scale = numberWithinRange(tweenValue, 0, 1).toString()
                    const tweenNode = tweenNodes.current[slideIndex]
                    tweenNode.style.transform = `scale(${scale})`
                })
            })
        },
        []
    )



    useEffect(() => {
        if (!emblaApi) return

        setTweenNodes(emblaApi)
        setTweenFactor(emblaApi)
        tweenScale(emblaApi)

        emblaApi
            .on('reInit', setTweenNodes)
            .on('reInit', setTweenFactor)
            .on('reInit', tweenScale)
            .on('scroll', tweenScale)
            .on('slideFocus', tweenScale)
        updateSlidesInView(emblaApi)
        emblaApi.on('slidesInView', updateSlidesInView)
        emblaApi.on('reInit', updateSlidesInView)
    }, [emblaApi, updateSlidesInView, tweenScale])

    return (
        <section className="embla">
            <div className="embla__viewport" ref={emblaRef}>
                <div className="embla__container">
                    {slides.map((slide, index) => (
                        <LazyLoadImage
                            key={index}
                            index={index}
                            imgSrc={slide}
                            inView={slidesInView.indexOf(index) > -1}
                        />
                    ))}
                </div>
            </div>

            <div className="embla__controls">

                <div className="embla__dots">
                    {scrollSnaps.map((_, index) => (
                        <DotButton
                            key={index}
                            onClick={() => onDotButtonClick(index)}
                            className={'embla__dot'.concat(
                                index === selectedIndex ? ' embla__dot--selected' : ''
                            )}
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default EmblaCarousel
