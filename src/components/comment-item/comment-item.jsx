import React from 'react'
import PropType from 'prop-types'

import './comment-item.css'

export class CommentItem extends React.Component {
    static propType = {
        comment: PropType.object.isRequired
    }
    render() {
        const { username, content } = this.props.comment
        return (
            <li className="list-group-item">
                <div className="handle">
                    <button>删除</button>
                </div>
                <p className="user">
                    <span>{username}</span>说：
            </p>
                <p className="centence">{content}</p>
            </li>
        )
    }
}