import { ReactElement } from "react";
import { Story } from "../types/Story";
import Link from "./Link";

interface SectionProps {
  stories: Story[];
}

function Section(props: SectionProps) {
  return (
    <div className="flex flex-col">
      {props.stories.map(function (story, storyId) {
        if (Object.keys(story).length === 0) {
          return <hr key={storyId} className="w-full border-slate-300"></hr>;
        }
        return (
          <div key={storyId} className="py-1.5">
            {story.image && <img className="h-48" src={story.image} />}
            <Link
              color={story.color}
              url={story.link || ""}
              title={story.headline || ""}
            />
          </div>
        );
      })}
    </div>
  );
}

export default Section;
