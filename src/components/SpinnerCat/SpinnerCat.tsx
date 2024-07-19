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

  // const Spinner = () => {
//   return (
//     <SpinnerWrapper>
//       <div className="spinner"></div>
//     </SpinnerWrapper>
//   );
// };

// export default Spinner;