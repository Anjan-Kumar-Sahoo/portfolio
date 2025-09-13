import React from 'react';
import { TrainingType } from '../types';

interface TrainingCardProps {
  training: TrainingType;
}

const TrainingCard: React.FC<TrainingCardProps> = ({ training }) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 flex flex-col h-full">
      <div className="flex items-center justify-between mb-2">
        <h3 className="text-lg font-bold text-gray-800 dark:text-white">
          {training.title}
        </h3>
        {training.certificate ? (
          <a
            href={training.certificate}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-3 py-1 bg-blue-600 text-white text-xs rounded hover:bg-blue-700 transition"
          >
            Verify
          </a>
        ) : (
          <span
            className="inline-flex items-center px-3 py-1 bg-blue-600 text-white text-xs rounded"
            style={{ pointerEvents: 'none' }}
          >
            Verify
          </span>
        )}
      </div>
      <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-2">
        <span className="font-semibold">{training.organization}</span>
        <span className="mx-2">•</span>
        <span>{training.duration}</span>
      </div>
      <ul className="list-disc pl-5 text-gray-600 dark:text-gray-300">
        {training.points.map((point, idx) => (
          <li key={idx}>{point}</li>
        ))}
      </ul>
    </div>
  );
};

export default TrainingCard;
