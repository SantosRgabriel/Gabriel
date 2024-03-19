const handleLogin = () => {


};

const LoginComponent = {
    run: () => {
        const formLogin = document.getElementById("formLogin");
        formLogin.addEventListener("submit", handle);
    }
} 

export {LoginComponent};