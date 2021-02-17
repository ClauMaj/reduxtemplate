
// an action creator, return an object with TYPE and data
export const increment = (n) => {
    return {
        type: "INCREMENT",
        data: n
    }
}

// exporting individual fnct. When importing link use the name of the action