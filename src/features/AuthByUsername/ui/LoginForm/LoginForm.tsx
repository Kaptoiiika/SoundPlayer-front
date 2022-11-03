import { useTranslation } from "react-i18next"
import { Button } from "shared/ui/Button/Button"
import { Input } from "shared/ui/Input/Input"
import styles from "./LoginForm.module.scss"

export const LoginForm = () => {
  const { t } = useTranslation()
  const { username, password } = { username: "", password: "" }

  const hundleLogin = () => {}

  return (
    <form className={styles.LoginForm}>
      <Input label={t("Username")} type="text" value={username} />
      <Input label={t("Password")} type="password" value={password} />

      <Button onClick={hundleLogin}>{t("Login")}</Button>
    </form>
  )
}
