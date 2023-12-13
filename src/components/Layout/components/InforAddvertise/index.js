import classNames from "classnames/bind";
import styles from './InforAddvertise.module.scss'

const cx = classNames.bind(styles);
function InforAddvertise() {
    return <div className={cx('header-right-avatar-footer')}>
                <p>
                    <span>Quyền riêng tư</span> · 
                    <span> Điều khoản</span> · 
                    <span> Quảng cáo</span> · 
                    <span> Lựa chọn quảng cáo</span> · 
                    <span> Cookie</span> · 
                    Xem thêm · Meta · © 2023 
                </p>
        </div>;
}

export default InforAddvertise;