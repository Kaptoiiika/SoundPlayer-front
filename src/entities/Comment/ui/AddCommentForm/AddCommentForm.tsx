import { classNames } from "shared/lib/classNames/classNames"
import { useTranslation } from "react-i18next"
import { FormEvent, memo, useCallback } from "react"
import { Button, ButtonVariant } from "shared/ui/Button/Button"
import { useSelector } from "react-redux"
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch/useAppDispatch"
import {
  addCommentFormActions,
  addCommentFormReducer,
} from "../../model/slices/addCommentFormSlice"
import styles from "./AddCommentForm.module.scss"
import { useDynamicModuleLoader } from "shared/lib/useDynamicModuleLoader/useDynamicModuleLoader "
import {
  getAddCommentFormError,
  getAddCommentFormText,
} from "../../model/selectors/addCommentFormSelectors"
import { TextArea, textAreaResize } from "shared/ui/Input/TextArea/TextArea"

export interface AddCommentFormProps {
  className?: string
  onSendComment: (text: string) => void
}

export const AddCommentForm = memo((props: AddCommentFormProps) => {
  useDynamicModuleLoader({
    reducers: { addCommentForm: addCommentFormReducer },
  })
  const { className = "", onSendComment } = props
  const { t } = useTranslation()
  const text = useSelector(getAddCommentFormText)
  // const error = useSelector(getAddCommentFormError)
  const dispatch = useAppDispatch()

  const onCommentTextChange = useCallback(
    (value: string) => {
      dispatch(addCommentFormActions.setText(value))
    },
    [dispatch]
  )

  const onSendHandler = useCallback(
    (e: FormEvent) => {
      e.preventDefault()
      onSendComment(text || "")
      onCommentTextChange("")
    },
    [onCommentTextChange, onSendComment, text]
  )

  return (
    <form
      onSubmit={onSendHandler}
      className={classNames([styles.AddCommentForm, className])}
    >
      <TextArea
        className={styles.input}
        placeholder={t("WriteYourText")}
        value={text}
        resize={textAreaResize.VERTICAL}
        onValueChange={onCommentTextChange}
      />
      <Button variant={ButtonVariant.OUTLINE} type="submit">
        {t("send")}
      </Button>
    </form>
  )
})
