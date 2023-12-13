import classNames from "classnames/bind";
import styles from './CommentType.module.scss';

import avatarMain from '~/assets/avatar/quy.jpg'
import star from '~/assets/container_mid/star.png'
import commentip from '~/assets/container_mid/comment2.png'
import smile from '~/assets/container_mid/smile.png'
import gif from '~/assets/container_mid/gif.png'
import smile2 from '~/assets/container_mid/smile2.png'
const cx = classNames.bind(styles);
function CommentType() {
    return <div className={cx('main-comment')}>
                <img src={avatarMain} alt=""/>
                <div>
                    <input type="text" placeholder="Viết bình luận..."></input>
                    <ul>
                        <li>
                            <img src={star} alt=""/>
                        </li>
                        <li>
                            <img src={commentip} alt=""/>
                        </li>
                        <li>
                            <img src={smile} alt=""/>
                        </li>
                        <li>
                            <img src={gif} alt=""/>
                        </li>
                        <li>
                            <img src={smile2} alt=""/>
                        </li>
                    </ul>
                </div>
            </div>;
}

export default CommentType;