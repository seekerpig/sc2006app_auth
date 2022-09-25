import { db } from "./DatabaseController";
// import firebase function
import { collection, query, where, getDocs } from "firebase/firestore";

export const FilterBySports = (games, sport ) =>{
    let newGamesArr = [];
    if (sport == ""){ return games; }
    else
    {
        for (let i = 0; i < games.length;i++)
        {
            if (games[i].sportType.toUpperCase() == sport.toUpperCase())
            {
                newGamesArr.push(games[i]);
            }
        }
    }
    return newGamesArr;
}

export const FilterByFacility = (games, location ) =>{
    let newLocationArr = [];
    console.log(location);
    if (location == "") { return games; }
    else
    {
        for (let i = 0; i < games.length;i++)
        {
            if (games[i].location.toUpperCase() == location.toUpperCase())
            {
                newLocationArr.push(games[i]);
            }
        }
    }
    return newLocationArr;
}


export const FilterByDate = (games, date ) =>{
    let newDateArr = [];
    console.log(date.format('DD/MM/YYYY'));
    if (date == "") { return games; }
    else
    {
        for (let i = 0; i < games.length;i++)
        {
            if (new Date(games[i].startTime.seconds*1000).toLocaleDateString(
                'en-GB', {
                  day: 'numeric', month: 'numeric', year: 'numeric'
                }
              ).replace(/ /g, '/') == date.format('DD/MM/YYYY'))
            {
                newDateArr.push(games[i]);
            }
        }
    }
    return newDateArr;
}


// export const Filter = async () =>{
//     const ref = collection(db, "Games")
//     const q = query(ref, where("sportType", "==", "Badminton"));
//     const querySnapshot = await getDocs(q);
//     const results = [];

//     querySnapshot.forEach((doc) => {
//     // doc.data() is never undefined for query doc snapshots
//         results.push({id: doc.id, ...doc.data()});

//     });
//     console.log(results);

// }