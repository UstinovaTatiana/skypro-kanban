import React from "react";
import { GlobalStyle, Wrapper } from "./App.styled";
import Header from "./components/header/Header";
import PopNewCard from "./components/popups/PopNewCard/PopNewCard";
import PopBrowse from "./components/popups/PopBrowse/PopBrowse";
import Main from "./components/main/Main";
import PopExit from "./components/popups/PopExit/PopExit";
import Loader from "./components/Loader/loader";
import { columnsFromCardList } from "../data";

function App() {
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    const t = setTimeout(() => setLoading(false), 3000);
    return () => clearTimeout(t);
  }, []);

  return (
    <>
      {" "}
      <GlobalStyle />{" "}
      <Wrapper>
        {" "}
        {/*pop-up start */}
        <PopExit />
        <PopNewCard />
        <PopBrowse />
        {/* pop-up end */}
        <Header />
        <Loader loading={loading} />
        <Main columns={columnsFromCardList} />
      </Wrapper>
    </>
  );
}

export default App;

// function App() {
//   const [loading, setLoading] = React.useState(true);
//   React.useEffect(() => {
//     const t = setTimeout(() => setLoading(false), 3000);
//     return () => clearTimeout(t);
//   }, []);

//   return (
//     <>
//       <div className="wrapper">
//         {/*pop-up start */}

//         <PopExit />

//         <PopNewCard />

//         <PopBrowse />

//         {/* pop-up end */}

//         <Header />
//         <Loader loading={loading}></Loader>
//         <Main columns={columnsFromCardList} />
//       </div>
//     </>
//   );
// }
// export default App;
