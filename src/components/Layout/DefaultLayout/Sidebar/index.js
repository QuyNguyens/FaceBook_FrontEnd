import classNames from "classnames/bind";
import { useState } from "react";
import styles from './Sidebar.module.scss'
import { menuIcon } from "~/assets/header_right_menu/menu";
import ItemSidebar from "~/popper/ItemSidebar";
import quy from '~/assets/avatar/quy.jpg'
import arrowbottom from '~/assets/img/arrowbottom.svg'
import arrowup from '~/assets/img/arrowup.svg'
import InforAddvertise from "../../components/InforAddvertise";
import icon1sidebardown from '~/assets/img/sidebardown1.jpg';
import icon2sidebardown from '~/assets/img/sidebardown2.png';
import { useNavigate } from "react-router-dom";
const cx = classNames.bind(styles)
function Sidebar() {
    const [valueGridAll,setValueGridALl] = useState('Xem thêm');
    const [menuIconShow,setmenuIconShow] = useState(menuIcon.slice(0, 2));  
    const handleClickGrid = () =>{
        if (valueGridAll === 'Xem thêm'){
            setmenuIconShow(menuIcon)
            setValueGridALl('Ẩn bớt')
        }else{
            setValueGridALl('Xem thêm')
            let menuIconStart = menuIcon.slice(0, 2);
            setmenuIconShow(menuIconStart)
        }
    }
    const navigate = useNavigate();
    return <div  className={cx('sidebar')}>
        <div className={cx('sidebar-up')}>
            <div onClick={() =>navigate('/profile')} className={cx('sidebar-avatar')}>
                <div className={cx('sidebar-icon')}>
                    <img src={quy} alt=""/>
                </div>
                <span>Quý Nguyễn</span>
            </div>
            {menuIconShow.map((data,index) =>{
                return <ItemSidebar key={index} data={data} isSidebar/>
            })}
            <div style={{padding:15 }} onClick={handleClickGrid} className={cx('sidebar-avatar')}>
                <div className={cx('sidebar-icon')}>
                    <img style={{width:20,height:20}} src={valueGridAll==='Xem thêm'?arrowbottom:arrowup} alt=""/>
                </div>
                <span >{valueGridAll}</span>
            </div>
        </div>
        <div className={cx('sidebar-down')}>
            <div className={cx('sidebar-down-header')}>
                <p>Lối tắt của bạn</p>
                <span>Chỉnh sửa</span>
            </div>
            <div className={cx('sidebar-avatar')}>
                <div className={cx('sidebar-icon')}>
                    <img src={icon1sidebardown} alt=""/>
                </div>
                <span>Không Giỏi Tiếng Anh - Xoá Group!!!</span>
            </div>
            <div className={cx('sidebar-avatar')}>
                <div className={cx('sidebar-icon')}>
                    <img src={icon2sidebardown} alt=""/>
                </div>
                <span>Tiến Lên Miền Nam Cybergame</span>
            </div>
            <InforAddvertise/>
        </div>
    </div>;
}

export default Sidebar;