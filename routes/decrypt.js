var express = require('express');
var router = express.Router();
const EthCrypto = require('eth-crypto');

router.post('/', async (req, res, next) => {
  const key = req.body.key;
  const data = req.body.encrypted_data;
  console.log ("==================================== Start decrypt data ==========================", req.body);
  var decrypted_data = new Object()

  const decrypt = async (raw_string) => {
    let parse_data = EthCrypto.cipher.parse(raw_string);
    let decrypted = await EthCrypto.decryptWithPrivateKey(key, parse_data);
    return decrypted
  } 
  const decrypt_data = async () => {
    for(var d in data){
      let decrypted_value = await decrypt(data[d]);
      decrypted_data[d] = decrypted_value;
    } 
  }
  await decrypt_data();
  console.log(decrypted_data);
  console.log("======================================= Decrypted_data =============================");
  res.send(decrypted_data);
});

module.exports = router;