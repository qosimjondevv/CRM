export function createTranslator(dictionary) {
  return function t(key, params) {
    const value = key.split(".").reduce((acc, part) => acc?.[part], dictionary)
    if (value === undefined) return key
    if (!params) return value
    return Object.entries(params).reduce(
      (result, [paramKey, paramValue]) => result.replaceAll(`{{${paramKey}}}`, paramValue),
      value
    )
  }
}
