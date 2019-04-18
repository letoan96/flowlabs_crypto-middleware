var express = require('express');
var router = express.Router();
const EthCrypto = require('eth-crypto');

router.post('/', async (req, res, next) => {
  const key = req.body.key;
  const data = req.body.raw_data;
  console.log ("==================================== Start encrypt data ==========================", req.body);
  var encrypted_data = new Object()

  const encrypt = async (raw_string) => {
    let encrypted = await EthCrypto.encryptWithPublicKey(key, raw_string);
    let stringify = EthCrypto.cipher.stringify(encrypted)
    return stringify
  } 
  const encrypt_data = async () => {
    for(var d in data){
      let encrypted_value = await encrypt(data[d]);
      encrypted_data[d] = encrypted_value;
    } 

  }
  await encrypt_data();
  console.log(encrypted_data);
  console.log("======================================= Encrypted_data =============================");
  res.send(encrypted_data);
  
});

module.exports = router;