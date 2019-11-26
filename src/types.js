import {arrayOf, shape, string, number} from 'prop-types';

export const itemType = shape({
    name : string,
    url  : string,
    img  : string,
    cost : number,
    qty  : number,
    options: arrayOf(shape({
        name : string,
        options : arrayOf(string)
    }))
});