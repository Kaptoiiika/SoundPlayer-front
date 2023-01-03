import { DeepPartial } from "@reduxjs/toolkit"
import { StateSchema } from "../../../../../shared/config/storeConfig"
import { UploadAudioFormSchema } from "../../types/UploadAudioFormSchema"
import { getUploadFormState } from "./getUploadFormState"

describe("getUploadAudioForm", () => {
  test("test no initial state", () => {
    const state: DeepPartial<StateSchema> = { audioForm: undefined }
    const uploadAudioInitialState: UploadAudioFormSchema = {
      name: "",
      isloading: false,
      audioIsLoaded: false,
    }

    expect(getUploadFormState(state as StateSchema)).toEqual(
      uploadAudioInitialState
    )
  })

  test("test get value", () => {
    const state: DeepPartial<StateSchema> = {
      audioForm: { name: "some name", error: undefined, isloading: true },
    }

    expect(getUploadFormState(state as StateSchema).name).toEqual("some name")
    expect(getUploadFormState(state as StateSchema).error).toEqual(undefined)
    expect(getUploadFormState(state as StateSchema).isloading).toEqual(true)
  })
})
