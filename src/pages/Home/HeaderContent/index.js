import classNames from "classnames/bind";
import styles from './HeaderContent.module.scss';
import dot3 from '~/assets/img/dot3.svg';
import x from '~/assets/img/x.svg';
import earth from '~/assets/container_mid/earth.svg';
const cx = classNames.bind(styles);
function HeaderContent({data,isX,handleClick}) {
    console.log('handleClick',handleClick)
    return <div className={cx('content-header')}>
            <div className={cx('content-header-left')}>
                <img src={data.avatar} alt=""/>
                <div>
                    <p>{data.nameAvatar}</p>
                    <span>{data.time} · <img src={earth} alt=""/> </span>
                </div>
            </div>
            <div className={cx('content-header-right')}>
                <img src={dot3} alt=""/>
                {isX && <img onClick={handleClick} src={x} alt=""/>}
            </div>
        </div>;
}
export default HeaderContent;