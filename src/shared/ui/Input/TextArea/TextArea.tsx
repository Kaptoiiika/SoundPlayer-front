import { InputHTMLAttributes, memo } from "react"
import { classNames } from "shared/lib/classNames/classNames"
import { InputWrapper } from "../InputWrapper/InputWrapper"
import styles from "./TextArea.module.scss"

export const enum  textAreaResize {
  NONE = "resize-none",
  VERTICAL = "resize-vertical",
  HORIZONTAL = "resize-horizontal",
  BOTH = "resize-both",
}

type TextAreaProps = {
  className?: string
  onValueChange?: (newValue: string) => void
  resize?: textAreaResize
} & InputHTMLAttributes<HTMLTextAreaElement>

export const TextArea = memo((props: TextAreaProps) => {
  const {
    className,
    onChange,
    onValueChange,
    resize = textAreaResize.NONE,
    ...otherProps
  } = props

  const onChangeHundler = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    onChange?.(e)
    onValueChange?.(e.target.value)
  }

  return (
    <InputWrapper className={className}>
      <textarea
        // eslint-disable-next-line react/jsx-props-no-spreading
        {...otherProps}
        className={classNames([styles.TextArea, styles[resize]])}
        onChange={onChangeHundler}
      />
    </InputWrapper>
  )
})
