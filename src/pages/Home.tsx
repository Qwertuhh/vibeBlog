import Spline from "@splinetool/react-spline";

const Home = () => {
  return (
    <>
      <Spline
        scene="https://prod.spline.design/R4OYDRbih7gpvZYD/scene.splinecode"
        onLoad={(spline) => {
          const scene = spline;
          scene.setZoom(0.6);
        }}
      />
    </>
  );
};

export default Home;
