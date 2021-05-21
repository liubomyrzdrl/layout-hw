import { useLayout } from "./utils/useLayout";
import { v4 as uuid } from "uuid"
import "./App.css";

function App() {
  const { columns } = useLayout();
  const blocksOfLayout = Array(6).fill().map(() => <div key={uuid()} className="block"></div>)

  return (
    <div className="App">
      <div className={`layout layout-col${columns}`}>
          {blocksOfLayout}
      </div>
    </div>
  );
}

export default App;
