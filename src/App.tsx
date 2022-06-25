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
        <h1 className="text-7xl p-20 pt-0 text-center  font-['Press_Start_2P']">
          Smarty Cars
        </h1>
        <div className="flex">
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
