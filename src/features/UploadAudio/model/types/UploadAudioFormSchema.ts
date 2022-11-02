export interface UploadAudioFormSchema {
  name: string
  audio?: UploadAudioFile

  isloading: boolean
  audioIsLoaded?: boolean
  error?: string
}

export interface UploadAudioFile {
  name: string
  blob: Blob
}
