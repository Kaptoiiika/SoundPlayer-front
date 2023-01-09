import { useEffect } from "react"
import { useSelector } from "react-redux"
import { classNames } from "@/shared/lib/classNames/classNames"
import { useAppDispatch } from "@/shared/lib/hooks/useAppDispatch/useAppDispatch"
import { useDynamicModuleLoader } from "@/shared/lib/useDynamicModuleLoader/useDynamicModuleLoader "
import { Loader } from "@/shared/ui/Loader/Loader"
import {
  getProfileDataById,
  getProfileIsloading,
} from "../../model/selectors/getProfileData/getProfileData"
import { fetchProfileDataById } from "../../model/services/fetchProfileData/fetchProfileDataById"
import { profileReducer } from "../../model/slice/profileSlice"
import { ProfileCard } from "../ProfileCard/ProfileCard"

type ProfileDetailsProps = {
  className?: string
  id: string
}

export const     ProfileDetails = (props: ProfileDetailsProps) => {
  useDynamicModuleLoader({ reducers: { profile: profileReducer } })
  const { className, id } = props
  const dispatch = useAppDispatch()
  const profile = useSelector(getProfileDataById(id))
  const isLoading = useSelector(getProfileIsloading)

  useEffect(() => {
    dispatch(fetchProfileDataById({ id: String(id)}))
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
 