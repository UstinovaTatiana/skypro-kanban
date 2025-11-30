import { useNavigate } from "react-router-dom";

const Header = ({ setIsAuth }) => {
  const navigate = useNavigate();

  function handleLogout(e) {
    e.preventDefault();
    setIsAuth(false);
    navigate("/sign-in");
  }

  return (
    <SHeader>
      <div className="header__actions">
        <Button onClick={handleLogout} type="tertiary" text="Выйти" />
      </div>
    </SHeader>
  );
};

export default Header;
