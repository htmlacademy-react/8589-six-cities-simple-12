import Logo from '../../components/logo/logo';
import LogedUserPanel from '../../components/loged-user-panel/loged-user-panel';

const Header = (): JSX.Element => (
  <header className="header">
    <div className="container">
      <div className="header__wrapper">
        <div className="header__left">
          <Logo />
        </div>
        <LogedUserPanel />
      </div>
    </div>
  </header>
);

export default Header;
