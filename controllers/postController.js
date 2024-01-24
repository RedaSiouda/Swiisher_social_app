const PostModel = require('../models/postModel');
const multer = require('multer');

const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

const postSwiish = async (req, res) => {
    try {
        const { swiish } = req.body;
        let swiishPicData;

        // Check if a file was uploaded
        if (req.file) {
            // Convert image buffer to base64
            swiishPicData = req.file.buffer.toString('base64');
        }

        const newPost = new PostModel({
            swiish,
            swiishPic: swiishPicData,
            swiishTimeStamp: new Date().toISOString(),
        });

        const savedPost = await newPost.save();
        res.status(201).json(savedPost);
    } catch (error) {
        console.error('Error creating swiish post:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

const deleteSwiish = async (req, res) => {
    try {
        const id = req.params.id;
        const userId = req.user ? req.user.userId : null;

        const deletePost = await PostModel.findOneAndDelete({
            _id: id,
            userId: userId,
        });

        if (!deletePost) {
            return res.status(404).json({
                error: 'Swiish not found',
            });
        }

        res.json({ message: 'Swiish successfully deleted' });
    } catch (error) {
        console.error('Error deleting swiish post by ID from MongoDB:', error.message);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

const getAllSwiish = async (req, res) => {
    try {
        const allSwiish = await PostModel.find();
        res.json({ posts: allSwiish }); // Return an object with a 'posts' property containing the array
    } catch (error) {
        console.error('Error retrieving all swiish from MongoDB:', error.message);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

const getSwiishById = async (req, res) => {
    try {
        const id = req.params.id;
        const swiishById = await PostModel.findById(id);

        if (!swiishById) {
            return res.status(404).json({
                error: 'Swiish not found',
            });
        }

        res.json(swiishById);
    } catch (error) {
        console.error('Error retrieving swiish by ID from MongoDB:', error.message);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

module.exports = { postSwiish, deleteSwiish, getAllSwiish, getSwiishById, };
