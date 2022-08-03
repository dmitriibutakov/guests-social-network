import {UserType} from "../01_BLL/users-reducer";

export const updateObjInArray = (items: any, itemID: number, propertyName: string, newObj: any) => {
   return items.map((el: any) => el[propertyName] === itemID ? {...el, ...newObj} : el)
}
