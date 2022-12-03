import { memo } from "react"
import { Flex, FlexProps } from "../Flex/Flex"

type HStackProps = Omit<FlexProps, "direction">

export const HStack = memo((props: HStackProps) => {
  // eslint-disable-next-line react/jsx-props-no-spreading
  return <Flex direction="row" {...props} />
})
