import classNames from "classnames/bind";
import styles from './ItemSidebar.module.scss'
const cx = classNames.bind(styles)
function ItemSidebar({data,isSidebar,isRightSidebar,index,handleClick}) {
    return <div className={cx('wrapper')}>
    {isSidebar && data.content.map((item,index) =>{
        return <div key={index} className={cx('sidebar')}>
                <div className={cx('sidebar-icon')}>
                    <img src={item.icon} alt=""/>
                </div>
                <span>{item.nameIcon}</span>
                </div>
    })}
    {   
        isRightSidebar && <><div onClick={() =>handleClick(index)}  className={cx('sidebar','sidebar-avatar' )}>
                <div className={cx('sidebar-icon')}>
                    <div className={cx('header-box-left-img')}>
                        <img src={data.img} alt=""/>
                        {data.isState && <div className={cx('status')}></div>}
                    </div>
                </div>
                <span>{data.nameImg}</span>
                </div>   
        </> 
    }
    </div> 
}

export default ItemSidebar;