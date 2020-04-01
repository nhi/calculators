import React from "react"
import { Input } from "@material-ui/core"
export interface BMIProps {}

export const BMI: React.FunctionComponent<BMIProps> = () => {
  const [height, setHeight] = React.useState("")
  return (
    <form>
      <Input value={height} type="number" onChange={(e) => setHeight(e.target.value)}/>
    </form>
  )
}

export default BMI