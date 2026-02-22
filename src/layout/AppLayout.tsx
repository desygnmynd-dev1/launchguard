import React from "react"

export const AppLayout: React.FC<{
  children: React.ReactNode
}> = ({ children }) => {
  return (
    <div style={{ minHeight: "100vh", background: "#f8fafc" }}>
      <header
        style={{
          padding: "16px 24px",
          background: "#111827",
          color: "white"
        }}
      >
        SaaS Starter
      </header>

      <main style={{ padding: 24 }}>
        {children}
      </main>
    </div>
  )
}
