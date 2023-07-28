import React from 'react';
import { Card } from '@mui/material';
import { Link } from 'react-router-dom';

export interface PostItemType {
    id: string,
    title: string,
    body: string
}

export const PostItem: React.FC<PostItemType> = ({ id, title, body }) => {
    return (
        <div>
            <Card variant="outlined">
                <h3>{title}</h3>
                <p>{body}</p>
                <Link to={`/postfull/${id}`}>Перейти к посту</Link>
            </Card>
        </div>
    );
};
