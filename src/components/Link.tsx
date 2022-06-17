interface LinkProps {
  url: string;
  text: string;
}

function Link(props: LinkProps) {
  return <a href={props.url}>{props.text}</a>;
}

export default Link;
