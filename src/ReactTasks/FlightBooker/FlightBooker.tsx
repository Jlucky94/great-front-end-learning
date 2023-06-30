import {Box, Button, FormControl, InputLabel, MenuItem, Select, SelectChangeEvent} from '@mui/material';
import React, {useState} from 'react';
import {DatePicker, LocalizationProvider} from "@mui/x-date-pickers";
import dayjs, {Dayjs} from "dayjs";
import {AdapterDayjs} from "@mui/x-date-pickers/AdapterDayjs";



const today = dayjs();
const tomorrow = dayjs().add(1, 'day');

const FlightBooker = () => {


    const [depDate,setDepDate]=useState<Dayjs | null>(today)
    const [arrDate,setArrDate]=useState<Dayjs | null>(tomorrow)

    const [isOneWayFlight, setIsOneWayFlight] = React.useState('true');

    const changeDepDateHandler = (newDate:Dayjs|null) => {
        if(arrDate&&newDate!>arrDate) setArrDate(newDate)
        setDepDate(newDate)
    }

    const handleChange = (event: SelectChangeEvent) => {
        setIsOneWayFlight(event.target.value);
    }



    const buttonHandler = () => {
        alert((isOneWayFlight === 'true') ? `You have booked a one-way flight on ${depDate!.format('DD-MM-YYYY')} `: `You have booked a return flight departing on ${depDate!.format('DD-MM-YYYY')} and returning on ${arrDate!.format('DD-MM-YYYY')}`)
    }

    return (
        <>
            <Box sx={{width: 200, mb: 2}}>
                <FormControl fullWidth>
                    <InputLabel id="flightType">Flight Type</InputLabel>
                    <Select
                        labelId="flightType"
                        id="flightType-select"
                        value={isOneWayFlight}
                        label="Flight Type"
                        onChange={handleChange}
                    >
                        <MenuItem value={'true'}>One-way flight</MenuItem>
                        <MenuItem value={'false'}>Return flight</MenuItem>
                    </Select>
                </FormControl>
            </Box>

            <Box>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DatePicker
                        sx={{width: 200, marginRight: 2}}
                        label="Departure date"
                        disablePast
                        views={['year', 'month', 'day']}
                        value={depDate}
                        onChange={changeDepDateHandler}
                    />
                    {isOneWayFlight === 'true' ?""
                        :
                        <DatePicker
                            sx={{width: 200}}
                            label="Arrival date"
                            disablePast
                            minDate={depDate}
                            views={['year', 'month', 'day']}
                            value={arrDate}
                            onChange={(newDate) => setArrDate(newDate)}
                        />
                }
            </LocalizationProvider>
            </Box>
            <Button onClick={buttonHandler} style={{marginTop:20}} variant={'outlined'}>
                Submit
            </Button>
        </>

    )
};

export default FlightBooker;