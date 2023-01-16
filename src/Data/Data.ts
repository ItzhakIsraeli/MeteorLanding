import Axios from "axios";

interface GeolocationType {
    type: string,
    coordinates: number[]
}

export interface MeteorType {
    name: string,
    id: string,
    nametype: string,
    recclass: string,
    mass: string,
    fall: string,
    year: string,
    reclat: string,
    reclong: string,
    geolocation: GeolocationType,
}

const YEARS_ARR = new Set<string>();

export const getYears = (): string[] => Array.from(YEARS_ARR).sort((a, b) => Number(b) - Number(a));

export const getData = (): Promise<MeteorType[]> => {
    return Axios.get('https://data.nasa.gov/resource/y77d-th95.json').then((response) => {
        response.data.forEach((item: MeteorType) => YEARS_ARR.add(new Date(item.year).getFullYear().toString()));
        return response.data;
    })
}