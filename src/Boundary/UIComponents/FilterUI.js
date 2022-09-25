import * as React from "react";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Box from "@mui/material/Box";
import dayjs from 'dayjs';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import { Typography } from "@mui/material";
import FilterListRoundedIcon from '@mui/icons-material/FilterListRounded';
import IconButton from "@mui/material/IconButton";
import Grid from '@mui/material/Grid'; // Grid version 1

const sportList = ['Badminton', 'Basketball', 'Tennis', 'Soccer']
const locationList = ['Jurong Corut', 'Sengkang Court', 'NTU Sports Complex']
// const dateList = ['date 1', 'date 2', 'date 3']


export default function SelectVariants() {
    const today = new Date()
    const [sport, setSport] = React.useState("");
    const [location, setLocation] = React.useState("");
    const [value, setValue] = React.useState(dayjs(today));

    const handleSport = (event) => {
        setSport(event.target.value);
    };
    const handleLocation = (event) => {
        setLocation(event.target.value);
    };
    const handleDate = (newValue) => {
        setValue(newValue);
    };

    return (
        <Box
            sx={{
                mt: 3,
                mb: 3,
                mx: "auto",
                // display: "flex",
                // flexDirection: "column",
                // alignItems: "center",
                backgroundColor: "secondary.main",
                // justifyContent: 'center',
                borderRadius: 3,
                maxWidth: 800,
            }}
        >
            <Stack
                direction={{ sm: 'column', md: 'row' }}
                // divider={<Divider orientation="vertical" flexItem />}
                spacing={{ xs: 1, sm: 2, md: 3 }}
                sx={{ mx: 3, justifyContent: 'space-evenly', py: 3 }}

            >
                <Box width={{ xs: "100%", md: "30%" }}>
                    <FormControl fullWidth>
                        <Typography sx={{ typography: 'body1', fontWeight: 'Medium', mb: 1 }}>Sports</Typography>
                        <Select
                            value={sport}
                            onChange={handleSport}
                            displayEmpty
                        >
                            <MenuItem value="">
                                <em>All</em>
                            </MenuItem>
                            {sportList.map((sport) => (
                                <MenuItem key={sport} value={sport} > {sport} </MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                </Box>
                <Box width={{ xs: "100%", md: "30%" }}>
                    <FormControl fullWidth >
                        <Typography sx={{ typography: 'body1', fontWeight: 'Medium', mb: 1 }}>Facility</Typography>
                        <Select
                            value={location}
                            onChange={handleLocation}
                            displayEmpty
                        >
                            <MenuItem value="">
                                <em>All</em>
                            </MenuItem>
                            {locationList.map((location) => (
                                <MenuItem key={location} value={location} > {location} </MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                </Box>
                <Box width={{ xs: "100%", md: "30%" }}>
                    <FormControl fullWidth>
                        <LocalizationProvider dateAdapter={AdapterDayjs} >
                            <Typography sx={{ typography: 'body1', fontWeight: 'Medium', mb: 1 }}>Date</Typography>

                            <DesktopDatePicker
                                views={["day", "month"]}
                                inputFormat="MM/DD/YYYY"
                                value={value}
                                onChange={handleDate}
                                renderInput={(params) => <TextField {...params} />}
                                width='100%'
                            />
                        </LocalizationProvider>
                    </FormControl>
                </Box>
                <Box width={{ xs: "100%", md: "10%" }} sx={{ display: 'flex', alignItems: 'center' }} >
                    <Grid container direction="column" alignItems="center">
                        <Grid item>
                            <IconButton color="primary" aria-label="Filter">
                                <FilterListRoundedIcon sx={{ fontSize: 60}} />
                            </IconButton>
                        </Grid>

                    </Grid>
                </Box>
            </Stack>
        </Box>
    );
}