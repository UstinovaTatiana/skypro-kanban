import React from "react";
import {
  PopUserWrapper,
  PopUserName,
  PopUserMail,
  PopUserTheme,
  PopUserThemeLabel,
  PopUserCheckbox,
  PopUserCloseBtn,
} from "./PopUser.styled";

export default function PopUser({
  open,
  onClose,
  onLogout,
  name = "",
  email = "",
}) {
  if (!open) return null;

  return (
    <PopUserWrapper
      id="user-set-target"
      role="dialog"
      aria-label="Настройки пользователя"
    >
      <PopUserName>{name}</PopUserName> <PopUserMail>{email}</PopUserMail>
      <PopUserTheme>
        <PopUserThemeLabel>Темная тема</PopUserThemeLabel>
        <PopUserCheckbox />
      </PopUserTheme>
      <PopUserCloseBtn
        type="button"
        onClick={() => {
          console.log('Кнопка "Выйти" нажата');
          onClose?.();
          onLogout?.();
        }}
      >
        Выйти
      </PopUserCloseBtn>
    </PopUserWrapper>
  );
}
