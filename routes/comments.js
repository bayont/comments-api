import express from 'express';
import { ValidationError } from 'sequelize';
import { Comment } from '../db/models/comment';

const router = express.Router();

router.get('/', async (req, res) => {
    const comments = await Comment.findAll({ order: [['createdAt', 'DESC']] });
    res.send(JSON.stringify(comments, null, 2));
});
router.post('/', async (req, res, next) => {
    const { message, author } = req.body;
    try {
        const comment = await Comment.create({ message, author, createdAt: new Date() });
        res.send(comment);
    } catch (exception) {
        if (exception instanceof ValidationError) {
            const validationErrors = exception.errors.map((error) => {
                return { message: error.message, type: error.type, path: error.path };
            });
            res.status(400);
            res.send(JSON.stringify(validationErrors));
        }
    }

});

module.exports = router;
