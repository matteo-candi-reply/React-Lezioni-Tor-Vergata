import { useState } from 'react';
import LessonCard from './LessonCard';

function TimetableGrid({data}) {
    const [selectedDay, setSelectedDay] = useState('Lunedì');

    const timetable = data;
    const days = Object.keys(timetable);
    const lessons = timetable[selectedDay] || [];

    return (
        <div className="timetable-container">
            <h2>Orario Lezioni</h2>

            {/* Pulsanti per selezionare il giorno */}
            <div className="day-selector">
                {days.map(day => (
                    <button
                        key={day}
                        onClick={() => setSelectedDay(day)}
                        className={selectedDay === day ? 'active' : ''}
                    >
                        {day}
                    </button>
                ))}
            </div>

            {/* Lezioni del giorno selezionato */}
            <div className="lessons-grid">
                {lessons.length > 0 ? (
                    lessons.map(lesson => (
                        <LessonCard
                            key={lesson.id}
                            subject={lesson.subject}
                            time={lesson.time}
                            room={lesson.room}
                            professor={lesson.professor}
                        />
                    ))
                ) : (
                    <p>Nessuna lezione per questo giorno</p>
                )}
            </div>
        </div>
    );
}

export default TimetableGrid;