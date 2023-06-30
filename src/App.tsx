import React from 'react';
import Accordion, {accordionData} from "ReactTasks/Accordion/Accordion";


const currentComponent = <Accordion props={accordionData}/>

function App() {
  return (
    <div>
      {currentComponent}
    </div>
  );
}

export default App;
