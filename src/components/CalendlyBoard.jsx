import React from 'react';

const CalendlyAppointmentBoard = () => {
  // Inline styles for customizing the look
  const boardStyle = {
    minWidth: '320px', 
    height: '700px',
    // add more styles for 3D effect if needed
  };

  return (
    <div className="calendly-inline-widget" data-url="https://calendly.com/appointmenttr/30min" style={boardStyle}></div>
  );
};

export default CalendlyAppointmentBoard;
