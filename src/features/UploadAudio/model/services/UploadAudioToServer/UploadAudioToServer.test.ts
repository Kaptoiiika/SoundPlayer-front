import { Dispatch } from "@reduxjs/toolkit"
import axios from "axios"
import {
  StateSchema,
  ThunkExtraArg,
} from "../../../../../app/providers/StoreProvider"
import { audioActions } from "../../../../../entities/Audio"
import { UploadAudioToServer } from "./UploadAudioToServer"
jest.mock("axios")

const mockedAxios = jest.mocked(axios)
const mockedValue = {
  id: 1021,
  duratation: 1234556,
  fileName: "someFileName",
  name: null,
  size: 4373527,
  peaks: [1, 1, 1],
  isAudio: true,
  createdAt: "2022-10-31T11:41:23.480Z",
  authorId: null,
}
const { id, duratation, fileName, name, size, peaks, authorId } = mockedValue

describe("UploadAudioToServer", () => {
  let dispatch: Dispatch
  let getState: () => StateSchema
  let extraArg: ThunkExtraArg
  beforeEach(() => {
    dispatch = jest.fn()
    getState = jest.fn()
    extraArg = { api: mockedAxios }
  })

  test("test work status ok", async () => {
    mockedAxios.post.mockReturnValue(Promise.resolve({ data: mockedValue }))

    const action = UploadAudioToServer({ audio: new Blob(), name: "somename" })
    const res = await action(dispatch, getState, extraArg)

    expect(mockedAxios.post).toHaveBeenCalled()
    expect(dispatch).toHaveBeenCalledWith(
      audioActions.addAudioToList({
        id,
        name: name || "",
        size: size || 0,
        duratation: duratation || 0,
        authorId: authorId || undefined,
        fileName: fileName || undefined,
        peaks,
      })
    )
    expect(res.meta.requestStatus).toEqual("fulfilled")
  })

  test("test work status false", async () => {
    mockedAxios.post.mockReturnValue(Promise.reject({ status: 400 }))

    const action = UploadAudioToServer({ audio: new Blob(), name: "somename" })
    const res = await action(dispatch, getState, extraArg)

    expect(dispatch).toHaveBeenCalledTimes(2)
    expect(mockedAxios.post).toHaveBeenCalled()
    expect(res.meta.requestStatus).toEqual("rejected")
  })
})
