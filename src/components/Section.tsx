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
          return <hr className="w-full"></hr>;
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
