const cloudinary = require('cloudinary');
const router = require('express').Router();


cloudinary.config({
  cloud_name: "dojujbi3u",
  api_key: "314632889423465",
  api_secret:"79KcF3js5oraG96quBSDwB5SC-k" 
})

router.delete('/:public_id', async(req, res)=> {
  const {public_id} = req.params;
  try {
      await cloudinary.uploader.destroy(public_id);
      res.status(200).send();
  } catch (e) {
      res.status(400).send(e.message)
  }
})


module.exports = router;