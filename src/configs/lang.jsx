const lang = [
    {
        lang: 'en',
        login: {
            steps: {
                loginToAccount: "Login to account"
            },
            stepOne: {
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
                }
            }
        },
        register: {
            steps: {
                registerAccount: "Register",
                setupAccount: "Set up your account"
            },
            stepOne: {
                title: "Register",
                inputs: {
                    username: "Username",
                    password: "Password",
                    confirmPassword: "Confirm password",
                    email: "Email"
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
            },
            stepTwo: {
                title: "Setup your account",
                inputs: {
                    fullname: "Fullname",
                    language: "Select language",
                    img: "Select profile image"
                },
                buttons: {
                    done: "Done",
                    skip: "Skip"
                }
            }
        }
    },
    {
        lang: 'ru',
        login: {
            steps: {
                loginToAccount: "Войдите в аккаунт"
            },
            stepOne: {
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
                }
            }
        },
        register: {
            steps: {
                registerAccount: "Зарегистрироваться",
                setupAccount: "Настройте ваш аккаунт"
            },
            stepOne: {
                title: "Зарегистрироваться",
                inputs: {
                    username: "Логин",
                    password: "Пароль",
                    confirmPassword: "Подтверждение пароля",
                    email: "Электронная почта"
                },
                buttons: {
                    register: "Зарегистрироваться",
                    alreadyHaveAccount: "У вас уже есть аккаунт?"
                },
                notification: {
                    usernameAlreadyExists: "Данный логин уже занят",
                    emailAlreadyExists: "Данная почта уже занята",
                    successfulRegister: "Успешная регистрация"
                }
            },
            stepTwo: {
                title: "Настройте ваш аккаунт",
                inputs: {
                    fullname: "ФИО",
                    language: "Выберите язык",
                    img: "Выберите аватарку"
                },
                buttons: {
                    done: "Готово",
                    skip: "Пропустить"
                }
            }
        }
    }
]

export default lang