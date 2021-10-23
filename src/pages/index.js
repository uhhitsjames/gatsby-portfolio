import * as React from "react"
import Logo from "../components/images/Logo"

const IndexPage = () => {
  return (
    <main className="flex flex-col justify-center items-center w-full h-screen">
      <div className="logo">
        <Logo color="#333" />
      </div>
    </main>
  )
}

export default IndexPage
