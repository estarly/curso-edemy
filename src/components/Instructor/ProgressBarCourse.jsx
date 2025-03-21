import React from 'react';

const ProgressBarCourse = ({ completedLessons, totalLessons }) => {
    return (
        <div className="progress">
            <div
                className="progress-bar"
                role="progressbar"
                style={{ width: `${(completedLessons / totalLessons) * 100}%` }}
                aria-valuenow={completedLessons}
                aria-valuemin="0"
                aria-valuemax={totalLessons}
            >
                {((completedLessons / totalLessons) * 100).toFixed(0)}% en progreso
            </div>
        </div>
    );
};

export default ProgressBarCourse;
