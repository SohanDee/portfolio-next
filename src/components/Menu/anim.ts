import { easeInOut } from "motion"

export const menuSlide = {
    initial : {
        x: "calc(100% + 100px)"
    },
    enter: {
        x: "0",
        transition: {duration: 0.5, ease: easeInOut}
    },
    exit: {
        x: "calc(100% + 100px)",
        transition: {duration: 0.5, ease: easeInOut}
    }
}

export const slide = {
    initial : {
        x: "80px"
    },
    enter: (i:number) => ({
        x: "0px",
        transition: {duration: 0.5, ease: easeInOut, delay: 0.05 * i}
    }),
    exit: (i:number) => ({
        x: "80px",
        transition: {duration: 0.5, ease: easeInOut, delay: 0.05 * i}
    })
}