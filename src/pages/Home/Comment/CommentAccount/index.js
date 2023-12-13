import classNames from "classnames/bind";
import styles from './CommentAccount.module.scss';

const cx = classNames.bind(styles);
function CommentAccount({data}) {
    return <div className={cx('other-comment')}>
                <img src={data.avatarRep} alt=""/>
                <div className={cx('other-comment-content')}>
                    <div className={cx('other-comment-content1')}>
                        <span>{data.name}</span>
                        <p>{data.commentRep}</p>
                    </div>
                    {data.isIcon && <div className={cx('other-comment-icon')}>
                        <img src={data.isIcon} alt=""/>
                    </div>}
                    {data.isImg && <div className={cx('other-comment-img')}>
                        <img src={data.isImg} alt=""/>
                    </div>}
                    <div className={cx('other-comment-content2')}>
                        <p><span>Thích</span> <span>Phản hồi</span> <span className={cx('other-comment-time')}>{data.timePost}</span></p>
                    </div>
                </div>
            </div>;
}

export default CommentAccount;