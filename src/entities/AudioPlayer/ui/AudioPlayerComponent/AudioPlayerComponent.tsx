import {
  getAudioPlayerCurrentAudio,
  getAudioPlayerTime,
  getAudioPlayerIsPlaying,
  getAudioPlayerVolume,
} from "../../model/selectors/getAudioPlayerData/getAudioPlayerData"
import { audioPlayerActions } from "../../model/slice/audioPlayerSlice"
import { useEffect, memo } from "react"
import { useSelector } from "react-redux"
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch/useAppDispatch"
import { Equalizer } from "../Equalizer/Equalizer"

const player = new Audio()
const context = new AudioContext()
const analyser = context.createAnalyser()
analyser.fftSize = 512
const audioSourceNode = context.createMediaElementSource(player)
audioSourceNode.connect(analyser)
analyser.connect(context.destination)

export const AudioPlayerComponent = memo(() => {
  const dispatch = useAppDispatch()
  const currentAudioData = useSelector(getAudioPlayerCurrentAudio)
  const currentTime = useSelector(getAudioPlayerTime)
  const isPlaying = useSelector(getAudioPlayerIsPlaying)
  const volume = useSelector(getAudioPlayerVolume)

  useEffect(() => {
    player.src = `${__API_URL__}api/uploads/audio/${currentAudioData?.fileName}`
  }, [currentAudioData])

  useEffect(() => {
    player.currentTime = currentTime
  }, [currentTime])

  useEffect(() => {
    if (isPlaying) {
      player.play()
      player.oncanplay = () => {
        player.play()
        context.resume()
      }
    } else {
      player.pause()
      player.oncanplay = null
    }
  }, [isPlaying])

  useEffect(() => {
    player.volume = volume
  }, [volume])

  useEffect(() => {
    player.ontimeupdate = () => {
      dispatch(audioPlayerActions.setPlayerTime(player.currentTime))
    }
  }, [dispatch])

  return <Equalizer analyser={analyser}></Equalizer>
})
