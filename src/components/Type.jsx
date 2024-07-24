import React, { useEffect, useRef } from 'react';
import Typed from 'typed.js';
function Type() {
  const typedElement = useRef(null);

  useEffect(() => {
    const options = {
      strings: ['<i>MERN stack Developer</i>', ' Frontend Developer', ' Back end Developer'],
      typeSpeed: 50,
      backSpeed: 100,
      backDelay: 1000,
      loop: true,
    };

    const typed = new Typed(typedElement.current, options);

    // Cleanup function to avoid memory leaks
    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div>
      <span ref={typedElement}></span>
    </div>
  );
}

export default Type;
