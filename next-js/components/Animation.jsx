import { useState, useEffect } from 'react';
import Image from 'next/image';


function Animation() {
  const [position, setPosition] = useState(0);

  function moveElement() {
    // const audio = new Audio('/music.mp4');
    // audio.loop = true;

    setPosition((position) => (position + 1) % (window.innerWidth - 100));
    
    window.requestAnimationFrame(moveElement);
    // audio.play();
}

  useEffect(() => {
    window.requestAnimationFrame(moveElement);
  }, []);

  return (
    <Image
      style={{
        position: 'fixed',
        left: `${position}px`,
        width: '70px',
        height: '70px',
      }}
      src='/birthday-cake.svg'
      width={100}
      height={70}
      alt='birthday-cake'
    />
  );
}

export default Animation;




