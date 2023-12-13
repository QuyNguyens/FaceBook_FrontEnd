import classNames from "classnames/bind";
import styles from './UploadEvent.module.scss'
import avatarmain from '~/assets/avatar/quy.jpg'
const cx = classNames.bind(styles)
function UploadEvent({data}) {
    return <div className={cx('box-mid','wrapper-upload','margin-top15')}>
                <div className={cx('upload-header')}>
                    <img src={avatarmain} alt=""/>
                    <input type="text" placeholder="Nguyễn ơi, bạn đang nghĩ gì thế?"/>
                </div>
                <div className={cx('marginbw')}></div>
                <ul className={cx('upload-event')}>
                    {data.map((item,index) =>{
                        return <li key={index}>
                            <img src={item.icon} alt=""/>
                            <span>{item.title}</span>
                        </li>
                    })}
                </ul>
            </div>;
}

export default UploadEvent;