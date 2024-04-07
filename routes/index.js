var express = require('express');
var router = express.Router();
const postc = require('../controllers/post');
const multer = require('multer');
const storage = multer.memoryStorage()
const upload = multer({storage: storage,limits: {fileSize: 20 * 1024 * 1024}});


router.get('/', function(req, res, next) {
  res.render('main', { title: 'Blog' });
});

router.get('/author', function(req, res, next) {res.render('author');});

router.param('postId', postc.load);
router.get('/posts', postc.index);
router.get('/posts/:postId(\\d+)', postc.show);
router.get('/posts/:postId(\\d+)/attachment', postc.attachment);
router.get('/posts/new', postc.new);
router.post('/posts', upload.single('image'), postc.create);
router.get('/posts/:postId(\\d+)/edit',  postc.edit);
router.put("/posts/:postId(\\d+)", upload.single('image'), postc.update)
router.delete('/posts/:postId(\\d+)',    postc.destroy);

module.exports = router;