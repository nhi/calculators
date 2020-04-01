import { configure } from '@storybook/react'

const req = require.context('..', true, /\.stories\.(ts|tsx)$/)

configure(() => {
  req.keys().forEach(filename => req(filename))
}, module);
