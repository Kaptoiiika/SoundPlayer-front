import { useEffect, memo } from "react"
import { useSelector } from "react-redux"
import { useAppDispatch } from "@/shared/lib/hooks/useAppDispatch/useAppDispatch"
import { useThrottle } from "@/shared/lib/hooks/useThrottle/useThrottle"
import {
  getAudioPlayerCurrentAudio,
  getAudioChangedTime,
  getAudioPlayerIsPlaying,
  getAudioPlayerVolume,
} from "../../model/selectors/getAudioPlayerData/getAudioPlayerData"
import { audioPlayerActions } from "../../model/slice/audioPlayerSlice"
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
  const changedTime = useSelector(getAudioChangedTime)
  const isPlaying = useSelector(getAudioPlayerIsPlaying)
  const volume = useSelector(getAudioPlayerVolume)

  useEffect(() => {
    if (currentAudioData) {
      player.src = `${__API_URL__}${currentAudioData.audioFile.url}`
      dispatch(audioPlayerActions.setPlayerTime(0))
    }
  }, [currentAudioData, dispatch])

  useEffect(() => {
    player.currentTime = changedTime
  }, [changedTime])

  useEffect(() => {
    if (isPlaying) {
      player.play().catch(() => {})
      player.oncanplay = () => player.play()
      context.resume()
    } else {
      player.pause()
      player.oncanplay = null
    }
  }, [isPlaying])

  useEffect(() => {
    player.volume = volume
  }, [volume])

  const updateTimeHundler = useThrottle(() => {
    dispatch(audioPlayerActions.setPlayerTime(player.currentTime))
  }, 1000)

  useEffect(() => {
    player.ontimeupdate = updateTimeHundler

    player.ondurationchange = () => {
      dispatch(audioPlayerActions.setDuratation(player.duration * 1000))
    }
  }, [dispatch, updateTimeHundler])

  // return <div />
  return <Equalizer analyser={analyser} />
})
