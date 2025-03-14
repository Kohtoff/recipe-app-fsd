import { Outlet, ScrollRestoration } from 'react-router-dom'

export const RootLayout = () => {
  return (
    <div>
        {/* HEADER */}

        {/* MAIN */}
        <main><Outlet /></main>

        {/* FOOTER */}

        <ScrollRestoration />
    </div>
  )
}

export default RootLayout