import classNames from "classnames/bind";
import styles from './TitleContent.module.scss';
import hahaglass from '~/assets/container_mid/hahaglass.png';
const cx = classNames.bind(styles);
function AnhDaVang() {
    return <div className={cx('content-title')}>
        <p>
            <span>Người như em xứng đáng có 10 người yêu</span>
            <img src={hahaglass} alt=""/>
        </p>
        <p>Cre: khongcoj2eq</p>
        <a href="https://www.facebook.com/hashtag/anhdaden">#anhdaden</a>
    </div>
}

export default AnhDaVang;