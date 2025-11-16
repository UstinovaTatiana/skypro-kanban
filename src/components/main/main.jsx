import React from "react";
import Column from "../column/Column";
import { MainWrapper, Container, MainBlock, MainContent } from "./Main.styled";

// export default function Main({ columns = [] }) {
//   return (
//     <main className="main">
//       <div className="container">
//         <div className="main__block">
//           <div className="main__content">
//             {columns.map((col) => (
//               <Column key={col.id} title={col.title} cards={col.cards} />
//             ))}
//           </div>
//         </div>
//       </div>
//     </main>
//   );
// }

export default function Main({ columns = [] }) {
  return (
    <MainWrapper>
      <Container>
        <MainBlock>
          <MainContent>
            {columns.map((col) => (
              <div key={col.id} className="main__column">
                <Column key={col.id} title={col.title} cards={col.cards} />{" "}
              </div>
            ))}
          </MainContent>
        </MainBlock>
      </Container>
    </MainWrapper>
  );
}
