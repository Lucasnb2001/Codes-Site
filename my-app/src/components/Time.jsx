import React from 'react';
import { ReactComponent as TimeBar } from '../assets/O TIME.svg';

export const TimeSection = () => {
  return (
    <div className="Time text-center bg-black text-white min-h-screen pt-60 pl-12">
      <TimeBar />
    </div>
  );
};
