import { useLayout } from "./utils/useLayout";
import "./App.css";

function App() {
  const { columns } = useLayout();
  const blocksOfLayout = Array(6).fill().map(() => <div className="block"></div>)
  return (
    <div className="App">
      <div className={`layout layout-col${columns}`}>
          {blocksOfLayout}
      </div>
    </div>
  );
}

export default App;
