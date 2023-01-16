import {MeteorType} from "../Data/Data";
import {Grid} from "@mui/material";
import {DataGrid} from '@mui/x-data-grid';
import React from "react";
import {columns} from "./DataColumns";
import {MainAppBar} from "../MainAppBar/MainAppBar";

interface MainProps {
    data: MeteorType[],
    handleChangeMass: (text: string) => void,
    resetData: () => void,
    handleChangeYear: (text: string) => void,
    preventSearch: boolean
}

export const Main = ({data, handleChangeMass, resetData, handleChangeYear, preventSearch}: MainProps) => {

    const [pageSize, setPageSize] = React.useState<number>(5);
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>, text: string) => {
        event.preventDefault();
        handleChangeMass(text);
    }

    return (
        <>
            <MainAppBar handleChangeMass={handleChangeMass} handleSubmit={handleSubmit} clearTextFilter={resetData}
                        handleChangeYear={handleChangeYear} preventSearch={preventSearch}/>
            <Grid container justifyContent={'center'}>
                <div style={{minHeight: 400, width: '80%'}}>
                    <DataGrid
                        rows={data}
                        columns={columns}
                        pageSize={pageSize}
                        onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
                        rowsPerPageOptions={[5, 10, 25]}
                    />
                </div>
            </Grid>
        </>
    )
}