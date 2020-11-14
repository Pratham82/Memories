import PostMessage from '../models/postMessage.js'

// Extracting all the functionality of the routes to

export const getPosts = async (req, res) => {
  try {
    const postMessages = await PostMessage.find()
    res.status(200).json(postMessages)
  } catch (e) {
    /* handle error */
    res.status(404).json({ message: e.message })
  }
}

export const createPost = async (req, res) => {
  const post = req.body
  const newPost = PostMessage(post)
  try {
    await newPost.save()
    res.status(201).json(newPost)
  } catch (e) {
    /* handle error */
    re.status(409).json({ message: e.message })
  }
}
