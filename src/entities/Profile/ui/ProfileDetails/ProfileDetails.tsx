import { profileReducer } from "../../model/slice/profileSlice"
import { classNames } from "shared/lib/classNames/classNames"
import { useDynamicModuleLoader } from "shared/lib/useDynamicModuleLoader/useDynamicModuleLoader "
import { ProfileCard } from "../ProfileCard/ProfileCard"
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch/useAppDispatch"
import { useEffect } from "react"
import { fetchProfileDataById } from "../../model/services/fetchProfileData/fetchProfileDataById"
import { useSelector } from "react-redux"
import {
  getProfileDataById,
  getProfileIsloading,
} from "../../model/selectors/getProfileData/getProfileData"
import { Loader } from "shared/ui/Loader/Loader"

type ProfileDetailsProps = {
  className?: string
  id: string
}

export const     ProfileDetails = (props: ProfileDetailsProps) => {
  useDynamicModuleLoader({ reducers: { profile: profileReducer } })
  const { className = "", id } = props
  const dispatch = useAppDispatch()
  const profile = useSelector(getProfileDataById(id))
  const isLoading = useSelector(getProfileIsloading)

  useEffect(() => {
    dispatch(fetchProfileDataById({ id: id.toString() }))
  }, [dispatch, id])

  let content
  if (isLoading) {
    content = <Loader />
  } else if (profile) {
    content = <ProfileCard user={profile} />
  } else {
    content = <div>{"some error"}</div>
  }

  return <div className={classNames(className)}>{content}</div>
}
 