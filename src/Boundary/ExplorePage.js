import React, { useEffect } from "react";
import DisplayGameList from "./UIComponents/Card";
import { useSearchParams } from "react-router-dom";
import {
  Container,
  MenuItem,
  FormControl,
  Select,
  Box,
  Stack,
  TextField,
  Grid,
  Typography,
  IconButton,
  Alert,
  AlertTitle,
} from "@mui/material/";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import FilterListRoundedIcon from "@mui/icons-material/FilterListRounded";
import {
  FilterByFacility,
  FilterBySports,
  FilterByDate,
} from "../Control/FilterController";
import { GetGames } from "../Control/GamesInfoController";
import Game from "../Entity/Game";
/**
 * Function to generate explore page
 * @returns {html} html code of ExplorePage
 */
export default function ExplorePage() {
  const [gameList, setGameList] = React.useState([]);
  const [filteredList, setList] = React.useState([]);
  const [sportList, setSportList] = React.useState([]);
  const [locationList, setLocationsList] = React.useState([]);
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    (async () => {
      try {
        const games = await GetGames();

        // get the dropdown filter list based on existing data
        setSportList(games.docs.map((doc) => doc.data().sportType));
        setLocationsList(games.docs.map((doc) => doc.data().location));

        setGameList(
          games.docs.map(
            (doc) =>
              new Game(
                doc.id,
                doc.data().title,
                doc.data().sportType,
                doc.data().description,
                doc.data().startTime,
                doc.data().endTime,
                doc.data().location,
                doc.data().maxPlayers,
                doc.data().currentPlayers,
                doc.data().userList
              )
          )
        );

        let results = [];
        setList(
          games.docs.map(
            (doc) =>
              new Game(
                doc.id,
                doc.data().title,
                doc.data().sportType,
                doc.data().description,
                doc.data().startTime,
                doc.data().endTime,
                doc.data().location,
                doc.data().maxPlayers,
                doc.data().currentPlayers,
                doc.data().userList
              )
          )
        );
        if (searchParams.get("sports") !== "") {
          setSport(
            searchParams.get("sports")[0].toUpperCase() +
              searchParams.get("sports").substring(1)
          );
          games.docs.map(
            (doc) =>
              doc.data().sportType.toUpperCase() ===
                searchParams.get("sports").toUpperCase() &&
              results.push(
                new Game(
                  doc.id,
                  doc.data().title,
                  doc.data().sportType,
                  doc.data().description,
                  doc.data().startTime,
                  doc.data().endTime,
                  doc.data().location,
                  doc.data().maxPlayers,
                  doc.data().currentPlayers,
                  doc.data().userList
                )
              )
          );
          searchParams.delete("sports");
          setSearchParams(searchParams);
          setList(results);
        }
      } catch (err) {
        console.log("Error occured when fetching games");
      }
    })();
  }, []);

  // buttons info change upon click
  const [sport, setSport] = React.useState("");
  const [location, setLocation] = React.useState("");
  const [date, setDate] = React.useState(null);

  // handle buttons
  const handleSport = (event) => {
    setSport(event.target.value);
  };
  const handleLocation = (event) => {
    setLocation(event.target.value);
  };
  const handleDate = (value) => {
    setDate(value);
  };

  const handleSubmit = () => {
    let list = FilterBySports(gameList, sport);
    list = FilterByFacility(list, location);
    if (date !== null) {
      list = FilterByDate(list, date);
    }
    setList(list);
  };

  return (
    <Container sx={{ minHeight: 800 }}>
      <Box
        sx={{
          mt: 2,
          mb: 5,
          mx: "auto",
          backgroundColor: "secondary.main",
          borderRadius: 2,
          maxWidth: 800,
        }}
      >
        <Stack
          direction={{ sm: "column", md: "row" }}
          spacing={{ xs: 1, sm: 2, md: 3 }}
          sx={{
            mx: 3,
            justifyContent: "space-evenly",
            py: 3,
            paddingLeft: "1rem",
            paddingRight: "1rem",
          }}
        >
          <Box width={{ xs: "100%", md: "30%" }}>
            <FormControl fullWidth>
              <Typography
                sx={{ typography: "body1", fontWeight: "Medium", mb: 1 }}
              >
                Sports
              </Typography>
              <Select value={sport} onChange={handleSport} displayEmpty>
                <MenuItem value="">
                  <em>All</em>
                </MenuItem>
                {[...new Set(sportList)].map((sport) => (
                  <MenuItem key={sport} value={sport}>
                    {" "}
                    {sport}{" "}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Box>
          <Box width={{ xs: "100%", md: "30%" }}>
            <FormControl fullWidth>
              <Typography
                sx={{ typography: "body1", fontWeight: "Medium", mb: 1 }}
              >
                Facility
              </Typography>
              <Select value={location} onChange={handleLocation} displayEmpty>
                <MenuItem value="">
                  <em>All</em>
                </MenuItem>
                {[...new Set(locationList)].map((location) => (
                  <MenuItem key={location} value={location}>
                    {" "}
                    {location}{" "}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Box>
          <Box width={{ xs: "100%", md: "30%" }}>
            <FormControl fullWidth>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <Typography
                  sx={{ typography: "body1", fontWeight: "Medium", mb: 1 }}
                >
                  Date
                </Typography>

                <DesktopDatePicker
                  views={["day"]}
                  inputFormat="MM/DD/YYYY"
                  value={date}
                  onChange={handleDate}
                  renderInput={(params) => <TextField {...params} />}
                  width="100%"
                />
              </LocalizationProvider>
            </FormControl>
          </Box>
          <Box
            width={{ xs: "100%", md: "10%" }}
            sx={{ display: "flex", alignItems: "center" }}
          >
            <Grid container direction="column" alignItems="center">
              <Grid item align="center">
                <IconButton
                  color="primary"
                  aria-label="Filter"
                  onClick={handleSubmit}
                  sx={{
                    borderRadius: "50%",
                    backgroundColor: "#3563E9",
                    color: "white",
                  }}
                >
                  <FilterListRoundedIcon sx={{ fontSize: 40 }} />
                </IconButton>
              </Grid>
            </Grid>
          </Box>
        </Stack>
      </Box>
      {filteredList.length === 0 ? (
        <Alert severity="error">
          {" "}
          <AlertTitle>Error</AlertTitle>No Games Found, Try Other Filter Options
        </Alert>
      ) : (
        <DisplayGameList games={filteredList} />
      )}
    </Container>
  );
}
