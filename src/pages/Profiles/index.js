import classNames from "classnames/bind";
import styles from './Profiles.module.scss'
import imgCover from '~/assets/profile/anhbia.jpg'
import cra1 from '~/assets/profile/cra1.png'
import cra2 from '~/assets/profile/cra2.png'
import plus from '~/assets/profile/plus.png'
import edit from '~/assets/profile/chinhsua.png'
import more from '~/assets/profile/more.png'
import bb1 from '~/assets/profile/bb1.jpg'
import camera from '~/assets/profile/camera.png'
import dot3 from '~/assets/img/dot3.svg'
import Sidebar from "./Sidebar";
import Content from "./Content";
const cx= classNames.bind(styles);
function Profiles() {
    return <div className={cx('wrapper')}>
        <div className={cx('header')}>
            <div className={cx('header-cover-img')}>
                <img src={imgCover} alt=""/>
                <div className={cx('header-create-avatar')}>
                    <ul>
                        <li>
                            <img src={cra1} alt=""/>
                            <span>Tạo với avatar</span>
                        </li>
                        <li>
                            <img src={cra2} alt=""/>
                            <span>Chỉnh sửa ảnh bìa</span>
                        </li>
                    </ul>                
                </div>
            </div>
            <div className={cx('header-edit')}>
                <div className={cx('header-avatar')}>
                    <div className={cx('header-avatar-img')}>
                        <img src={bb1} alt=""/>
                    </div>
                    <div className={cx('header-avatar-cmr')}>
                        <img src={camera} alt=""/>
                    </div>
                </div>
                <div className={cx('header-edit-name')}>
                    <h1>Quý Nguyễn</h1>
                    <span>519 bạn bè</span>
                </div>
                <div className={cx('header-edit-event')}>
                    <ul>
                        <li className={cx('header-edit-event-first')}>
                            <img src={plus} alt=""/>
                            <span>Thêm vào tin</span>
                        </li>
                        <li>
                            <img src={edit} alt=""/>
                            <span>Chỉnh sửa trang cá nhân</span>
                        </li>
                    </ul>
                    <div >
                        <img src={more} alt=""/>
                    </div>
                </div>
            </div>
            <div className={cx('header-end')}>
                <ul>
                    <li className={cx('header-end-color')}>
                        <span>Bài viết</span>
                    </li>
                    <li>
                        <span>Giới thiệu</span>
                    </li>
                    <li>
                        <span>Bạn bè</span>
                    </li>
                    <li>
                        <span>Ảnh</span>
                    </li>
                    <li>
                        <span>Video</span>
                    </li>
                    <li>
                        <span>Reels</span>
                    </li>
                    <li>
                        <span>Xem thêm</span>
                    </li>
                </ul>
                <img src={dot3} alt=""/>
            </div>
        </div>
        <div className={cx('container')}>
            <Sidebar />
            <Content />
        </div>
    </div>
}

export default Profiles;