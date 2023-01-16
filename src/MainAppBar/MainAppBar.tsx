import {AppBar, Autocomplete, Box, Grid, IconButton, InputBase, Paper, TextField, Toolbar} from "@mui/material";
import ClearIcon from "@mui/icons-material/Clear";
import SearchIcon from "@mui/icons-material/Search";
import React from "react";
import {getYears} from "../Data/Data";

interface MainAppBarProps {
    handleSubmit: (event: React.FormEvent<HTMLFormElement>, text: string) => void,
    handleChangeMass: (text: string) => void,
    handleChangeYear: (text: string) => void,
    clearTextFilter: () => void,
    preventSearch: boolean
}

export const MainAppBar = ({
                               handleSubmit,
                               handleChangeMass,
                               handleChangeYear,
                               clearTextFilter,
                               preventSearch
                           }: MainAppBarProps) => {

    const [searchText, setSearchText] = React.useState('');

    const handleClearText = () => {
        setSearchText('');
        clearTextFilter();
    }

    const handleSelectYear = (text: string) => {
        handleClearText();
        handleChangeYear(text);
    }

    return (
        <Box sx={{flexGrow: 1}}>
            <AppBar position="static">
                <Toolbar>
                    <Grid container gap={2} alignItems={'center'} justifyContent={'center'}>
                        <Grid container justifyContent={'center'} xs>
                            <Paper onSubmit={(event) => handleSubmit(event, searchText)}
                                   component="form"
                                   sx={{p: '2px 4px', display: 'flex', alignItems: 'center', width: 350}}
                            >
                                <InputBase
                                    disabled={preventSearch}
                                    value={searchText}
                                    onChange={(event) => setSearchText(event.target.value)}
                                    sx={{ml: 1, flex: 1}}
                                    placeholder='Search Meteor Landing By Mass '
                                    inputProps={{'aria-label': 'Search Meteor Landing By Mass'}}
                                />
                                <IconButton type="button" sx={{p: '10px'}} aria-label="search"
                                            onClick={handleClearText} disabled={preventSearch}>
                                    <ClearIcon/>
                                </IconButton>
                                <IconButton type="button" sx={{p: '10px'}} aria-label="search"
                                            onClick={() => handleChangeMass(searchText)} disabled={preventSearch}>
                                    <SearchIcon/>
                                </IconButton>
                            </Paper>
                        </Grid>
                        <Grid container justifyContent={'center'} xs>
                            <Paper component="form"
                                   sx={{
                                       p: '1px 1px',
                                   }}
                                   onSubmit={((event) => event.preventDefault())}
                            >
                                <Autocomplete
                                    onChange={(event, value) => value && handleSelectYear(value)}
                                    disablePortal
                                    id="combo-box-demo"
                                    options={getYears()}
                                    sx={{
                                        p: '1px 1px',
                                        display: 'flex',
                                        alignItems: 'center',
                                        width: 350,
                                        backgroundColor: 'white'
                                    }}
                                    renderInput={(params) => <TextField {...params} label="Year Filter"/>}
                                />
                            </Paper>

                        </Grid>
                    </Grid>
                </Toolbar>
            </AppBar>
        </Box>
    )
}