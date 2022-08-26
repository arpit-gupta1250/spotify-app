const express = require('express');
const router = express.Router();
const songsController = require('../controllers/songsController');

router.get('/top-playlists', songsController.getTopPlaylist);
router.get('/new-releases', songsController.getNewReleases);

module.exports = router;