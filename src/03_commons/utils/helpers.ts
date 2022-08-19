
export const updateObjInArray = (items: any, itemID: number, propertyName: string, newObj: any) => {
    return items.map((el: any) => el[propertyName] === itemID ? {...el, ...newObj} : el)
}

export const day = new Date().getDay()
export const hours = new Date().getHours()
export const minutes = new Date().getMinutes()
export const month = new Date().getMonth()
export const year = new Date().getFullYear()