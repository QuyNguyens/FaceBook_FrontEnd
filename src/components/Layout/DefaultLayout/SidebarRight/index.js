import classNames from "classnames/bind";
import styles from './SidebarRight.module.scss'

import qc1 from '~/assets/img/sidebarqc1.jpg'
import qc2 from '~/assets/img/sidebarqc2.jpg'
import Advertise from "./Advertise";
import gift from '~/assets/img/giftsidebar.svg';
import dot from '~/assets/img/dot3.svg';
import search from '~/assets/img/search.svg';
import { mesgIcon,msgGroup } from "~/assets/header_right_menu/menu";
import ItemSidebar from "~/popper/ItemSidebar";
import { useState } from "react";
import BoxMessenger from "~/popper/ItemSidebar/BoxMessenger";
const cx = classNames.bind(styles)
function SidebarRight() {
    const [isMessengerBox,setIsMessengerBox] = useState(false);
    const [currentIndex,setCurrentIndex] = useState(0);
    const handleClickMesBox = (index) =>{
        setIsMessengerBox(true);
        setCurrentIndex(index);
        console.log('index',index)
    }
    return <div className={cx('sidebar-right')}>
      <p className={cx('title-header')}>Được tài trợ</p>
      <Advertise srcImg={qc1} title={'Chỉ còn 11.990.000 đ'} link={'thegioididong.com'}/>
      <Advertise srcImg={qc2} title={'Tặng thêm bộ phiếu mua hàng 10 Triệu'} link={'mediamart.vn'}/>
      <div className={cx('border-bottom')}></div>
      <p className={cx('title-header')}>Sinh nhật</p>
      <div className={cx('birthday')}>
        <img src={gift} alt=""/>
        <p>Hôm nay là sinh nhật của <b>Nguyễn Phương</b></p>
      </div>
      <div className={cx('border-bottom')}></div>
      <div className={cx('contact')}>
        <p className={cx('title-header')}>Người liên hệ</p>
        <div>
            <img src={search} alt=""/>
            <img src={dot} alt=""/>
        </div>
      </div>
      {mesgIcon.map((data,index) =>{
            return <ItemSidebar key={index} data={data} isRightSidebar index={index} handleClick={handleClickMesBox}/>
      })}
      {isMessengerBox && <BoxMessenger data={mesgIcon[currentIndex]} setIsMessengerBox={setIsMessengerBox} />}
      <div className={cx('border-bottom')}></div>
      <p className={cx('title-header')}>Cuộc trò chuyện nhóm</p>
      {msgGroup.map((data,index) =>{
            return <ItemSidebar key={index} data={data} isRightSidebar/>
      })}
    </div>;
}

export default SidebarRight;