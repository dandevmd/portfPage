export const cardsAnimation = {
    hidden: {
        opacity: 0,
        y: 500
    },
    visible: custom => ({
        opacity: 1,
        x: 0,
        transition: { duration: 0.5, }
    }),
    exit: {
        opacity: 0,
        y: 500,
    }



}

export const textAnimation = {
    hidden: {
        opacity: 0,
        y: -100
    },
    visible: custom => ({
        opacity: 1,
        y: 0,
        transition: { delay: custom * 0.2, duration: 1 }
    }),
    exit: custom => ({
        opacity: 0,
        y: -100,
        transition: { delay: custom * 0.2, duration: 1 }
    })

}