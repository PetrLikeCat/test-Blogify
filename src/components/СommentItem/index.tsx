import React from 'react';
import { List, ListItem, ListItemText, Typography, Paper } from '@mui/material';
import { useAppSelector } from '../../hook';

type CommentItemProps = {
    comment: {
        id: number;
        name: string;
        email: string;
        body: string;
    };

};
export const СommentItem: React.FC<CommentItemProps> = ({ comment }) => {
    const { id, name, email, body } = comment;
    const state = useAppSelector((state) => state.comment.comment)
    console.log(state, "commentState")
    return (
        <Paper sx={{ p: 2 }}>
            <Typography variant="h5" gutterBottom>
            </Typography>
            <List>
                <ListItem key={id} alignItems="flex-start">
                    <ListItemText
                        primary={name}
                        secondary={
                            <>
                                <Typography component="span" variant="body2" color="text.primary">
                                    {email}
                                </Typography>
                                <br />
                                {body}
                            </>
                        }
                    />
                </ListItem>
            </List>
        </Paper>
    );
};
