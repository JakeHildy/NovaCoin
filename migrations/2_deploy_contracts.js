const NovaCoin = artifacts.require("NovaCoin");

module.exports = function(deployer) {
  deployer.deploy(NovaCoin);
};
