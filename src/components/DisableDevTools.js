import { useEffect } from 'react';

export const DisableDevTools = () => {

  useEffect(() => {
    // Disable right-click context menu
    document.addEventListener('contextmenu', (event) => {
      event.preventDefault();
    });

    // Disable F12, Ctrl+Shift+I, Ctrl+Shift+J, Ctrl+U
    const handleKeyDown = (event) => {
      // Check for F12 key
      if (event.keyCode === 123) {
        event.preventDefault();
      }
      // Check for Ctrl+Shift+I, Ctrl+Shift+J, Ctrl+U
      if ((event.ctrlKey && event.shiftKey && (event.keyCode === 73 || event.keyCode === 74)) || 
          (event.ctrlKey && event.keyCode === 85)) {
        event.preventDefault();
      }
    };

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      // Cleanup the event listener on component unmount
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('contextmenu', (event) => event.preventDefault());
    };
  }, []);

  return null; // This component does not render anything
};
