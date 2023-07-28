import React, { useEffect } from 'react';
import { fetchPost } from '../../redux/slicePost';
import { useAppDispatch, useAppSelector } from '../../hook';
import { PostItem } from '../PostItem';
import { Container, Grid } from '@mui/material';

export const PostList = () => {
    const dispatch = useAppDispatch();
    const state = useAppSelector((state) => state.post);

    useEffect(() => {
        dispatch(fetchPost());
    }, [dispatch]);


    const mapState = state.list.map((item) => (
        <Grid item xs={6} key={item.id}>
            <PostItem id={item.id} title={item.title} body={item.body} />
        </Grid>
    ));

    return (
        <div>
            <Container maxWidth="sm">
                <h1>project test</h1>
                <Grid container spacing={3} rowSpacing={1} columnSpacing={{ xs: 10, sm: 20, md: 3 }}>
                    {mapState}
                </Grid>
            </Container>
        </div>
    );
};
