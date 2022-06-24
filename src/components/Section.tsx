import { ReactElement } from "react";
import { Story } from "../types/Story";
import Link from "./Link";

interface SectionProps {
  stories: Story[];
  width: string;
}

function Section(props: SectionProps) {
  let className = "flex flex-col " + props.width;
  return (
    <div className={className}>
      {props.stories.map(function (story, storyId) {
        if (Object.keys(story).length === 0) {
          return <hr className="w-full border-slate-300"></hr>;
        }
        return (
          <>
            {story.image && <img className="w-64 h-64" src={story.image} />}
            <Link
              color={story.color}
              url={story.link || ""}
              title={story.headline || ""}
            />
          </>
        );
      })}
    </div>
  );
}

export default Section;
