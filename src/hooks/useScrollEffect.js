import { useEffect, useState } from 'react';

const useScrollEffect = () => {
    const [flashingTriggered, setFlashingTriggered] = useState(false);

    useEffect(() => {
        const startColor = { r: 112, g: 144, b: 145 };
        const endColor = { r: 212, g: 174, b: 121 };

        const handleScroll = () => {
            const scrollTop = window.scrollY;
            const maxScrollTop = document.documentElement.scrollHeight - window.innerHeight;
            const scrollPercent = Math.min(scrollTop / maxScrollTop, 1);

            const red = Math.round(startColor.r * (1 - scrollPercent) + endColor.r * scrollPercent);
            const green = Math.round(startColor.g * (1 - scrollPercent) + endColor.g * scrollPercent);
            const blue = Math.round(startColor.b * (1 - scrollPercent) + endColor.b * scrollPercent);
            
            const newColor = `rgb(${red}, ${green}, ${blue})`;
            document.documentElement.style.setProperty('--scroll-thumb-color', newColor);
            
            const navColor = `rgb(${red}, ${green}, ${blue}, 0.3)`;
            document.documentElement.style.setProperty('--nav-item-color', navColor);

            if (!flashingTriggered && (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight)) {
                const bottomElement = document.getElementById("section5");
                const bottomElement2 = document.getElementById("section5b");
                if (bottomElement && bottomElement2) {
                    bottomElement.classList.add("flash");
                    bottomElement2.classList.add("flash");
                    setFlashingTriggered(true);
                    setTimeout(() => {
                        bottomElement.classList.remove("flash");
                        bottomElement2.classList.remove("flash");
                    }, 1000);
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [flashingTriggered]);

    return { flashingTriggered };
};

export default useScrollEffect;
