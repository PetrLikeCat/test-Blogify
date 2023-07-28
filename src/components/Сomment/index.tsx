import React from 'react';
import { useAppDispatch, useAppSelector } from '../../hook';
import { fetchSliceCommit } from '../../redux/sliceCommit';
import { useParams } from 'react-router-dom';
import { СommentItem } from '../СommentItem';
import { CommentAddPost } from '../CommentAddPost';
export const Comment = () => {
    const { id } = useParams<{ id: string | undefined }>();
    const dispatch = useAppDispatch();
    React.useEffect(() => {
        if (id) {
            dispatch(fetchSliceCommit(id));
        }
    }, [dispatch, id]);

    const comments = useAppSelector((state) => state.comment.comment);
    let commentMap = null
    if (comments) {
        commentMap = comments.map((item) => (<СommentItem comment={item} />))
    }

    return (
        <div>
            {commentMap}
            {id !== undefined && <CommentAddPost id={parseInt(id)} />}


        </div>
    );
};
