const lang = [
    {
        lang: 'en',
        notification: {
            alert: 'Alert',
            successfulLogin: "Successful login",
            incorrectPassword: "Incorrect password",
            userNotFound: "User not found",
            missingFields: "Missing fields",
            usernameAlreadyExists: "Username already exists",
            emailAlreadyExists: "Email already exists",
            successfulRegister: "Registration successful",
            successfulImgChange: "Profile picture has been changed successfully",
            successfulFullnameChange: "Fullname has been changed successfully",
            successfulLangChange: "Language has been changed successfully",
            sessionNotFound: "There was an error during request",
            serverIsNotAvailable: "Server is not available",
        },
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
                }
            }
        },
        register: {
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
                }
            },
            stepTwo: {
                title: "Set up your profile picture",
                inputs: {
                    img: "Select profile image"
                },
                buttons: {
                    done: "Done",
                    skip: "Skip"
                }
            },
            stepThree: {
                title: "Set up your profile fullname",
                inputs: {
                    fullname: "Fullname",
                },
                buttons: {
                    done: "Done",
                    skip: "Skip"
                }
            },
            stepFour: {
                title: "Set up your profile language",
                inputs: {
                    language: "Select language"
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
        notification: {
            alert: 'Уведомление',
            successfulLogin: "Вы успешно вошли в аккаунт",
            incorrectPassword: "Неправильный пароль",
            userNotFound: "Пользователей с таким логином не существует",
            missingFields: "Заполните все поля",
            usernameAlreadyExists: "Данный логин уже занят",
            emailAlreadyExists: "Данная почта уже занята",
            successfulRegister: "Успешная регистрация",
            successfulImgChange: "Аватар аккаунта был изменен успешно",
            successfulFullnameChange: "ФИО аккаунта был изменен успешно",
            successfulLangChange: "Язык аккаунта был изменен успешно",
            sessionNotFound: "Произошла ошибка в ходе запроса",
            serverIsNotAvailable: "Сервер недоступен",
        },
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
                }
            },
            stepTwo: {
                title: "Настройте ваш аватар",
                inputs: {
                    img: "Выберите аватарку"
                },
                buttons: {
                    done: "Готово",
                    skip: "Пропустить"
                }
            },
            stepThree: {
                title: "Настройте ваш ФИО",
                inputs: {
                    fullname: "ФИО"
                },
                buttons: {
                    done: "Готово",
                    skip: "Пропустить"
                }
            },
            stepFour: {
                title: "Настройте ваш язык",
                inputs: {
                    language: "Выберите язык"
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