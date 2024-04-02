import React, { useEffect, useRef } from 'react';
import Appointlet from '@appointlet/appointlet.js';
import '../styles/appointlet.css';

const CalendlyEmbed = () => {
  const containerRef = useRef(null); // Using ref to reference the container DOM node

  useEffect(() => {
    // Check if the containerRef is current and if the Appointlet script is loaded
    if (containerRef.current) {
      // Create an instance of the Appointlet object with your scheduling page URL
      const appointlet = new Appointlet('https://appt.link/meet-with-emre-ylmaz/example-meeting');

      // Embed the scheduling page into a DOM node on the page
      appointlet.inlineEmbed(containerRef.current).catch(error => {
        console.error("Error embedding Appointlet", error);
      });

      // Cleanup function
      return () => {
        // If there's a need to clean up the Appointlet widget, do it here
        // Documentation may specify a method like `appointlet.remove()` or similar
      };
    }
  }, []);

  // Render a div for inline embedding using the ref
  return <div ref={containerRef} id="appointlet-inline-container" />;
};

export default CalendlyEmbed;
