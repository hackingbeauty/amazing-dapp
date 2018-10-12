import constants from 'core/types'

export function setProvider(provider) {
  return (dispatch) => {
    provider.eth.getAccounts((error, accounts) => {
      if (error) { return }

      /* eslint-disable */
      provider.eth.defaultAccount = accounts[0]

      dispatch((() => {
        return {
          type: constants.SET_PROVIDER,
          provider
        }
      })())
    })
  }
}
