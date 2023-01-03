import { useCallback, useEffect, useState } from "react"
import { useTranslation } from "react-i18next"
import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import { authByUsernameSliceReducer } from "features/AuthByUsername/model/slice/AuthByUsernameSlice"
import { getAuthData } from "entities/User"
import { RoutePaths } from "shared/config/routeConfig/routeConfig"
import { useDynamicModuleLoader } from "shared/lib/useDynamicModuleLoader/useDynamicModuleLoader "
import { Button, ButtonVariant } from "shared/ui/Button/Button"
import { Paper } from "shared/ui/Paper/Paper"
import { LoginForm } from "../LoginForm/LoginForm"
import { RegistrationForm } from "../RegistrationForm/RegistrationForm"
import styles from "./AuthorizationByUsername.module.scss"

export const AuthorizationByUsername = () => {
  useDynamicModuleLoader({
    reducers: { authByUsername: authByUsernameSliceReducer },
  })
  const authData = useSelector(getAuthData)
  const navigate = useNavigate()
  const { t } = useTranslation()
  const [isLoginSelect, selIsLoginSelect] = useState(true)

  const hundleSelectLogin = useCallback(() => {
    selIsLoginSelect(true)
  }, [])

  const hundleSelectRegistration = useCallback(() => {
    selIsLoginSelect(false)
  }, [])
  
  useEffect(() => {
    if (authData) navigate(RoutePaths.my_profile)
  }, [authData, navigate])

  return (
    <Paper className={styles.AuthorizationByUsername}>
      <div className={styles.selectTypeAuth}>
        <Button
          variant={ButtonVariant.OUTLINE}
          onClick={hundleSelectRegistration}
        >
          {t("Registration")}
        </Button>
        <Button variant={ButtonVariant.OUTLINE} onClick={hundleSelectLogin}>
          {t("Login")}
        </Button>
      </div>
      <div className={styles.content}>
        {isLoginSelect ? <LoginForm /> : <RegistrationForm />}
      </div>
    </Paper>
  )
}
