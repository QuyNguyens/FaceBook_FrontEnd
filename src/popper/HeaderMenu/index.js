import classNames from 'classnames/bind';
import styles from './Menu.module.scss'

const cx = classNames.bind(styles)
function Menu({data}) {
    return <div className={cx('wrapper')}>
        <h4>{data.title}</h4>
        {data.content.map((item,index) =>{
            return <div key={index} className={cx('wrapper-icon')}>
                <img src={item.icon} alt=""/>
                <div className={cx('wrapper-left')}>
                    <span>{item.nameIcon}</span>
                    <span className={cx('wrapper-left-lastspan')}>{item.contentIcon}</span>
                </div>
            </div>
        })}
    </div>;
}

export default Menu;