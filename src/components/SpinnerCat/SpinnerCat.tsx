import { SpinnerWrapperCat } from "./stylesCat";
import SpinerGif from "../../components/SpinnerCat/SpinerCat.gif";

const SpinnerCat = () => {
    return (
      <SpinnerWrapperCat>
        <div className="spinner" style={{ backgroundImage: `url(${SpinerGif})` }}></div>
      </SpinnerWrapperCat>
    );
  };
  
  export default SpinnerCat;

