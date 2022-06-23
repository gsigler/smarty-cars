import Section from "./components/Section";
import stories from "./Stories.json";

function App() {
  return (
    <div className="pt-10">
      <Section stories={stories.breaking} />
      <h1 className="text-2xl p-6 text-center pb-0">
        <Section stories={stories.headlines} />
      </h1>
      <h1 className="text-7xl p-12 text-center pt-0">Smarty Cars</h1>
      <div className="flex">
        <div className="grow">
          <Section stories={stories.leftSection} />
        </div>
        <div className="border-r-2 mx-6"></div>
        <div className="grow">
          <Section stories={stories.middleSection} />
        </div>
        <div className="border-r-2 mx-6"></div>
        <div className="grow">
          <Section stories={stories.rightSection} />
        </div>
      </div>
    </div>
  );
}

export default App;
