import * as express from 'express';
import { getManager } from 'typeorm';
import { Post } from '../entity/Post';

const router = express.Router();

router.get('/', async (req: express.Request, res: express.Response, next) => {
    const postRepository = getManager().getRepository(Post);
    const posts = await postRepository.find()
    res.send(posts)
});

router.post('/', async (req: express.Request, res: express.Response, next) => {
    const postRepository = getManager().getRepository(Post);
    const newPost = postRepository.create(req.body)
    await postRepository.save(newPost)
    res.send(newPost);
});

router.get('/:id', getPost, async (req: express.Request, res: express.Response, next) => {
    res.send(req.middlewareData.post);
});

router.delete('/:id', getPost, async (req: express.Request, res: express.Response, next) => {
    const postRepository = getManager().getRepository(Post);
    const ok = await postRepository.remove(req.middlewareData.post);
    res.send("Post removed");
});

async function getPost(req: express.Request, res: express.Response, next) {
    let post;
    const postRepository = getManager().getRepository(Post);
    try {
        post = await postRepository.findOne(req.params.id);
        if(post == null) return res.status(404).json({message: 'Cannot find post'});
    } catch (error) {
        return res.status(500).json({message: error.message});
    }
    req.middlewareData = {post: post};
    next() 
}

export default router;