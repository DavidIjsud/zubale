import React, { useState } from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import formatDate from '../../utils/dateUtils';

const PostCard = ({ post }) => {

    const [liked, setLiked] = useState(post.liked);
    const [saved, setSaved] = useState(post.saved);
    const [imageUri, setImageUri] = useState(post.image);

    const toggleLike = () => setLiked((prev) => !prev);
    const toggleSave = () => setSaved((prev) => !prev);

    const DEFAULT_IMAGE = 'https://david-garcia-romero.com/challenge/no-image-avaible.png';

    return (
        <View style={styles.card}>
            <View style={styles.header}>
                <Image source={{ uri: post.avatar }} style={styles.avatar} />
                <Text style={styles.name}>{post.name}</Text>
            </View>


            <Image source={{ uri: imageUri }} style={styles.postImage} onError={() => setImageUri(DEFAULT_IMAGE)} />


            <View style={styles.interactionRow}>
                <TouchableOpacity onPress={toggleLike}>
                    <Text style={styles.icon}>{liked ? '❤️' : '🤍'} {post.likes}</Text>
                </TouchableOpacity>

                <Text style={styles.icon}>💬 {post.comments}</Text>

                <TouchableOpacity onPress={toggleSave}>
                    <Text style={styles.icon}>{saved ? '🔖' : '➕'}</Text>
                </TouchableOpacity>
            </View>


            <Text style={styles.caption}>
                <Text style={{ fontWeight: 'bold' }}>{post.name}</Text> {post.description}
            </Text>


            <Text style={styles.date}>{formatDate(post.createdAt)}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    card: {
        padding: 12,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
        backgroundColor: '#fff',
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 8,
    },
    avatar: {
        width: 36,
        height: 36,
        borderRadius: 18,
        marginRight: 10,
    },
    name: {
        fontWeight: '600',
        fontSize: 14,
    },
    postImage: {
        width: '100%',
        height: 200,
        borderRadius: 8,
        marginBottom: 8,
        resizeMode: 'cover',
    },
    interactionRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 6,
    },
    icon: {
        fontSize: 14,
    },
    caption: {
        fontSize: 13,
        marginBottom: 4,
    },
    date: {
        fontSize: 12,
        color: '#888',
    },
});


export default PostCard;