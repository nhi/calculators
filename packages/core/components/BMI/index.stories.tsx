import React from "react"
import { storiesOf } from "@storybook/react"

import { BMI } from "./index"

storiesOf("BMI calculator", module)
  .add("default",() => (<BMI/>))