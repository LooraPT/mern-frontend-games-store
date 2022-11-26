import React from 'react';
import MainInput from '../../controls/Input/MainInput';
import './CommentForm.scss';

function CommentForm({ comments, setComments }) {
    return (
        <div className="user__form-order">
            <h4>Comments</h4>
            <MainInput value={comments} onChange={(e) => setComments(e.target.value)} style={{ padding: '10px 10px 90px 10px' }} placeholder="Text" />
        </div>
    );
}

export default CommentForm;