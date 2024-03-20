import { User } from "../models/user.models.js";

const getLoginInputs = () => {
  return {
    username: document.getElementById("username"),
    password: document.getElementById("password"), 
  };
};

const hadleShowHide = () => {
  const newCommentTag = document.getElementById("form-comentario");
  const loginTag = document.getElementById("login-form");

  if (newCommentTag.classList.contains("disabled")) {
    newCommentTag.classList.remove("disabled");
    loginTag.classList.add("disabled");
  } else {
    newCommentTag.classList.add("disabled");
    loginTag.classList.remove("disabled");

    
  }
};

const handleLogin = (event) => {
  event.preventDefault();
  const { username, password } = getLoginInputs();

  const user = new User(null,username.value, password.value,null,null);

  hadleShowHide();
};

const LoginComponent = {
  run: () => {
    const formLogin = document.getElementById("formLogin");
    formLogin.addEventListener('submit', handleLogin)
  }
};

export { LoginComponent };
