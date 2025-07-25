import { useEffect, useState } from "react";
import { ActivityIndicator, FlatList, StyleSheet, View } from "react-native";
import postRepositoryImpl from "../../data/repositories/postRepositoryImpl";
import fetchPost from "../../domain/usecases/fetchPosts";
import PostCard from "../components/PostCard";

const FeedScreen = () => {

    const [posts, setPosts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const loadPosts = async () => {
        try {
            setIsLoading(true);
            const posts = await fetchPost({ postRepository: postRepositoryImpl });
            setPosts(posts);
        } catch (error) {

        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        loadPosts();
    }, []);

    if (isLoading) {
        return (
            <View style={styles.center} >
                <ActivityIndicator size="large" color="#0000ff" />
            </View>
        );
    }


    return (
        <FlatList
            data={posts}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => <PostCard post={item} />}
            contentContainerStyle={styles.list}
        />
    );
};

const styles = StyleSheet.create({
    center: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    list: {
        paddingVertical: 10,
    }
});

export default FeedScreen;