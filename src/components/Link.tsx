interface LinkProps {
  url: string;
  title: string;
  color?: string;
}

function Link(props: LinkProps) {
  let className = props.color + " p-0.5 pb-1";
  return (
    <a className={className} href={props.url}>
      {props.title}
    </a>
  );
}

export default Link;
