import {Link} from 'react-router-dom';
export default function LandingPage(props) {
  
  let navLinks = props.store.discussions.map(function(i) {
    return(
      <li>
        <Link to={i.url}>{i.data.discussionTitle}</Link>
      </li>
    );
  });

  return (
    <nav>
      <ul>
        {navLinks}
      </ul>
    </nav>
  );
}