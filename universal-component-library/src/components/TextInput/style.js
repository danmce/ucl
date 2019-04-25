import { colors, spacing, fonts } from 'utils/designSystem'

export default {
  formElement: {
    marginBottom: spacing
  },
  label: {
    ...fonts.Label
  },
  textbox: {
    boxSizing: 'border-box',
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: colors.blueGrey[500],
    backgroundColor: colors.white,
    padding: spacing,
    width: '100%',
    minHeight: 45
  }
}
