export function incCounter(type, data) {
    return {
        type: type,
        payload: data       
    }
}