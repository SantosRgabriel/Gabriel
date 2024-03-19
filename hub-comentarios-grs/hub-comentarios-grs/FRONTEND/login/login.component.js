const getLoginInputs = () => {
    return {
        username: document.getElementById("inputUsername"),
        password: document.getElementById("inputPassword"),
    };
};

const handleLogin = () => {
    event.preventDefault();
    const { username,   password } = getLoginInputs();

    const user = new User(username.value, password.value);

};

const LoginComponent = {
    run: () => {
        const formLogin = document.getElementById("formLogin");
        formLogin.addEventListener("submit", handle);
    }
} 

export {LoginComponent};