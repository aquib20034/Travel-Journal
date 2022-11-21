import './App.css';
import Card from './components/Card';
import CardsData from './database/Record.js';

function App() {

  const cards = CardsData.map(function(item){
    return <Card 
    key={item.id}
    {...item}
  />



  })
  return (
    <div className="App">
      <section className="cards-list">
        <h1 className="card--main-heading">Travel Journal</h1>
        {cards}
      </section>
     
    </div>
  );
}

export default App;
