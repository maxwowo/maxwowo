const calculateNumParticles = () => {
  const numPixels = window.innerHeight * window.innerWidth;
  return Math.floor(numPixels / 10000);
};

export default calculateNumParticles;
