import Lottie from "lottie-react";
import RenderAnimation from "assets/animation/rendering.json";

const Rendering = () => {
  return (
    <div className="container-rendering">
        <Lottie className="no-data-animation" style={{width: 100}} animationData={RenderAnimation} loop={true} />
        <p className="text-gray-600 fs-base text-center fw-bold">Rendering, Mohon tunggu ....</p>
    </div>
  )
}

export default Rendering;