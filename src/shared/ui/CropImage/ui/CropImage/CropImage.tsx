import { ChangeEvent, useCallback, useRef, useState } from "react"
import Cropper from "react-easy-crop"
import { Area } from "react-easy-crop/types"
import { useTranslation } from "react-i18next"
import { Button } from "@/shared/ui/Button/Button"
import { generateCropedImage } from "../../model/utils/cropImage"
import styles from "./CropImage.module.scss"

export type UploadImageProps = {
  onLoad?: (cropedImage: Blob) => void
}

export const CropImage = (props: UploadImageProps) => {
  const { onLoad } = props
  const { t } = useTranslation()
  const inputRef = useRef<HTMLInputElement | null>(null)

  const [image, setImage] = useState("")
  const [croppedArea, setCroppedArea] = useState<Area>()
  const [crop, setCrop] = useState({ x: 0, y: 0 })
  const [zoom, setZoom] = useState(1)

  const triggerFileSelectPopup = useCallback(() => {
    inputRef.current?.click()
  }, [])

  const onCropComplete = useCallback(
    (cropedPercent: any, croppedAreaPixels: Area) => {
      setCroppedArea(croppedAreaPixels)
    },
    []
  )

  const onSelectFile = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      if (!event.target.files?.[0]) return

      if (image) URL.revokeObjectURL(image)
      const src = URL.createObjectURL(event.target.files[0])
      setImage(src)
    },
    [image]
  )

  const onSave = useCallback(async () => {
    if (!image || !croppedArea) return
    const cropedImage = await generateCropedImage(image, croppedArea)
    onLoad?.(cropedImage)
  }, [croppedArea, image, onLoad])

  return (
    <div className={styles.container}>
      <div className={styles["container-cropper"]}>
        <div className={styles.cropper}>
          <Cropper
            image={image}
            crop={crop}
            zoom={zoom}
            aspect={1}
            onCropChange={setCrop}
            onZoomChange={setZoom}
            onCropComplete={onCropComplete}
            style={{
              cropAreaStyle: { borderRadius: "50%" },
            }}
          />
        </div>

        <input
          className={styles.slider}
          min={1}
          max={3}
          step={0.1}
          value={zoom}
          type="range"
          onChange={(e) => setZoom(Number(e.target.value))}
        />
      </div>

      <div className={styles["container-buttons"]}>
        <input
          type="file"
          accept="image/*"
          ref={inputRef}
          onChange={onSelectFile}
          style={{ display: "none" }}
        />
        <Button onClick={triggerFileSelectPopup}>{t("change")}</Button>
        <Button onClick={onSave}>{t("save")}</Button>
      </div>
    </div>
  )
}
