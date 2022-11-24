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
analyser.fftSize = 256
const audioSourceNode = context.createMediaElementSource(player)
audioSourceNode.connect(analyser)
analyser.connect(context.destination)
console.log("player", player)
player.crossOrigin = "anonymous"

export const AudioPlayerComponent = memo(() => {
  const dispatch = useAppDispatch()
  const currentAudioData = useSelector(getAudioPlayerCurrentAudio)
  const currentTime = useSelector(getAudioPlayerTime)
  const isPlaying = useSelector(getAudioPlayerIsPlaying)
  const volume = useSelector(getAudioPlayerVolume)

  useEffect(() => {
    if (currentAudioData) {
      player.src = `${__API_URL__}${currentAudioData.audioFile.url}`
    }
  }, [currentAudioData, dispatch])

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

    player.ondurationchange = () => {
      dispatch(audioPlayerActions.setDuratation(player.duration * 1000))
    }
  }, [dispatch])

  return <Equalizer analyser={analyser} />
})
