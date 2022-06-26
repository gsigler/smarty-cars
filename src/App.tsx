import Section from "./components/Section";
import stories from "./Stories.json";

function App() {
  return (
    <div className="bg-slate-800 h-100% text-slate-300 font-['Nanum_Gothic']">
      <div className="p-10">
        <Section stories={stories.breaking} />
        <h1 className="text-2xl p-6 text-center pb-0">
          <Section stories={stories.headlines} />
        </h1>
        <h1 className="text-2xl md:text-7xl md:p-20 p-2 pt-0 text-center font-['Press_Start_2P']">
          Smarty Cars
        </h1>
        <div className="flex flex-col md:flex-row">
          <div className="grow">
            <Section stories={stories.leftSection} />
          </div>
          <div className="border-r mx-6 border-slate-300"></div>
          <div className="grow">
            <Section stories={stories.middleSection} />
          </div>
          <div className="border-r mx-6 border-slate-300"></div>
          <div className="grow">
            <Section stories={stories.rightSection} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
