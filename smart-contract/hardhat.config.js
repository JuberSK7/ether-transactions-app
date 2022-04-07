require('@nomiclabs/hardhat-waffle')
module.exports = {
  solidity: '0.8.0',
  networks: {
    rinkeby: {
      url: 'https://eth-ropsten.alchemyapi.io/v2/CCw8PzF7-qR_ue3PcRYQb5UOyeVrvpEB',
      accounts: [
        'd80dd27bf21e53ccfa59ac5f69b2b7926b18fa45c150d12cfb6909968f4e4baa',
      ],
    },
  },
}