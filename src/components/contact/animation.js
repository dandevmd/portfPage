export const rightAnimation = {
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
export const leftAnimation = {
    hidden: {
        opacity: 0,
        x: '-100vw'
    },
    visible: {
        opacity: 1,
        x: 0,
        transition: { duration: 1 }
    },
    exit: {
        opacity: 0,
        x: '-100vw',
        transition: { duration: 1 }
    }
}