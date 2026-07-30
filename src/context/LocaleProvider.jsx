import { useCallback, useMemo, useState } from "react"

import { LocaleContext } from "./LocaleContext"
import { en } from "@/constants/locales/en"
import { uz } from "@/constants/locales/uz"
import { ru } from "@/constants/locales/ru"
import { createTranslator } from "@/utils"

const DICTIONARIES = { en, uz, ru }
const STORAGE_KEY = "crm.locale"

function getInitialLocale() {
  const stored = window.localStorage.getItem(STORAGE_KEY)
  return stored && DICTIONARIES[stored] ? stored : "en"
}

export function LocaleProvider({ children }) {
  const [locale, setLocaleState] = useState(getInitialLocale)

  const setLocale = useCallback((next) => {
    setLocaleState(next)
    window.localStorage.setItem(STORAGE_KEY, next)
  }, [])

  const t = useMemo(() => createTranslator(DICTIONARIES[locale]), [locale])

  return <LocaleContext.Provider value={{ locale, setLocale, t }}>{children}</LocaleContext.Provider>
}
