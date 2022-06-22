interface LinkProps {
  url: string;
  title: string;
}

function Link(props: LinkProps) {
  return <a href={props.url}>{props.title}</a>;
}

export default Link;
