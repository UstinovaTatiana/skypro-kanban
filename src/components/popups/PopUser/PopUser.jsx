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

export default function PopUser({ open, onClose, name = "", email = "" }) {
  if (!open) return null;

  return (
    <PopUserWrapper
      id="user-set-target"
      role="dialog"
      aria-label="Настройки пользователя"
    >
      {" "}
      <PopUserName>{name}</PopUserName> <PopUserMail>{email}</PopUserMail>{" "}
      <PopUserTheme>
        {" "}
        <PopUserThemeLabel>
          Темная тема
        </PopUserThemeLabel> <PopUserCheckbox />{" "}
      </PopUserTheme>{" "}
      <PopUserCloseBtn type="button" onClick={onClose}>
        {" "}
        Выйти{" "}
      </PopUserCloseBtn>{" "}
    </PopUserWrapper>
  );
}

// export default function PopUser({ open, onClose, name = "", email = "" }) {
//   if (!open) return null;

//   return (
//     <div
//       className="pop-user-set"
//       id="user-set-target"
//       role="dialog"
//       aria-label="Настройки пользователя"
//     >
//       <p className="pop-user-set__name">{name}</p>{" "}
//       <p className="pop-user-set__mail">{email}</p>
//       <div className="pop-user-set__theme">
//         <p>Темная тема</p>
//         <input type="checkbox" className="checkbox" name="checkbox" />
//       </div>
//       <button type="button" className="_hover03" onClick={onClose}>
//         {" "}
//         Выйти{" "}
//       </button>
//     </div>
//   );
// }
