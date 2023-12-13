import styles from './Account.module.scss'
import classNames from 'classnames/bind';
const cx = classNames.bind(styles)

function AccountMsg({data,isMesg,isAnnoun}) {
    return <div className={cx('wrapper')}>
        <div className={cx('left-mesg-img')}>
            <img src={data.img} alt=""/>
            {data.isState && <div></div>}
        </div>
        {isMesg && 
            <div className={cx('wrapper-left-mesg')}>
                <span>{data.nameImg}</span>
                <p className={cx('wrapper-left-lastspan')}>{data.msg} <span>{data.time}</span></p>
            </div>
        }
        {isAnnoun && 
            <div className={cx('wrapper-left-announ')}>
                <p>
                    <span>{data.nameImg}</span>
                    <span className={cx('wrapper-left-last-span')}>{data.announ}</span>
                </p>
                <span className={cx('wrapper-left-announ-time')}>{data.time}</span>
            </div>
        }
</div>;
}

export default AccountMsg;