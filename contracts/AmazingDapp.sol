pragma 0.4.25;

contract AmazingDapp {
  mapping (string => bool) private names;

  function registerName(string assetHash) {
    names[name] = true;
  }

  function checkIfExists(string name) constant returns (bool) {
    return name[names];
  }
}
