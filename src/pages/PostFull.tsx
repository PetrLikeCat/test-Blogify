import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../hook';
import { fetchFullPost } from '../redux/sliceFullPost';
import { useParams } from 'react-router-dom';
import { Container, Typography } from '@mui/material';
import { UserDate } from '../components/UserDate';
import { Comment } from '../components/Сomment';

export const PostFull: React.FC = () => {
    const dispatch = useAppDispatch();
    const { id } = useParams();

    useEffect(() => {
        if (id) {
            dispatch(fetchFullPost(id));
        }
    }, [dispatch, id]);

    const fullPost = useAppSelector((state) => state.fullPost.post);

    return (
        <div>
            <Container maxWidth="md">
                <Typography variant="h2" gutterBottom>
                    Полный пост
                </Typography>
                {fullPost && <UserDate fullPost={fullPost} />}
                <Comment />
                <Typography variant="h4" gutterBottom>
                    Комментарии
                </Typography>
            </Container>
        </div>
    );
};
