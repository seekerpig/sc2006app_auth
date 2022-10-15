/**
 * This method filters the game array based on user's sport selection
 * @param {string[]} games is the entire game array
 * @param {string} sport is the sport selected by user
 * @returns the filtered game array based on the sport selected by user
 */
export const FilterBySports = (games, sport) => {
  let newGamesArr = [];
  if (sport === "") {
    return games;
  } else {
    for (let i = 0; i < games.length; i++) {
      if (games[i].sportType.toUpperCase() === sport.toUpperCase()) {
        newGamesArr.push(games[i]);
      }
    }
  }
  return newGamesArr;
};

/**
 * This method filters the game array based on user's location selection
 * @param {string[]} games is the entire game array
 * @param {string} location is the location selected by user in the filter
 * @returns the filtered game array based on the location selected by user
 */
export const FilterByFacility = (games, location) => {
  let newLocationArr = [];
  console.log(location);
  if (location === "") {
    return games;
  } else {
    for (let i = 0; i < games.length; i++) {
      if (games[i].location.toUpperCase() === location.toUpperCase()) {
        newLocationArr.push(games[i]);
      }
    }
  }
  return newLocationArr;
};

/**
 * This function filters the game array based on user's date selection
 * @param {string[]} games is the entire game array
 * @param {Date} date is the date selected by user in the filter
 * @returns the filtered game array based on the date selected by user
 */
export const FilterByDate = (games, date) => {
  let newDateArr = [];
  console.log(date.format("DD/MM/YYYY"));
  if (date === "") {
    return games;
  } else {
    for (let i = 0; i < games.length; i++) {
      if (
        new Date(games[i].startTime.seconds * 1000)
          .toLocaleDateString("en-GB", {
            day: "numeric",
            month: "numeric",
            year: "numeric",
          })
          .replace(/ /g, "/") === date.format("DD/MM/YYYY")
      ) {
        newDateArr.push(games[i]);
      }
    }
  }
  return newDateArr;
};
