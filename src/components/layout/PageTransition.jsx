import { useLocation, useOutlet } from "react-router-dom"

export function PageTransition() {
  const location = useLocation()
  const outlet = useOutlet()

  return (
    <div key={location.pathname} className="animate-in fade-in slide-in-from-bottom-2 duration-300 ease-out">
      {outlet}
    </div>
  )
}
