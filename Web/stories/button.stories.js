import React from 'react'
/* STORYBOOK  */
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
/* ################################# */

import Button from 'Components/Button'
import DecoupledButton from 'Components/DecoupledButton'
import {ThemeProvider} from 'styled-components'
import theme from 'Styles/default.theme'
// Define what props.theme will look like

const decoupledTheme = {
  mode: 'light',
  main: 'magenta'
}

storiesOf('Button', module)
  .add('default', () => (
    <ThemeProvider theme={theme}>
      <Button onClick={action('clicked')}>
          Default Button
      </Button>
    </ThemeProvider>
  ))
  .add('decoupled', () => (
    <ThemeProvider theme={decoupledTheme}>
      <React.Fragment>
        <DecoupledButton onClick={action('clicked')}>
            Default Button
        </DecoupledButton><br />
        <DecoupledButton variant='primary' onClick={action('clicked')}>
            Primary Button
        </DecoupledButton><br />
        <DecoupledButton variant='warning' onClick={action('clicked')}>
            Warning Button
        </DecoupledButton>
      </React.Fragment>
    </ThemeProvider>
  ))
