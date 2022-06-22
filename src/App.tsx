import Section from "./components/Section";
import stories from "./Stories.json";

function App() {

  return (
    <div className="">
      <Section stories={stories.breaking} />
      <Section stories={stories.headlines}/> 
      <h1 className="text-7xl p-6">Smarty Cars</h1>
      <div className="grid grid-cols-3">
        <Section stories={stories.leftSection} />
        <Section stories={stories.middleSection} />
        <Section stories={stories.rightSection} />
      </div>
    </div>
  );
}

export default App;
