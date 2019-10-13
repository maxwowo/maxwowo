const calculateNumParticles = () => {
  const numPixels = window.innerHeight * window.innerWidth;
  return Math.floor(numPixels / 8000);
};

export default calculateNumParticles;
