import {arrayOf, shape, string, number, func} from 'prop-types';

export const optionType = shape({
    name : string.isRequired,
    options : arrayOf(string).isRequired,
    count : number,
    upcharge : arrayOf(number),
    selections: arrayOf(string)
});

export const itemType = shape({
    name : string.isRequired,
    url  : string,
    img  : string.isRequired,
    cost : number.isRequired,
    qty  : number.isRequired,
    setQty : func.isRequired,
    makeSelection : func.isRequired,
    options: arrayOf(optionType)
});