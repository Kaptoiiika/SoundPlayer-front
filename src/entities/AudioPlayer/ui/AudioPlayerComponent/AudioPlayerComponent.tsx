import {
  getAudioPlayerCurrentAudio,
  getAudioPlayerTime,
  getAudioPlayerIsPlaying,
  getAudioPlayerVolume,
} from "../../model/selectors/getAudioPlayerData/getAudioPlayerData"
import {
  audioPlayerActions,
  audioPlayerReducer,
} from "../../model/slice/audioPlayerSlice"
import { useEffect, memo } from "react"
import { useSelector } from "react-redux"
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch/useAppDispatch"
import { Equalizer } from "../Equalizer/Equalizer"
import { useDynamicModuleLoader } from "shared/lib/useDynamicModuleLoader/useDynamicModuleLoader "

const player = new Audio()
const context = new AudioContext()
const analyser = context.createAnalyser()
analyser.fftSize = 256
const audioSourceNode = context.createMediaElementSource(player)
audioSourceNode.connect(analyser)
analyser.connect(context.destination)
console.log(analyser)

export const AudioPlayerComponent = memo(() => {
  useDynamicModuleLoader({ reducers: { audioPlayer: audioPlayerReducer } })
  
  const dispatch = useAppDispatch()
  const currentAudioData = useSelector(getAudioPlayerCurrentAudio)
  const currentTime = useSelector(getAudioPlayerTime)
  const isPlaying = useSelector(getAudioPlayerIsPlaying)
  const volume = useSelector(getAudioPlayerVolume)

  useEffect(() => {
    player.src = `${__API_URL__}/api/uploads/audio/${currentAudioData?.fileName}`
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

  return <Equalizer analyser={analyser} />
})
