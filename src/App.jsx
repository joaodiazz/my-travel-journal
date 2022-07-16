import Card from "./components/Card";
import Navbar from "./components/Navbar";
import data from "./data";

const App = () => {
  const cards = data.map((e) => {
    return <Card key={e.id} items={e} />;
  });

  return (
    <div>
      <Navbar />
      <section>{cards}</section>
    </div>
  );
};

export default App;
