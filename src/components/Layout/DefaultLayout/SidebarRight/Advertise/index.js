import classNames from "classnames/bind";
import styles from './Advertise.module.scss';

const cx = classNames.bind(styles)
function Advertise({srcImg,title,link}) {
    return <div className={cx('wrapper')}>
        <img src={srcImg} alt=""/>
        <div className={cx('title')}>
            <p>{title}</p>
            <span>{link}</span>
        </div>
    </div>
}
export default Advertise;