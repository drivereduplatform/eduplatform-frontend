const lang = [
    {
        lang: 'en',
        login: {
            title: "Login to your account",
            inputs: {
                username: "Username",
                password: "Password"
            },
            buttons: {
                rememberMe: "Remember me",
                login: "Login",
                dontHaveAccount: "Do not have an account?"
            },
            notification: {
                successfulLogin: "Successful login",
                incorrectPassword: "Incorrect password",
                userNotFound: "User not found"
            },
            steps: {
                loginToAccount: "Login to account"
            }
        },
        register: {
            title: "Register",
            inputs: {
                username: "Username",
                password: "Password",
                confirmPassword: "Confirm password"
            },
            buttons: {
                register: "Register",
                alreadyHaveAccount: "Already have an account?"
            },
            notification: {
                usernameAlreadyExists: "Username already exists",
                emailAlreadyExists: "Email already exists",
                successfulRegister: "Registration successful"
            },
            steps: {
                loginToAccount: "Register",
                setupAccount: "Set up your account"
            }
        }
    },
    {
        lang: 'ru',
        login: {
            title: "Войдите в аккаунт",
            inputs: {
                username: "Логин",
                password: "Пароль"
            },
            buttons: {
                rememberMe: "Запомните меня",
                login: "Войти",
                dontHaveAccount: "У вас нету аккаунта?"
            },
            notification: {
                successfulLogin: "Вы успешно вошли в аккаунт",
                incorrectPassword: "Неправильный пароль",
                userNotFound: "Пользователя с таким логином не существует"
            },
            steps: {
                loginToAccount: "Войдите в аккаунт"
            }
        },
        register: {
            title: "Зарегистрироваться",
            inputs: {
                username: "Логин",
                password: "Пароль",
                confirmPassword: "Подтверждение пароля"
            },
            buttons: {
                register: "Зарегистрироваться",
                alreadyHaveAccount: "У вас уже есть аккаунт?"
            },
            notification: {
                usernameAlreadyExists: "Данный логин уже занят",
                emailAlreadyExists: "Данная почта уже занята",
                successfulRegister: "Успешная регистрация"
            },
            steps: {
                loginToAccount: "Зарегистрироваться",
                setupAccount: "Настройте ваш аккаунт"
            }
        }
    }
]

export default lang