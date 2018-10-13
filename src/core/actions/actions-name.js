import contract    from 'truffle-contract'
import AmazingDapp from 'contracts/AmazingDapp.json'

export function checkIfNameExists(name) {
  return (dispatch, getState) => {
    const { web3Provider } = getState().provider
    const AmazingDapp = contract(AmazingDapp)

    AmazingDapp.setProvider(web3Provider.currentProvider)
    AmazingDapp.defaults({ from: web3Provider.eth.defaultAccount })

    return new Promise((resolve, reject) => {
      AmazingDapp.deployed().then((ad) => {
        debugger
        return ad.checkIfExists(name)
      })
    })
    .then((result) => {
      debugger
    })
    .catch((error) =>{
      console.log('boo error: ', error)
    })

  }
}
