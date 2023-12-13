import classNames from "classnames/bind";
import styles from './HiddenContent.module.scss';

const cx = classNames.bind(styles);
function ContentHid({data,handleClick}) {
    let classhover ="";
    if (data.isBlock){
        classhover ='nonehover';
    }
    const classes = cx('wrapperhid',classhover)
    return <div className={classes}>
        <img src={data.icon} alt=""/>
        <div className={cx('title')}>
            <span>{data.title}</span>
            {data.content && <p>{data.content}</p>}
        </div>
        {data.isBlock && <button onClick={handleClick}>{data.isBlock}</button>}
    </div>
}

export default ContentHid;