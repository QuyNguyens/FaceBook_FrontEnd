import classNames from 'classnames/bind';
import styles from './BoxNewMessenger.module.scss';
import edit from '~/assets/img/edit.svg';
const cx = classNames.bind(styles);

function BoxNewMessenger() {
    return <div style={{zIndex:3}} className={cx('wrapper')}>
        <img src={edit} alt=""/>
    </div>
}
export default BoxNewMessenger;