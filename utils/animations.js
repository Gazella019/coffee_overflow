import { animate } from "framer-motion"

export const riseWithFade = {
    initial: {
        y: 100,
        opacity: 0,
    },
    animate: {
        y: 0,
        opacity: 1,
        transition: {
            ease: [0.6, 0.01, 0.05, 0.95],
            duration: 0.7,
        },
    },
}

export const galleryAnimation = {
    initial: {
        y: 100,
        opacity: 0,
        scale: 0.8,
    },
    animate: {
        y: 0,
        opacity: 1,
        scale: 1,
        transition: {
            ease: [0.6, 0.01, 0.05, 0.95],
            duration: 1,
        },
    },
}

export const staggerChildernAnimate = {
    
    initial: {
        opacity: 1,
    },
    animate: {
        transition: {
            delayChildren: 0.2,
            staggerChildren: 0.08,
        },
    },
}

export const wordAnimations = {
    initial: {
        y: 100,
    },
    animate: {
        y: 0,
        transition: {
            ease: [0.6, 0.01, 0.05, 0.95],
            duration: 1,
        },
    }
}