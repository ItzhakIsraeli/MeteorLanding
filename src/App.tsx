import React from 'react';
import './App.css';
import {Main} from "./Main/Main";
import {MeteorType, getData} from "./Data/Data";
import {SuitableMeteorDialog} from "./SuitableMeteorDialog/SuitableMeteorDialog";

function App() {
    const [data, setData] = React.useState<MeteorType[]>([]);
    const [needAlert, setNeedAlert] = React.useState<boolean>(false);
    const yearAlert = React.useRef<string>('');
    const yearText = React.useRef<string>('');
    const fullMeteorData = React.useRef<MeteorType[]>([]);

    React.useEffect(() => {
        getData().then((data: MeteorType[]) => {
            setData(data);
            fullMeteorData.current = data.sort((a, b) => Number(a.mass) - Number(b.mass));
        })
    }, []);

    const handleChangeMass = (text: string) => {
        const filteredMeteors: MeteorType[] = data.filter((item) => ((Number(item.mass) >= Number(text))));

        if (filteredMeteors.length) {
            setData(filteredMeteors);
        } else {
            getSuitableMeteor(text);
        }

    }

    const getSuitableMeteor = (text: string) => {
        const meteor: MeteorType = fullMeteorData.current[fullMeteorData.current.findIndex((item) => Number(item.mass) > Number(text))];
        yearAlert.current = meteor ? new Date(meteor.year).getFullYear().toString() : 'NOT-FOUND';
        setNeedAlert(true);
        setData(fullMeteorData.current.filter((item) => item.year === meteor.year && (Number(item.mass) >= Number(meteor.mass))));
    }

    const handleResetData = () => {
        setData(fullMeteorData.current);
    }

    const handleChangeYear = (text: string) => {
        yearText.current = text;
        setData(fullMeteorData.current.filter((item) =>
            new Date(item.year).getFullYear().toString() === text
        ));
    }

    const handleClose = () => {
        setNeedAlert(false);
        yearAlert.current = '';
    }

    return (
        <div className="App">
            <SuitableMeteorDialog needAlert={needAlert} handleClose={handleClose} year={yearAlert.current}/>
            <Main data={data} handleChangeMass={handleChangeMass} resetData={handleResetData}
                  handleChangeYear={handleChangeYear} preventSearch={yearText.current === ''}/>
        </div>
    );
}

export default App;
