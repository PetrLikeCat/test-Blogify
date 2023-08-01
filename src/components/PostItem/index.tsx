import React from 'react';
import { Card } from '@mui/material';
import { Link } from 'react-router-dom';

export interface PostItemType {
    id: string;
    title: string;
    body: string;
}

export const PostItem: React.FC<PostItemType> = ({ id, title, body }) => {
    // const postItemClass = isFeatured ? 'post-item post-item--featured' : 'post-item';

    return (
        <div className="post-item__wrapper">
            <Card variant="outlined">
                <div className="post-item">
                    <h3 className="post-item__title">{title}</h3>
                    <p className="post-item__body">{body}</p>
                    <Link to={`/postfull/${id}`} className="post-item__link">Перейти к посту</Link>
                </div>

            </Card>
        </div>
    );
};