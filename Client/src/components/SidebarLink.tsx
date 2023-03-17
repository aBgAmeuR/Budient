import { ReactNode } from 'react';
import { Link } from 'react-router-dom';

type Props = {
  children: ReactNode;
  page: string;
  focus: boolean;
};

const SidebarLink = (props: Props) => {
  return (
    <Link to={`/${props.page}`} className={props.focus ? 'focus' : ''}>
      {props.children}
    </Link>
  );
};

export default SidebarLink;