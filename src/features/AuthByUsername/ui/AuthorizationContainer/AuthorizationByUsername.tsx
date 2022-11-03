import { useCallback, useState } from "react"
import { useTranslation } from "react-i18next"
import { classNames } from "shared/lib/classNames/classNames"
import { Button, ButtonVariant } from "shared/ui/Button/Button"
import { Paper } from "shared/ui/Paper/Paper"
import { LoginForm } from "../LoginForm/LoginForm"
import { RegistrationForm } from "../RegistrationForm/RegistrationForm"
import styles from "./AuthorizationByUsername.module.scss"

type AuthorizationByUsernameProps = {
  className?: string
}

export const AuthorizationByUsername = (
  props: AuthorizationByUsernameProps
) => {
  const { className = "" } = props
  const { t } = useTranslation()
  const [isLoginSelect, selIsLoginSelect] = useState(true)

  const hundleSelectLogin = useCallback(() => {
    selIsLoginSelect(true)
  }, [])

  const hundleSelectRegistration = useCallback(() => {
    selIsLoginSelect(false)
  }, [])

  return (
    <div className={classNames([styles.AuthorizationByUsername, className])}>
      <Paper className={styles.container}>
        <div className={styles.selectTypeAuth}>
          <Button variant={ButtonVariant.OUTLINE} onClick={hundleSelectLogin}>
            {t("Registration")}
          </Button>
          <Button
            variant={ButtonVariant.OUTLINE}
            onClick={hundleSelectRegistration}
          >
            {t("Login")}
          </Button>
        </div>
        <div className={styles.content}>
          {isLoginSelect ? <RegistrationForm /> : <LoginForm />}
        </div>
      </Paper>
    </div>
  )
}
