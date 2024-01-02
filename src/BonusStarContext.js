import { createContext, useContext } from 'react';
export const BonusStarContext = createContext({
  newbie: false,
  challange: false,
  saveBonusStars: () => {},
});

export const useBonusStars = () => useContext(BonusStarContext);