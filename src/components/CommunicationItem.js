function CommunicationItem({ date, text }) {
    return (
        <div className="communication-item">
            <span className="date">{date}</span>
            <span className="text">{text}</span>
        </div>
    );
}

export default CommunicationItem;