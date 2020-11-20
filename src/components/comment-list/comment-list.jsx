import React from 'react'

import PropTypes from 'prop-types'

import './comment-list.css'

import { CommentItem } from '../comment-item/comment-item'

export default class CommentList extends React.Component {
    static propTypes = {
        comments: PropTypes.array.isRequired
    }
    render() {
        const { comments } = this.props
        return (
            <div className="col-md-8">
                <h3 className="reply">评论回复：</h3>
                <h2>暂无评论，点击左侧添加评论！！！</h2>
                <ul className="list-group">
                    {
                        comments.map((comment, index) => {
                            return <CommentItem comment={comment} key={index} />
                        })
                    }
                </ul>
            </div>
        )
    }
}