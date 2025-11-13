import Header from "../../components/Header";
import TimetableGrid from "../../components/TimetableGrid";
import CommunicationList from "../../components/CommunicationList";

import communicationsData from '../../mock/communications.json';
import timetableData from './../../mock/timetable.json';


function Home() {

    return (
        <>  
            <Header
                title={"Sistema Universitario"}
                subtitle={"Portale Studenti"}
            />

            <CommunicationList 
                communications={communicationsData}
            />

            <TimetableGrid 
                data={timetableData}
            />
        </>
    )

}

export default Home;