
export const updateObjInArray = (items: any, itemID: number, propertyName: string, newObj: any) => {
    return items.map((el: any) => el[propertyName] === itemID ? {...el, ...newObj} : el)
}
