import { FormateAtributedAudio } from "@/entities/Audio"
import { FormateAtributedUser } from "@/entities/User"
import { FormateAtributesFile } from "@/shared/lib/formaters/FormateAtributesFile/FormateAtributesFile"
import { AlbumModel } from "../../types/AlbumSchema"

export const FormateAtributedAlbum = (album: any): AlbumModel => {
  return {
    id: album.id,
    title: album.attributes.title,
    image: album.attributes.image?.data
      ? FormateAtributesFile(album.attributes.image.data)
      : undefined,
    author: album.attributes.author?.data
      ? FormateAtributedUser(album.attributes.author.data)
      : undefined,
    audioList: album.attributes.audioList?.data
      ? album.attributes.audioList?.data?.map((audio: any) =>
          FormateAtributedAudio(audio)
        )
      : undefined,
  }
}
