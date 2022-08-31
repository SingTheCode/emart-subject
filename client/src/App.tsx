import { RecoilRoot } from "recoil";

import { worker } from "mocks/browser";
import Home from "components/pages/Home/Home";

worker.start();

function App() {
  return (
    <RecoilRoot>
      <div className="App">
        <Home />
      </div>
    </RecoilRoot>
  );
}

export default App;
