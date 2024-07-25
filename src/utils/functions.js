let interval = null;

export const isTokenValid = (expiresAt) => {

    if (interval) {
        clearInterval(interval)
    }
    
    interval = setInterval(() => {
        const time = new Date()
        const currentTimestamp = Date.parse(time)/1000
        console.log(currentTimestamp)
        if (currentTimestamp > expiresAt) {
            console.log("hemos entrado al if")
            localStorage.removeItem("passport")
            clearInterval(interval)

        }
    }, 60000)
}