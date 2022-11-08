import { ChangeEvent, useRef, useState } from "react"
import styles from "./UploadImage.module.scss"
import Cropper from "react-easy-crop"
import { Button } from "shared/ui/Button/Button"
import { Area } from "react-easy-crop/types"
import { generateCropedImage } from "../../utils/cropImage"
import { useTranslation } from "react-i18next"

type UploadImageProps = {
  initalSrc?: string
}

export const UploadImage = (props: UploadImageProps) => {
  const { initalSrc } = props
  const { t } = useTranslation()
  const inputRef = useRef<HTMLInputElement | null>(null)

  const [image, setImage] = useState(initalSrc)
  const [croppedArea, setCroppedArea] = useState<Area>()
  const [crop, setCrop] = useState({ x: 0, y: 0 })
  const [zoom, setZoom] = useState(1)

  const triggerFileSelectPopup = () => {
    inputRef.current?.click()
  }

  const onCropComplete = (cropedPercent: any, croppedAreaPixels: Area) => {
    setCroppedArea(croppedAreaPixels)
  }

  const onSelectFile = (event: ChangeEvent<HTMLInputElement>) => {
    if (!event.target.files?.[0]) return

    if (initalSrc !== image && image) URL.revokeObjectURL(image)
    const src = URL.createObjectURL(event.target.files[0])
    setImage(src)
  }

  const onSave = async () => {
    if (!image || !croppedArea) return
    const cropedImageUrl = await generateCropedImage(image, croppedArea)
    console.log(cropedImageUrl)
  }

  return (
    <div className={styles.container}>
      <div className={styles["container-cropper"]}>
        {image ? (
          <>
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
          </>
        ) : null}
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
