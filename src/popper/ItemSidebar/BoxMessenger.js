import classNames from "classnames/bind";
import styles from './ItemSidebar.module.scss'
import phone from '~/assets/header_right_menu/phone.png'
import rphone from '~/assets/header_right_menu/rphone.png'
import tphone from '~/assets/header_right_menu/tphone.png'
import xphone from '~/assets/header_right_menu/xphone.png'
import f1box from '~/assets/header_right_menu/f1box.png';
import f2box from '~/assets/header_right_menu/f2box.png';
import f3box from '~/assets/header_right_menu/f3box.png';
import f4box from '~/assets/header_right_menu/f4box.png';
import f5box from '~/assets/header_right_menu/f5box.png';
import likebox from '~/assets/header_right_menu/likebox.png';

const cx = classNames.bind(styles)
function BoxMessenger({data,setIsMessengerBox}) {
    return <div className={cx('wrapper-box')}>
            <div className={cx('header-box')}>
                <div className={cx('header-box-left')}>
                    <div className={cx('header-box-left-img')}>
                        <img src={data.img} alt=""/>
                        {data.isState && <div className={cx('status')}></div>}
                    </div>
                    <div className={cx('header-box-name')}>
                        <span>{data.nameImg}</span>
                        <p>{data.state}</p>
                    </div>                  
                </div>
                <ul className={cx('header-box-right')}>
                    <li>
                        <img src={phone} alt=""/>
                    </li>
                    <li>
                        <img src={rphone} alt=""/>
                    </li>
                    <li>
                        <img src={tphone} alt=""/>
                    </li>
                    <li onClick={() => setIsMessengerBox(false)}>
                        <img src={xphone} alt=""/>
                    </li>
                </ul>
            </div>
            <div className={cx('content-box')}></div>
            <div className={cx('footer-box')}>
                <ul>
                    <li>
                        <img src={f1box} alt=""/>
                    </li>
                    <li>
                        <img src={f2box} alt=""/>
                    </li>
                    <li>
                        <img src={f3box} alt=""/>
                    </li>
                    <li>
                        <img src={f4box} alt=""/>
                    </li>
                </ul>
                <div className={cx('footer-box-ip')}>
                    <input type="text" placeholder="Aa"/>
                    <img src={f5box} alt=""/>
                </div>
                <div className={cx('footer-box-img')}>
                    <img src={likebox} alt=""/>
                </div>
            </div>
           </div>
}

export default BoxMessenger;