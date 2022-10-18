declare module "*.scss" {
  interface ClassNames {
    [className: string]: string
  }
  const content: ClassNames
  export = content
}

declare module "*.svg" {
  const content: React.FunctionComponent<React.SVGAttributes<SVGElement>>
  export default content
}

declare module "*.png"
declare module "*.jpg"

declare const __IS_DEV__: boolean
