import classNames from "classnames/bind";
import styles from './CommentEvent.module.scss';

import like from '~/assets/container_mid/like.png'
import comment from '~/assets/container_mid/comment.png'
import share from '~/assets/container_mid/share.png'
const cx = classNames.bind(styles);
function CommentEvent() {
    return <>
        <ul className={cx('comment-event')}>
            <li>
                <img src={like} alt=""/>
                <span>Thích</span>
            </li>
            <li>
                <img src={comment} alt=""/>
                <span>Bình luận</span>
            </li>
            <li>
                <img src={share} alt=""/>
                <span>Chia sẻ</span>
            </li>
        </ul>
    </>
}

export default CommentEvent;