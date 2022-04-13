export const helloAnimation = {
    hidden: {
        opacity: 0,
        y: 100
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.3 }
    },
    exit: {
        opacity: 0,
        y: 100,
        transition: { duration: 0.3 }

    }

}
export const titleAnimation = {
    hidden: {
        opacity: 0,
        y: 100
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: { delay: 0.5, duration: 1 }
    },
    exit: {
        opacity: 0,
        y: 100,
        transition: { delay: 0.5, duration: 1 }
    }

}
export const devAnimation = {
    hidden: {
        opacity: 0,
        y: -20
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: { delay: 1.5, duration: 1 }
    },
    exit: {
        opacity: 0,
        y: -20,
        transition: { delay: 1, duration: 1 }
    }


}

export const imageAnimation = {
    hidden: {
        opacity: 0,
        x: '100vw'
    },
    visible: {
        opacity: 1,
        x: 0,
        transition: { duration: 1 }
    },
    exit: {
        opacity: 0,
        x: '100vw',
        transition: { duration: 1 }
    }
}