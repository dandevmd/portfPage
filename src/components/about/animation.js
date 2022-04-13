export const titleAnimation = {
    hidden: {
        opacity: 0,
        x: 100
    },
    visible: {
        opacity: 1,
        x: 0,
        transition: { delay: 0.5, duration: 1 }
    },
    exit: {
        opacity: 0,
        x: 100,
        transition: { delay: 0.5, duration: 1 }
    }

}
export const svgAnimation = {
    hidden: {
        opacity: 0,
        x: -100
    },
    visible: {
        opacity: 1,
        x: 0,
        transition: { delay: 0.5, duration: 1 }
    },
    exit: {
        opacity: 0,
        x: -100,
        transition: { delay: 0.5, duration: 1 }
    }

}
export const imageAnimation = {
    hidden: {
        opacity: 0,
        x: 10
    },
    visible: custom => ({
        opacity: 1,
        x: 0,
        transition: { delay: custom * 0.2 }
    }),
    exit: {
        opacity: 0,
        x: 10,
    }

}