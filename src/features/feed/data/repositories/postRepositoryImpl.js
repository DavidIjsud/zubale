import postApi from "../api/postApi";

const postRepositoryImpl = {
    getAllPosts: async () => {
        const post = await postApi.fetchPosts();

        return post.map((post) => ({
            id: post.id,
            name: post.name,
            avatar: post.avatar,
            description: post.description,
            image: post.image,
            likes: post.likes,
            comments: post.comments,
            liked: post.liked,
            saved: post.saved,
            location: post.location,
            createdAt: post.createdAt
        }));
    }
}

export default postRepositoryImpl;