import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

const Animation = () => {
    return(
        useGSAP(() => {
            gsap.from('.navigate', { y: -250, duration: 3, delay: 3 });
            gsap.from('.change', { duration: 5, scale: -1, rotation: 180, ease: 'bounce' });
            gsap.from('.back', { duration: 3, delay: 3, opacity: 0 });
            gsap.from('.cards', { duration: 2, delay: 1.2, x: '-400', ease: 'power2.inOut', opacity: 0 });
            gsap.from('.product-info', { duration: 2, delay: 1, x: '400', ease: 'power2.inOut', opacity: 0 });
          })
        )
};

export default Animation;