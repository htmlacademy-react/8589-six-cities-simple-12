import {Link} from 'react-router-dom';

const NotFoundScreen = (): JSX.Element => (
  <>
    <h1>404 Page not found</h1>
    <p>you can come back to <Link to="/">Homepage</Link></p>
  </>
);

export default NotFoundScreen;
