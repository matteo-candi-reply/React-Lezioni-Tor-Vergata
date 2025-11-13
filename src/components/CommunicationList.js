import CommunicationItem from "./CommunicationItem";

function CommunicationList({ communications }) {
    if (!communications || communications.length === 0) {
        return <p>Nessuna comunicazione disponibile</p>;
    }

    return (
        <div className="communication-list">
            <h2>Comunicazioni</h2>
            {communications.map(comm => (
                <CommunicationItem
                    key={comm.id}
                    date={comm.date}
                    text={comm.text}
                />
            ))}
        </div>
    );
}

export default CommunicationList;