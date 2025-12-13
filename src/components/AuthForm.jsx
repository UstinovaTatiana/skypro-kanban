import { Link, useNavigate } from "react-router-dom";
import BaseButton from "./Button";
import BaseInput from "./Input";
import {
  Wrapper,
  ContainerRegister,
  Modal,
  Block,
  ModalTitle,
  FormLogin,
} from "./AuthForm.styled";

const AuthForm = ({ isRegister, setIsAuth }) => {
  const navigate = useNavigate();
  const handleLogin = (e) => {
    e.preventDefault();
    setIsAuth(true);
    navigate("/");
  };

  return (
    <Wrapper>
      <ContainerRegister>
        <Modal>
          <Block>
            <ModalTitle>{isRegister ? "Регистрация" : "Вход"}</ModalTitle>
            <FormLogin id="formLogUp" action="#">
              {isRegister && (
                <BaseInput
                  tag="input"
                  className="modal__input first-name"
                  type="text"
                  name="first-name"
                  id="first-name"
                  placeholder="Имя"
                />
              )}
              <BaseInput
                tag="input"
                className="modal__input login"
                type="text"
                name="login"
                id="loginReg"
                placeholder="Эл. почта"
              />
              <BaseInput
                tag="input"
                className="modal__input password-first"
                type="password"
                name="password"
                id="passwordFirst"
                placeholder="Пароль"
              />
              <BaseButton
                onClick={handleLogin}
                type="secondary"
                fullWidth={true}
                className="modal__btn-Register-ent _hover01"
                id="RegisterEnter"
                text={isRegister ? "Зарегистрироваться" : "Войти"}
              />
              {!isRegister && (
                <div className="modal__form-group">
                  <p>Нужно зарегистрироваться?</p>
                  <Link to="/Register">Регистрируйтесь здесь</Link>
                </div>
              )}
              {isRegister && (
                <div className="modal__form-group">
                  <p>
                    Уже есть аккаунт? <Link to="/Login">Войдите здесь</Link>
                  </p>
                </div>
              )}
            </FormLogin>
          </Block>
        </Modal>
      </ContainerRegister>
    </Wrapper>
  );
};

export default AuthForm;
