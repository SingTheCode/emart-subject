import React from "react";
import { RecoilRoot } from "recoil";

import HomeContainer from "components/pages/Home";

function App() {
  return (
    <RecoilRoot>
      <div className="App">
        <HomeContainer />
      </div>
    </RecoilRoot>
  );
}

export default App;
