import storeItems2019 from './2019';
import storeItems2020 from './2020';
import storeItems2021 from './2021';
import storeItems2022 from './2022';
import storeItems2023 from './2023';
export const dollarsToStars = (dollars) => Math.round(Math.pow(17.3*dollars + 37.9, .5) - 6.1)
// export const dollarsToStars = (dollars) => Math.round((5/9) * Math.pow(72*dollars + 121, .5) - (55/9))
const years = {
    '2019' : storeItems2019,
    '2020' : storeItems2020,
    '2021' : storeItems2021,
    '2022' : storeItems2022,
    '2023' : storeItems2023,
};

export default years;