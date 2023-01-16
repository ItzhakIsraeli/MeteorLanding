import {GridColDef, GridValueGetterParams} from "@mui/x-data-grid";
import {Typography} from "@mui/material";
import React from "react";

export const columns: GridColDef[] = [
    {
        field: 'name',
        renderHeader: () => (
            <Typography color={'primary'} variant={'h6'}>
                Name
            </Typography>
        ),
        width: 130
    },
    {
        field: 'id', renderHeader: () => (
            <Typography color={'primary'} variant={'h6'}>
                Id
            </Typography>
        ), width: 130
    },
    {
        field: 'nametype', renderHeader: () => (
            <Typography color={'primary'} variant={'h6'}>
                Name Type
            </Typography>
        ), width: 130
    },
    {
        field: 'recclass', renderHeader: () => (
            <Typography color={'primary'} variant={'h6'}>
                Rec Class
            </Typography>
        ), width: 130
    },
    {
        field: 'mass', renderHeader: () => (
            <Typography color={'primary'} variant={'h6'}>
                Mass
            </Typography>
        ), width: 130
    },
    {
        field: 'fall', renderHeader: () => (
            <Typography color={'primary'} variant={'h6'}>
                Fall
            </Typography>
        ), width: 130
    },
    {
        field: 'year',
        renderHeader: () => (
            <Typography color={'primary'} variant={'h6'}>
                Year
            </Typography>
        ),
        width: 130,
        valueGetter: (params: GridValueGetterParams) =>
            new Date(params.row.year).getFullYear(),
    },
    {
        field: 'reclat', renderHeader: () => (
            <Typography color={'primary'} variant={'h6'}>
                Rec Lat
            </Typography>
        ), width: 130
    },
    {
        field: 'reclong', renderHeader: () => (
            <Typography color={'primary'} variant={'h6'}>
                Rec Long
            </Typography>
        ), width: 130
    },
    {
        field: 'geolocation',
        renderHeader: () => (
            <Typography color={'primary'} variant={'h6'}>
                Geo Location
            </Typography>
        ),
        width: 230,
        sortable: false,
        valueGetter: (params: GridValueGetterParams) =>
            `${params.row.geolocation?.coordinates[0]} , ${params.row.geolocation?.coordinates[1]}`
    }
];