import { getAuthByUsernameState } from "../../model/selectors/getAuthByUsernameState/getAuthByUsernameState"
import { useTranslation } from "react-i18next"
import { useSelector } from "react-redux"
import { Button, ButtonVariant } from "shared/ui/Button/Button"
import { Input } from "shared/ui/Input/Input/Input"
import styles from "./LoginForm.module.scss"
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch/useAppDispatch"
import { useCallback } from "react"
import { authByUsernameSliceActions } from "../../model/slice/AuthByUsernameSlice"
import { loginByUsernameOrEmail } from "../../model/services/loginByUsernameOrEmail/loginByUsernameOrEmail"
import { Typography, TypographyTypes } from "shared/ui/Typography/Typography"

export const LoginForm = () => {
  const { t } = useTranslation()
  const { identifier, password, loginError, isloading } = useSelector(
    getAuthByUsernameState
  )
  const dispatch = useAppDispatch()

  const changeIdentifier = useCallback(
    (value: string) => {
      dispatch(authByUsernameSliceActions.setIdentifier(value))
    },
    [dispatch]
  )

  const changePassword = useCallback(
    (value: string) => {
      dispatch(authByUsernameSliceActions.setPassword(value))
    },
    [dispatch]
  )

  const hundleLogin = () => {
    dispatch(loginByUsernameOrEmail({ password, identifier }))
  }

  return (
    <form className={styles.LoginForm}>
      <Input
        onValueChange={changeIdentifier}
        label={t("UsernameOrEmail")}
        type="text"
        value={identifier}
      />
      <Input
        onValueChange={changePassword}
        label={t("Password")}
        type="password"
        value={password}
      />
      {loginError && (
        <Typography type={TypographyTypes.ERROR}>{t(loginError)}</Typography>
      )}
      <Button
        variant={ButtonVariant.PRIMARY}
        onClick={hundleLogin}
        disabled={isloading}
        loader={isloading}
      >
        {t("Login")}
      </Button>
    </form>
  )
}
