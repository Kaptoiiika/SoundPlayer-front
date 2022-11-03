import { useTranslation } from "react-i18next"
import { Button } from "shared/ui/Button/Button"
import { Input } from "shared/ui/Input/Input"
import styles from "./RegistrationFrom.module.scss"

export const RegistrationForm = () => {
  const { t } = useTranslation()
  const { username, email, password } = {
    username: "",
    email: "",
    password: "",
  }

  const hundleRegistration = () => {}

  return (
    <form className={styles.RegistrationForm}>
      <Input label={t("Username")} type="text" value={username} />
      <Input label={"Email"} type="email" value={email} />
      <Input label={t("Password")} type="password" value={password} />

      <Button onClick={hundleRegistration}>{t("Registration")}</Button>
    </form>
  )
}
