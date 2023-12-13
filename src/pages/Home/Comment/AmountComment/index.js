import classNames from "classnames/bind";
import styles from './AmountComment.module.scss';

const cx = classNames.bind(styles);
function AmountComment({data,handleClickAllComment}) {
    return <div className={cx('amount-comment')}>
            <div className={cx('amount-comment-left')}>
                <img src={data.iconLike} alt=""/>
                {data.iconHaha && <img src={data.iconHaha} alt=""/>}
                {data.iconHeart && <img src={data.iconHeart} alt=""/>}
                <span>{data.like}</span>
            </div>
            <div className={cx('amount-comment-right')}>
                <span onClick={handleClickAllComment}>{data.comment} bình luận</span>
                {data.share && <span>{data.share} lượt chia sẻ</span>}
            </div>
        </div>;
}

export default AmountComment;