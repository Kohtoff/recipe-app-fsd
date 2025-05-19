import { Outlet, ScrollRestoration } from 'react-router-dom'
import { BottomNav } from 'widgets/bottom-navigation'

export const RootLayout = () => {
  return (
    <div>
        {/* HEADER */}

        {/* MAIN */}
        <main><Outlet /></main>

        {/* FOOTER */}
        <BottomNav />
        <ScrollRestoration />
    </div>
  )
}

export default RootLayout