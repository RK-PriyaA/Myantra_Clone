import Nav from './components/Nav';
import './components/myntraIndex.css'
import Content from './components/Content';
import data from './components/data';
import { useState } from 'react';
import Filters from './components/Filters';
import Sorting from './components/Sorting';


function App() {
  const [Data,setData] = useState(data);
  return (
    <div className="App">
       <Nav/>
      <section>
      <Filters Data={Data}/>
        <div>
          <Sorting Data={Data}/>
          <Content Data={Data}/>
        </div>
      </section>
    </div>
  );
}

export default App;
