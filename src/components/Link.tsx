interface LinkProps {
  url: string;
  title: string;
  color?: string;
}

function Link(props: LinkProps) {
  return <a className={props.color} href={props.url}>{props.title}</a>;
}

export default Link;
