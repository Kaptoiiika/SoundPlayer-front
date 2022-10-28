type Mods = Record<string, boolean | string>

export function classNames(
  cls: string | string[],
  mods: Mods = {}
): string | undefined {
  const unionClasses = Array.isArray(cls) ? cls.join(" ") : cls

  const variableClasses = Object.entries(mods)
    .filter(([, value]) => Boolean(value))
    .map(([className]) => className)
    .join(" ")

  const fullClasses = [unionClasses, variableClasses].join(" ")

  return fullClasses.trim()
}
