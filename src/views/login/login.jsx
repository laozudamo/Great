import { useState } from "react"

export default function Login () {
  const [age, setAge] = useState(0)
  return (
    <div>
      <h1>{age}</h1>
    </div>
  )
}