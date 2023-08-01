import React from 'react'
import { TextField, Button } from '@mui/material';
import { useAppDispatch } from '../../hook';
import { newPost } from '../../redux/sliceCommit';
type idProps = {
    id: number;
}
export const CommentAddPost: React.FC<idProps> = ({ id }) => {
    const dispatch = useAppDispatch();
    const [text, setText] = React.useState("")
    const onClickAdd = () => {
        dispatch(newPost({ ...user }))
        setText("")
    }

    const user = {
        id: id,
        userId: 10,
        name: "Анонимный человек",
        email: "Неизвестно",
        body: text
    }
    React.useEffect(() => {
        dispatch(newPost({ ...user }))
    }, [dispatch])

    return (
        <div className='commend-add'>
            <TextField id="standard-basic" label="Комментарий" variant="standard" value={text} onChange={(e) => setText(e.target.value)} />
            <Button onClick={() => onClickAdd()}>Отправить комментарий</Button>
        </div>
    )
}
