const NovaCoin = artifacts.require("NovaCoin");

contract('NovaCoin', (accounts) => {
  it('should put 21 million NovaCoin in the first account', async () => {
    const novaCoinInstance = await NovaCoin.deployed();
    const balance = await novaCoinInstance.balanceOf(accounts[0]);
    const initialSupply = 21000000 * 10**18;

    assert.equal(web3.utils.hexToNumberString(balance), initialSupply, "21 million NOVA wasn't in the first account");
  });
});
