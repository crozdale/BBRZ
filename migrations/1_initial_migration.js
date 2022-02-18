const Migrations = artifacts.require("Bitbrowze");

module.exports = function (deployer) {
  deployer.deploy(Migrations);
};
