import React from 'react';
import Tabs from './Components/Tabs';


const tabs = [
  { title: "Tab 1", content: "This is tab 1" },
  { title: "Tab 2", content: "This is tab 2" },
  { title: "Tab 3", content: "This is tab 3" },
]


const App = () => {

  return(
    <div>
          <Tabs tabs={tabs}/>
    </div>
  )
}

export default App; 