import { useState } from "react";
import classNames from "classnames/bind";
import styles from './Comment.module.scss';

import CommentAccount from "./CommentAccount";
import CommentEvent from "./CommentEvent";
import CommentType from "./CommentType";
import x from '~/assets/img/x.svg';
import HeaderContent from "../HeaderContent";
import { AnhDaVang, Bongda24h } from "../TitleContent";
import AmountComment from "./AmountComment";
const cx = classNames.bind(styles);
function Comment({data,dataHeader,isBongda24h,isAnhDaVang}) {
    const [isAllComment,setIsAllComment] = useState(false);
    const handleClickAllComment = () =>{
        setIsAllComment(true);
    }
    return <div className={cx('wrapper')}>
        <AmountComment data={data} handleClickAllComment={handleClickAllComment}/>
        <div className={cx('marginbw')}></div>
        <CommentEvent/>
        <div className={cx('marginbw')}></div>
        <CommentType/>
        <CommentAccount data={data.comments[0]}/>
        <span onClick={handleClickAllComment} className={cx('all-comment')}>Xem thêm bình luận</span>
            {isAllComment && <div style={{zIndex:5}} className={cx('is-all-comment')}>
                <div className={cx('box-all-comment')}>
                    <div className={cx('box-all-comment-header')}>
                        <div></div>
                        <div>Bài viết của {dataHeader.nameAvatar}</div>
                        <div onClick={() => setIsAllComment(false)}>
                            <img src={x} alt=""/>
                        </div>
                    </div>
                    <div className={cx('box-all-comment-content')}>
                        <HeaderContent data={dataHeader}/>
                        { isBongda24h && <Bongda24h/>}
                        { isAnhDaVang && <AnhDaVang/>}
                        <div className={cx('content-image','margin-top15')}>
                            {!isAnhDaVang && <img src={dataHeader.imgContent} alt=""/>}
                            {isAnhDaVang && <iframe width="1520" height="538" src="https://www.youtube.com/embed/YQjU7KET0yk" title="đi rừng lấy mật ong, yos hav zoov taus ntab#116" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>}
                        </div>
                        <div className={cx('comment-all')}>
                            <AmountComment data={data}/>
                            <div className={cx('marginbw')}></div>
                            <CommentEvent/>
                            <div className={cx('marginbw')}></div>
                            {data.comments.map((itemAccount,index) =>{
                                return <CommentAccount key={index} data={itemAccount}/>
                            })}
                            <span className={cx('comment-tail')}>Đã chọn chế độ Phù hợp nhất nên một số bình luận có thể bị lọc ra</span>
                        </div>
                    </div>
                    <div className={cx('box-all-comment-footer')}>
                        <CommentType/>
                    </div>
                </div>
            </div>}
    </div>
}

export default Comment;