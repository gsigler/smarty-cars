import { ReactElement } from "react";
import { Story } from "../types/Story";
import Link from "./Link";


interface SectionProps {
  stories: Story[];
}

function Section(props: SectionProps) {

  let linksToDisplay = props.stories.map(function (story) {
    if (story.image) {
       return <div ><img className="w-64 h-64" src={story.image} /><Link url={story.link || ''} title={story.headline || ''} /></div>
    } else {
      return <div ><Link url={story.link || ''} title={story.headline || ''} /></div>

    }
  });
    return <><div className="">{linksToDisplay}</div></>;
}

export default Section;
