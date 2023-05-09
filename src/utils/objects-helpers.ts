export const updateObjectInArray = (items:Array<any>,itemId:number,objPropName:string,newObjProps:{}) => {
   return  items.map(el => el[objPropName] === itemId ? {...el, ...newObjProps} : el)
}

