import PostMessage from "../models/postMessage.js";
export const getPosts = async (req, res) => {
  try {
    const postMessage = await PostMessage.find();
    console.log(postMessage);

    res.status(200).json(postMessage);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const createPosts = async (req, res) => {
  const post = req.body;
  const newPost = new PostMessage(post);
  try {
    await newPost.save();
    res.status(201).json(newPost);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
}
export const updatePosts =async (req,res)=>{
  const {id:_id} =req.params;
  const post=req.body;

  if(!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send("No post with that id");
  const updatePosts=await PostMessage.findByIdAndUpdate(_id, post, {new: true});

  res.json(updatePosts);
}
