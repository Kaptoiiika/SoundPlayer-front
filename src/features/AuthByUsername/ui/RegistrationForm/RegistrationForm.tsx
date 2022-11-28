import { getAuthByUsernameState } from "../../model/selectors/getAuthByUsernameState/getAuthByUsernameState"
import { useTranslation } from "react-i18next"
import { Button } from "shared/ui/Button/Button"
import { Input } from "shared/ui/Input/Input/Input"
import styles from "./RegistrationFrom.module.scss"
import { useSelector } from "react-redux"
import { useCallback } from "react"
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch/useAppDispatch"
import { authByUsernameSliceActions } from "features/AuthByUsername/model/slice/AuthByUsernameSlice"
import { registrationByUsername } from "features/AuthByUsername/model/services/registrationByUsernameAndEmail/registrationByUsernameAndEmail"
import { Typography, TypographyTypes } from "shared/ui/Typography/Typography"

export const RegistrationForm = () => {
  const { t } = useTranslation()
  const { username, email, password, registrationError, isloading } =
    useSelector(getAuthByUsernameState)
  const dispatch = useAppDispatch()

  const changeUsername = useCallback(
    (value: string) => {
      dispatch(authByUsernameSliceActions.setUsername(value))
    },
    [dispatch]
  )

  const changePassword = useCallback(
    (value: string) => {
      dispatch(authByUsernameSliceActions.setPassword(value))
    },
    [dispatch]
  )

  const changeEmail = useCallback(
    (value: string) => {
      dispatch(authByUsernameSliceActions.setEmail(value))
    },
    [dispatch]
  )

  const hundleRegistration = () => {
    dispatch(registrationByUsername({ password, username, email: email || "" }))
  }

  return (
    <form className={styles.RegistrationForm}>
      <Input
        onValueChange={changeUsername}
        label={t("Username")}
        type="text"
        value={username}
      />
      <Input
        onValueChange={changeEmail}
        label={"Email"}
        type="email"
        value={email}
      />
      <Input
        onValueChange={changePassword}
        label={t("Password")}
        type="password"
        value={password}
      />
      {registrationError && (
        <Typography type={TypographyTypes.ERROR}>
          {t(registrationError)}
        </Typography>
      )}
      <Button
        disabled={isloading}
        loader={isloading}
        onClick={hundleRegistration}
      >
        {t("Registration")}
      </Button>
    </form>
  )
}
