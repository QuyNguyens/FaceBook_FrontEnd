import classNames from 'classnames/bind';
import styles from './MenuRight.module.scss'

const cx = classNames.bind(styles)
function MenuRight({data}) {
    return <div className={cx('wrapper')}>
        {data.content.map((item,index) =>{
            return <div key={index} className={cx('wrapper-icon')}>
                <div className={cx('wrapper-icon-img')}>
                    <img src={item.icon} alt=""/>
                </div>
                <span>{item.title}</span>
                {item.iconNext && <div className={cx('wrapper-icon-img-right')}>
                    <img src={item.iconNext} alt=""/>    
                </div>}
            </div>
        })}
    </div>;
}

export default MenuRight;