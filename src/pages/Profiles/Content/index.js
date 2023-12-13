import classNames from "classnames/bind";
import styles from './Content.module.scss'

import { uploadIconProfile } from "~/assets/profile";
import UploadEvent from "~/pages/Home/UploadEvent";
import bv1 from '~/assets/profile/bv1.png'
import bv2 from '~/assets/profile/bv2.png'
import bv3 from '~/assets/profile/bv3.png'
import bv4 from '~/assets/profile/bv4.png'

const cx = classNames.bind(styles)
function Content() {
    return <div className={cx('wrapper')}>
        <div className={cx('box-content')}>
            <UploadEvent data={uploadIconProfile}/>
        </div>
        <div className={cx('aticle','box-content','mrgtop20')}>
            <div className={cx("aticle-on")}>
                <h2>Bài viết</h2>
                <ul>
                    <li>
                        <img src={bv1} alt=""/>
                        <span>Bộ lọc</span>
                    </li>
                    <li>
                        <img src={bv2} alt=""/>
                        <span>Quản lý bài viết</span>
                    </li>
                </ul>
            </div>
            <ul className={cx('aticle-down')}>
                <li className={cx("aticle-color")}>
                    <img src={bv3} alt=""/>
                    <span>Xem theo danh sách</span>
                </li>
                <li>
                    <img src={bv4} alt=""/>
                    <span>Chế độ xem lưới</span>
                </li>
            </ul>
        </div>
    </div>
}

export default Content;