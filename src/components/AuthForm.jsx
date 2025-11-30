import { Link, useNavigate } from "react-router-dom";
import BaseButton from "./Button";
import BaseInput from "./Input";
import {
  Wrapper,
  ContainerSignup,
  Modal,
  Block,
  ModalTitle,
  FormLogin,
} from "./AuthForm.styled";

const AuthForm = ({ isSignUp, setIsAuth }) => {
  const navigate = useNavigate();
  const handleLogin = (e) => {
    e.preventDefault();
    setIsAuth(true);
    navigate("/");
  };

  return (
    <Wrapper>
      <ContainerSignup>
        <Modal>
          <Block>
            <ModalTitle>{isSignUp ? "Регистрация" : "Вход"}</ModalTitle>
            <FormLogin id="formLogUp" action="#">
              {isSignUp && (
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
                className="modal__btn-signup-ent _hover01"
                id="SignUpEnter"
                text={isSignUp ? "Зарегистрироваться" : "Войти"}
              />
              {!isSignUp && (
                <div className="modal__form-group">
                  <p>Нужно зарегистрироваться</p>
                  <Link to="/sign-up">Регистрация здесь</Link>
                </div>
              )}
              {isSignUp && (
                <div className="modal__form-group">
                  <p>
                    Уже есть аккаунт? <Link to="/sign-in">Войдите здесь</Link>
                  </p>
                </div>
              )}
            </FormLogin>
          </Block>
        </Modal>
      </ContainerSignup>
    </Wrapper>
  );
};

export default AuthForm;
