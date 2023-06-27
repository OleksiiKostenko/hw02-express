const { User } = require('../../models');
const path = require('path');
const fs = require('fs/promises');
const Jimp = require('jimp');

const avaDir = path.join(__dirname, '..', '..', 'public', 'avatars');

const updateAvatar = async (req, res) => {
  const { path: tempUpload, originalname } = req.file;

  await Jimp.read(`temp/${originalname}`)
    .then(img => {
      return img.resize(250, 250).write(`temp/${originalname}`);
    })
    .catch(err => {
      console.error(err);
    });
  const { _id } = req.user;
  const filename = `${_id}_${originalname}`;
  try {
    const resultUpload = path.join(avaDir, filename);
    await fs.rename(tempUpload, resultUpload);
    const avatarURL = path.join('avatars', filename);
    await User.findByIdAndUpdate(req.user._id, { avatarURL });

    res.status(200).json({
      avatarURL,
    });
  } catch (err) {
    await fs.unlink(tempUpload);
    throw err;
  }
};

module.exports = updateAvatar;
