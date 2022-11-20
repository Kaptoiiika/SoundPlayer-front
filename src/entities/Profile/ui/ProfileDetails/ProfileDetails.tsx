import { UserModel } from "entities/User"
import { profileReducer } from "../../model/slice/ProfileSlice"
import { classNames } from "shared/lib/classNames/classNames"
import { useDynamicModuleLoader } from "shared/lib/useDynamicModuleLoader/useDynamicModuleLoader "
import { ProfileCard } from "../ProfileCard/ProfileCard"

type ProfileDetailsProps = {
  className?: string
  id?: number | string
}

export const ProfileDetails = (props: ProfileDetailsProps) => {
  useDynamicModuleLoader({ reducers: { profile: profileReducer } })
  const { className = "", id } = props

  const user: UserModel = { email: "asd", id: 2, username: "asd" }

  return (
    <div className={classNames(className)}>
      <ProfileCard user={user} />
    </div>
  )
}
