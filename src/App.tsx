import { BrowserRouter, BrowserRouterProps, Route, Routes } from "react-router-dom";

import GlobalStyles from "./styles/GlobalStyles";
import Layout from "./components/Layout/Layout";

//pages

// import Home from "./pages/Home/Home";
// import About from "./pages/About/About";
// import Users from "./pages/Users/Users"


//Lessons import
// import Lesson06 from './lessons/Lesson06/Lesson06';
//import Lesson07 from './lessons/Lesson07/Lesson07';
//import Lesson08 from './lessons/Lesson08/Lesson08';
//import Lesson09 from "./lessons/Lesson09/Lesson09";
//import Lesson10 from "./lessons/Lesson10/Lesson10";
// import Lesson11 from "./lessons/Lesson11/Lesson11";
// import Lesson12 from "./lessons/Lesson12/Lesson12";
//import Lesson13 from "./lessons/Lesson13/Lesson13";
// import Lesson14 from "./lessons/Lessons14/Lesson14";
// import Lesson16 from "./lessons/Lesson16/Lesson16";
import Weather from "./pages/Weather/Weather";
//Homeworks import
//import HomeWork07 from './homeworks/homework07/HomeWork07';
//import HomeWork08 from './homeworks/homework08/HomeWork08';
//import HomeWork09 from './homeworks/homework09/HomeWork09';
//import HomeWork10 from "./homeworks/homework10/Homework10Meine"
// import HomeWork10 from "./homeworks/homework10/Homework10"
// import HomeWork11 from "./homeworks/homework11/Homework11";
// import HomeWork12 from "./homeworks/homework12/Homework12";
// import HomeWork14 from "./homeworks/homework14/Homework14";
function App() {
  return (
    <BrowserRouter>
    
      <GlobalStyles />
      {/* <Lesson06 /> */}
      {/* <Lesson07/> */}
      {/* <Lesson08/> */}
      {/* <Lesson09 /> */}
      {/* <Lesson10 /> */}
      {/* <Lesson11 /> */}
      {/* <Lesson12 /> */}
      {/* <Lesson13 /> */}
      {/* <Lesson14 /> */}
      
      {/* <HomeWork06 /> */}
      {/* <HomeWork07 /> */}
      {/* <HomeWork08 /> */}
      {/* <HomeWork09 /> */}
      {/* <HomeWork10 /> */}
      {/* <HomeWork10/> */}
      {/* <HomeWork10Meine/> */}
      {/* <HomeWork10/> */}
      {/* <HomeWork11/> */}
      {/* <HomeWork12/> */}
      {/* <HomeWork14/> */}
      {/* lesson 15 examples whith pages */}
       {/* <Layout>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/users' element={<Users />} />
          <Route path='/about' element={<About />} />
          <Route path='/clients' element={<Clients />} />
          <Route path='/clients/amazon' element={<Amazon />} />
          <Route path='/clients/facebook' element={<Facebook />} />
          <Route path='/clients/google' element={<Google />} />
          <Route path='*' element={'Page not found'} />
        </Routes>
      </Layout> */}
      {/* <Lesson16/> */}

      <Weather/>
      </BrowserRouter>
  );
}

export default App;
