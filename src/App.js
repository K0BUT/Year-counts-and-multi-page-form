import Footer from "./components/Footer";
import Cost from "./components/Costs/Cost";
import NewCost from "./components/NewCost/NewCost";
import React, {useState} from "react";


const INITIAL_COSTS = [
  {
    id: 'c1',
    date: new Date(2021, 2 , 12),
    description: "Холодильник",
    amount: 999.99,
  },
  {
    id: 'c2',
    date: new Date(2021, 11 , 25),
    description: "MacBook",
    amount: 1254.72,
  },
  {
    id: 'c3',
    date: new Date(2021, 3 , 1),
    description: "Джинсы",
    amount: 49.99,
  }
]

function App() {
  const [costs, setCosts] = useState(INITIAL_COSTS);

  const addCostHandler = (cost) => {
    setCosts(prevCosts => {
      return [cost, ...prevCosts]
    });
  }

  return (
    <div>
      <Footer />
      <NewCost onAddCost={addCostHandler}/>
      <Cost costs={costs}/>
    </div>
  );
}

export default App;
