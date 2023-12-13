import classNames from "classnames/bind";
import styles from './Story.module.scss';

const cx = classNames.bind(styles);
function Story({data,isMain}) {
    return <div className={cx('wrapper',isMain)}>
        <div className={cx('avatar-story')}>
            <img src={data.avatar} alt=""/>
        </div>
        <span>{data.nameAvatar}</span>
        <div className={cx('avatar-icon')}>
            <img src={data.icon} alt=""/>
        </div>
    </div>
}

export default Story;