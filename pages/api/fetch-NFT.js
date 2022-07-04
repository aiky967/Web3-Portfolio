
export default async function handler(req, res) {
    const {nftWallet=0x19Fd1450F65c49e485246a679FFef12F73d4918e} = req.query;
    const fetchRes = await fetch(`https://api.rarible.org/v0.1/items/byOwner/?owner=ETHEREUM:${nftWallet}`);
    const {items} = await fetchRes.json();
    res.status(200).json( {items} );
  }
  
  // https://api.rarible.org/v0.1/items/byOwner/?owner=ETHEREUM:0x19Fd1450F65c49e485246a679FFef12F73d4918e