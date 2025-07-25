const fetchPost = async ({ postRepository }) => {
    return await postRepository.getAllPosts();
}

export default fetchPost;