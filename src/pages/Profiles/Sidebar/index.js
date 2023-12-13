import classNames from "classnames/bind";
import styles from './Sidebar.module.scss'
import { introduce,imagesSidebar,friend,introduceEdit } from "~/assets/profile";
import images from "~/assets/img";
import RenderImages from "./RenderImages";
const cx = classNames.bind(styles)
function Sidebar() {
    return <div className={cx('wrapper')}>
        <div className={cx('introduce','box-wrapper')}>
            <h2>Giới thiệu</h2>
            <button>
                <span>Thêm tiểu sử</span>
            </button>
            <ul>
                {introduce.map((item,index) =>{
                    return <li key={index}>
                        <img src={item.icon} alt=""/>
                        <span>{item.title} {item.strong && <b>{item.strong}</b>}</span>
                    </li>
                })}
            </ul>
            <button>
                <span>Chỉnh sửa chi tiết</span>
            </button>
            <div className={cx('introduce-edit')}>
                {introduceEdit.map((item,index) => {
                    return <div key={index} className={cx("introduce-edit-item")}>
                        <img src={item.img} alt=""/>
                        {item.amount && <span>{item.amount}</span>}
                        <p>{item.content}</p>
                    </div>
                })}
            </div>
            <button>
                <span>Chỉnh sửa phần đáng chú ý</span>
            </button>
        </div>
        <div className={cx('images','box-wrapper','mrgtop15')}>
            <div className={cx('images-header')}>
                <h2>Ảnh</h2>
                <span>Xem tất cả ảnh</span>
            </div>
            <RenderImages data={imagesSidebar}/>
        </div>
        <div className={cx('images','box-wrapper','mrgtop15')}>
            <div className={cx('images-header')}>
                <h2>Ảnh</h2>
                <span>Xem tất cả ảnh</span>
            </div>
            <p>519 Bạn bè</p>
            {/* <RenderImages data={friend.amount}/> */}
        </div>
    </div>
}

export default Sidebar;