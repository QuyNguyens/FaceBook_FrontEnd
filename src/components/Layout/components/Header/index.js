import classNames from 'classnames/bind';
import styles    from './Header.module.scss'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Tippy from '~/popper/Tippy';
import { Account } from '~/popper/searchResult';
import avatar_none from '~/assets/img/search.svg';
import images_accont from '~/assets/avatar';
import avatarUser from '~/assets/avatar/quy.jpg';
import {menuIcon,menuIconRight,mesgIcon,announIcon,avatarIcon} from '~/assets/header_right_menu/menu';
import Menu from '~/popper/HeaderMenu';
import MenuRight from '~/popper/HeaderMenu/MenuRight';
import dot3 from '~/assets/img/dot3.svg'
import msgall from '~/assets/img/msgall.svg'
import edit from '~/assets/img/edit.svg'
import x from '~/assets/img/x.svg'
import AccountMsg from '~/popper/Account';
import InforAddvertise from '../InforAddvertise';
import ItemSidebar from '~/popper/ItemSidebar';

const cx = classNames.bind(styles)
function Header() {
    const navigate = useNavigate();
    // headerLeft
    const [isSearchVisible, setIsSearchVisible] = useState(false);
    const [account, setAccount] = useState(images_accont);
    const [accountCopy, setAccountCopy] = useState(images_accont);
    const [valueSearch, setValueSearch] = useState('');
    const [isClose, setIsClose] = useState(true);
    const handleClickHeaderLeftIcon = () => {
        setIsSearchVisible(true);
        setIsMenuVisible(false);
        setIsMesgVisible(false);
        setIsAnnounVisible(false);
        setIsAvatarVisible(false);
    };
    const handleOutFocus = () =>{
        setIsSearchVisible(false);
        setIsClose(true)
    }
    const handleRemoveAccount = (index) =>{
        const newaccount = [...account]
        newaccount.splice(index,1)
        images_accont.splice(index,1)
        accountCopy.splice(index,1)
        setAccount(newaccount)
    }
    const handleChangeValueSearch = (e) =>{
        let a = accountCopy.filter((value) => value.name.includes(e.target.value));
        setValueSearch(e.target.value);
        setAccount(a)
        setIsClose(false)
    }
    const handleKeyDown = (event) => {
        if (event.key === "Enter") {
           const account_search = {avatar:avatar_none,name:valueSearch};
           const new_account = [account_search,...accountCopy];
           setAccount(new_account);
           setAccountCopy(new_account);
      };
    }
    // headerMid
    const [selectIcon,setSelectIcon] = useState(0);
    const handleSelectIcon = (page,index) =>{
        setSelectIcon(index);
        navigate(page);
    }
    // headerRight
    const [isMenuVisible, setIsMenuVisible] = useState(false);
    const [menuIconCopy,setMenuIconCopy] = useState(menuIcon);
    const handleClickMenu = () =>{
        setIsMenuVisible(!isMenuVisible)
        setIsSearchVisible(false);
        setIsMesgVisible(false);
        setIsAnnounVisible(false);
        setIsAvatarVisible(false);
    }
    const handleOnchangeMenu = (e) =>{
        const newMenuIcon = menuIcon.reduce((acc, item) => {
            const filteredTitles = item.content.filter((title) => title.nameIcon.includes(e.target.value));
            if (filteredTitles.length > 0) {
              acc.push({
                ...item,
                content: filteredTitles,
              });
            }
            return acc;
          }, []);
        setMenuIconCopy(newMenuIcon);
    }
    // headerRightMesg
    const [isMesgVisible, setIsMesgVisible] = useState(false);
    const [mesgIconCopy, setMesgIconCopy] = useState(mesgIcon);
    const handleClickMsg = () =>{
        setIsMenuVisible(false);
        setIsSearchVisible(false);
        setIsMesgVisible(!isMesgVisible);
        setIsAnnounVisible(false);
        setIsAvatarVisible(false);
    }
    const handleOnchangeMsg =(e)=>{
        let newMsgIcon = mesgIcon.filter((value) => value.nameImg.includes(e.target.value));
        setMesgIconCopy(newMsgIcon)
    }
    // headerRightAnnounce
    const [isAnnounVisible, setIsAnnounVisible] = useState(false);
    const handleClickAnnoun = () =>{
        setIsAnnounVisible(!isAnnounVisible);
        setIsMenuVisible(false);
        setIsSearchVisible(false);
        setIsAvatarVisible(false);
        setIsMesgVisible(false);
    }
    // headerRightAvatar
    const [isAvatarVisible, setIsAvatarVisible] = useState(false);
    const handleClickAvatar = () =>{
        setIsAvatarVisible(!isAvatarVisible)
        setIsAnnounVisible(false);
        setIsMenuVisible(false);
        setIsSearchVisible(false);
        setIsMesgVisible(false);
    }
    // newMessenger
    const [isNewMsgVisible, setIsNewMsgVisible] = useState(false);
    const [listAccountCopy,setListAccountCopy] = useState([]);
    const handleNewMessenger = () =>{
        setIsNewMsgVisible(true);
    }
    const handleClickOffNewMsg = () =>{
        setIsNewMsgVisible(false);
    }
    const handleOnchangeNewMsg = (e) =>{
       const newNewMsg =  mesgIcon.filter(data => data.nameImg.includes(e.target.value));
       setListAccountCopy(newNewMsg);
       if(e.target.value===""){
          setListAccountCopy([]);
       }
    }
    return <div className={cx('header')}>
        <div className={cx('header-left')}>
            <div className={cx('header-left-icon')}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z"/></svg>
            </div>
            <div className={cx('header-left-search')} onClick={handleClickHeaderLeftIcon}>
                <svg  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"/></svg>
                <input onChange={handleChangeValueSearch}
                       onBlur={handleOutFocus} 
                       onKeyDown={handleKeyDown}
                       placeholder='Tìm kiếm trên Facebook'/>
            </div>
            {isSearchVisible && <Tippy left small>
                <div className={cx('wraper-header')}>
                    <h3>Gần đây</h3>
                    <p>Chỉnh sửa</p>
                </div>
                {account.map((data,index) =>{                       
                    return <Account key={index} data={data} handleRemoveAccount={handleRemoveAccount} index={index} isClose={isClose}/>
                })}
            </Tippy>}
        </div>
        <ul className={cx('header-mid')}>
                <li onClick={() =>handleSelectIcon('/',0)} style={{borderBottom: selectIcon===0?'3px solid blue':'none'}}>
                    <svg style={{ fill: selectIcon===0?"#0866FF":"black" }} viewBox="0 0 24 24" width="1em" height="1em" ><path d="M9.464 1.286C10.294.803 11.092.5 12 .5c.908 0 1.707.303 2.537.786.795.462 1.7 1.142 2.815 1.977l2.232 1.675c1.391 1.042 2.359 1.766 2.888 2.826.53 1.059.53 2.268.528 4.006v4.3c0 1.355 0 2.471-.119 3.355-.124.928-.396 1.747-1.052 2.403-.657.657-1.476.928-2.404 1.053-.884.119-2 .119-3.354.119H7.93c-1.354 0-2.471 0-3.355-.119-.928-.125-1.747-.396-2.403-1.053-.656-.656-.928-1.475-1.053-2.403C1 18.541 1 17.425 1 16.07v-4.3c0-1.738-.002-2.947.528-4.006.53-1.06 1.497-1.784 2.888-2.826L6.65 3.263c1.114-.835 2.02-1.515 2.815-1.977zM10.5 13A1.5 1.5 0 0 0 9 14.5V21h6v-6.5a1.5 1.5 0 0 0-1.5-1.5h-3z"></path></svg>
                </li>
                <li onClick={() =>handleSelectIcon('/friend',1)} style={{borderBottom: selectIcon===1?'3px solid blue':'none'}}>
                    <svg style={{ fill: selectIcon===1?"#0866FF":"black" }} viewBox="0 0 24 24" width="1em" height="1em" ><path d="M8 2.5a4.5 4.5 0 1 0 0 9 4.5 4.5 0 0 0 0-9zM5.5 7a2.5 2.5 0 1 1 5 0 2.5 2.5 0 0 1-5 0zm-.25 6A4.75 4.75 0 0 0 .5 17.75 3.25 3.25 0 0 0 3.75 21h8.5a3.25 3.25 0 0 0 3.25-3.25A4.75 4.75 0 0 0 10.75 13h-5.5zM2.5 17.75A2.75 2.75 0 0 1 5.25 15h5.5a2.75 2.75 0 0 1 2.75 2.75c0 .69-.56 1.25-1.25 1.25h-8.5c-.69 0-1.25-.56-1.25-1.25zM14 9.5a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0zM17.5 8a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zm0 6.5a1 1 0 1 0 0 2h2.3a1.7 1.7 0 0 1 1.7 1.7.8.8 0 0 1-.8.8h-3.2a1 1 0 1 0 0 2h3.2a2.8 2.8 0 0 0 2.8-2.8 3.7 3.7 0 0 0-3.7-3.7h-2.3z"></path></svg>
                </li >
                <li onClick={() =>handleSelectIcon('/',2)} style={{borderBottom: selectIcon===2?'3px solid blue':'none'}}>
                    <svg style={{ fill: selectIcon===2?"#0866FF":"black" }} viewBox="0 0 24 24" width="1em" height="1em" ><path d="M10.996 8.132A1 1 0 0 0 9.5 9v4a1 1 0 0 0 1.496.868l3.5-2a1 1 0 0 0 0-1.736l-3.5-2z"></path><path d="M14.573 2H9.427c-1.824 0-3.293 0-4.45.155-1.2.162-2.21.507-3.013 1.31C1.162 4.266.817 5.277.655 6.477.5 7.634.5 9.103.5 10.927v.146c0 1.824 0 3.293.155 4.45.162 1.2.507 2.21 1.31 3.012.802.803 1.813 1.148 3.013 1.31C6.134 20 7.603 20 9.427 20h5.146c1.824 0 3.293 0 4.45-.155 1.2-.162 2.21-.507 3.012-1.31.803-.802 1.148-1.813 1.31-3.013.155-1.156.155-2.625.155-4.449v-.146c0-1.824 0-3.293-.155-4.45-.162-1.2-.507-2.21-1.31-3.013-.802-.802-1.813-1.147-3.013-1.309C17.866 2 16.397 2 14.573 2zM3.38 4.879c.369-.37.887-.61 1.865-.741C6.251 4.002 7.586 4 9.5 4h5c1.914 0 3.249.002 4.256.138.978.131 1.496.372 1.865.74.37.37.61.888.742 1.866.135 1.007.137 2.342.137 4.256 0 1.914-.002 3.249-.137 4.256-.132.978-.373 1.496-.742 1.865-.369.37-.887.61-1.865.742-1.007.135-2.342.137-4.256.137h-5c-1.914 0-3.249-.002-4.256-.137-.978-.132-1.496-.373-1.865-.742-.37-.369-.61-.887-.741-1.865C2.502 14.249 2.5 12.914 2.5 11c0-1.914.002-3.249.138-4.256.131-.978.372-1.496.74-1.865zM8 21.5a1 1 0 1 0 0 2h8a1 1 0 1 0 0-2H8z"></path></svg>
                </li>
                <li onClick={() =>handleSelectIcon('/',3)} style={{borderBottom: selectIcon===3?'3px solid blue':'none'}}>
                    <svg style={{ fill: selectIcon===3?"#0866FF":"black" }} viewBox="0 0 24 24" width="1em" height="1em" ><path d="M1.588 3.227A3.125 3.125 0 0 1 4.58 1h14.84c1.38 0 2.597.905 2.993 2.227l.816 2.719a6.47 6.47 0 0 1 .272 1.854A5.183 5.183 0 0 1 22 11.455v4.615c0 1.355 0 2.471-.119 3.355-.125.928-.396 1.747-1.053 2.403-.656.657-1.475.928-2.403 1.053-.884.12-2 .119-3.354.119H8.929c-1.354 0-2.47 0-3.354-.119-.928-.125-1.747-.396-2.403-1.053-.657-.656-.929-1.475-1.053-2.403-.12-.884-.119-2-.119-3.354V11.5l.001-.045A5.184 5.184 0 0 1 .5 7.8c0-.628.092-1.252.272-1.854l.816-2.719zM10 21h4v-3.5a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5V21zm6-.002c.918-.005 1.608-.025 2.159-.099.706-.095 1.033-.262 1.255-.485.223-.222.39-.55.485-1.255.099-.735.101-1.716.101-3.159v-3.284a5.195 5.195 0 0 1-1.7.284 5.18 5.18 0 0 1-3.15-1.062A5.18 5.18 0 0 1 12 13a5.18 5.18 0 0 1-3.15-1.062A5.18 5.18 0 0 1 5.7 13a5.2 5.2 0 0 1-1.7-.284V16c0 1.442.002 2.424.1 3.159.096.706.263 1.033.486 1.255.222.223.55.39 1.255.485.551.074 1.24.094 2.159.1V17.5a2.5 2.5 0 0 1 2.5-2.5h3a2.5 2.5 0 0 1 2.5 2.5v3.498zM4.581 3c-.497 0-.935.326-1.078.802l-.815 2.72A4.45 4.45 0 0 0 2.5 7.8a3.2 3.2 0 0 0 5.6 2.117 1 1 0 0 1 1.5 0A3.19 3.19 0 0 0 12 11a3.19 3.19 0 0 0 2.4-1.083 1 1 0 0 1 1.5 0A3.2 3.2 0 0 0 21.5 7.8c0-.434-.063-.865-.188-1.28l-.816-2.72A1.125 1.125 0 0 0 19.42 3H4.58z"></path></svg>
                </li>              
               <li onClick={() =>handleSelectIcon('/',4)} style={{borderBottom: selectIcon===4?'3px solid blue':'none'}}>
                    <svg style={{ fill: selectIcon===4?"#0866FF":"black" }} viewBox="0 0 24 24" width="1em" height="1em" ><path d="M12 6a4 4 0 1 0 0 8 4 4 0 0 0 0-8zm-2 4a2 2 0 1 1 4 0 2 2 0 0 1-4 0z"></path><path d="M.5 12C.5 5.649 5.649.5 12 .5S23.5 5.649 23.5 12 18.351 23.5 12 23.5.5 18.351.5 12zm2.21-2a9.537 9.537 0 0 0 0 3.993l.3.007A2 2 0 0 0 3 10h-.29zm.663-1.983a4 4 0 0 1 0 7.966 9.523 9.523 0 0 0 1.948 2.773A5.002 5.002 0 0 1 10 15.523h4a5.002 5.002 0 0 1 4.679 3.233 9.523 9.523 0 0 0 1.948-2.773 4 4 0 0 1 0-7.966A9.501 9.501 0 0 0 12 2.5a9.501 9.501 0 0 0-8.627 5.517zM21.5 12a9.55 9.55 0 0 0-.212-2.007l-.265.007H21a2 2 0 0 0-.01 4l.3-.007c.138-.643.21-1.31.21-1.993zM12 21.5a9.455 9.455 0 0 0 4.97-1.402A3 3 0 0 0 14 17.523h-4a3 3 0 0 0-2.97 2.575A9.456 9.456 0 0 0 12 21.5z"></path></svg>           
                </li>
        </ul>
        <ul className={cx('header-right')}>
            <li onClick={handleClickMenu}>
                <svg fill="currentColor" viewBox="0 0 24 24" width="1em" height="1em"><path d="M12 1a3 3 0 1 0 0 6 3 3 0 0 0 0-6zM4 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6zm8 0a3 3 0 1 0 0 6 3 3 0 0 0 0-6zm8 0a3 3 0 1 0 0 6 3 3 0 0 0 0-6zm0-8a3 3 0 1 0 0 6 3 3 0 0 0 0-6zM4 1a3 3 0 1 0 0 6 3 3 0 0 0 0-6zm8 16a3 3 0 1 0 0 6 3 3 0 0 0 0-6zm8 0a3 3 0 1 0 0 6 3 3 0 0 0 0-6zM4 17a3 3 0 1 0 0 6 3 3 0 0 0 0-6z"></path></svg>
            </li>
            <li onClick={handleClickMsg}>
                <svg fill="currentColor" viewBox="0 0 24 24" width="1em" height="1em"><path d="M.5 12C.5 5.649 5.649.5 12 .5S23.5 5.649 23.5 12 18.351 23.5 12 23.5c-1.922 0-3.736-.472-5.33-1.308a.63.63 0 0 0-.447-.069l-3.4.882a1.5 1.5 0 0 1-1.828-1.829l.882-3.4a.63.63 0 0 0-.07-.445A11.454 11.454 0 0 1 .5 12zm17.56-1.43a.819.819 0 0 0-1.125-1.167L14 11.499l-3.077-2.171a1.5 1.5 0 0 0-2.052.308l-2.93 3.793a.819.819 0 0 0 1.123 1.167L10 12.5l3.076 2.172a1.5 1.5 0 0 0 2.052-.308l2.931-3.793z"></path></svg>
            </li>
            <li onClick={handleClickAnnoun}>
                <svg fill="currentColor" viewBox="0 0 24 24" width="1em" height="1em"><path d="M3 9.5a9 9 0 1 1 18 0v2.927c0 1.69.475 3.345 1.37 4.778a1.5 1.5 0 0 1-1.272 2.295h-4.625a4.5 4.5 0 0 1-8.946 0H2.902a1.5 1.5 0 0 1-1.272-2.295A9.01 9.01 0 0 0 3 12.43V9.5zm6.55 10a2.5 2.5 0 0 0 4.9 0h-4.9z"></path></svg>
            </li>
            <li onClick={handleClickAvatar}>
                <img src={avatarUser} alt=""/>
            </li>
            {isMenuVisible && <Tippy large right>
                <h2>Menu</h2>
                <div className={cx('header-right-menu')}>
                    <div className={cx('header-right-menu-left')}>
                        <div className={cx('header-right-menu-left-search')}>
                            <svg  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"/></svg>
                            <input onChange={handleOnchangeMenu} placeholder='Tìm kiếm trong menu'/>
                        </div>
                        {menuIconCopy.map((data,index) =>{
                            return <Menu key={index} data={data}/>
                        })
                        }
                    </div>
                    <div className={cx('header-right-menu-right')}>
                        <h3>Tạo</h3>
                        {menuIconRight.map((data,index) =>{
                            return <MenuRight key={index} data={data}/>
                        })}                   
                    </div>
                </div>
            </Tippy>}
            {isMesgVisible && <Tippy normal right>
                <div className={cx('header-right-msg-header')}>
                    <h3>Chat</h3>
                    <ul>
                        <li>
                            <img src={dot3} alt=""/>
                        </li>
                        <li>
                            <img src={msgall} alt=""/>
                        </li>
                        <li>
                            <img src={edit} alt=""/>
                        </li>
                    </ul>
                </div>
                <div className={cx('header-right-msg-header-search')}>
                    <svg  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"/></svg>
                    <input onChange={handleOnchangeMsg} placeholder='Tìm kiếm trên Messenger'/>
                </div>
                <div className={cx('header-right-msg-header-1')}>
                    <span className={cx('header-right-msg-header-1-first')}>Hộp thư</span>
                    <span className={cx('header-right-msg-header-2-first')}>Cộng đồng</span>
                </div>
                {mesgIconCopy.map((data,index) =>{
                    return <AccountMsg key={index} data={data} isMesg/>
                })
                }
            </Tippy>}
            {isAnnounVisible&& <Tippy normal right>
                <div className={cx('header-right-announ-header')}>
                    <h2>Thông báo</h2>
                    <img src={dot3} alt=""/>
                </div>
                <div className={cx('header-right-msg-header-1')}>
                    <span className={cx('header-right-msg-header-1-first')}>Tất cả</span>
                    <span className={cx('header-right-msg-header-2-first')}>Chưa đọc</span>
                </div>
                <div className={cx('header-right-msg-header-2')}>
                    <h4>Mới</h4>
                    <span>Xem tất cả</span>
                </div>
                {announIcon.map((data,index) =>{
                    return <AccountMsg key={index} data={data} isAnnoun/>
                })

                }
            </Tippy>}
            {isAvatarVisible && <Tippy small right noscroll>
                <div className={cx('header-right-avatar-header')}>
                    <div className={cx('header-right-avatar-header1')}>
                        <img src={avatarUser} alt=""/>
                        <span>Quý Nguyễn</span>
                    </div>
                    <div className={cx('border')}></div>
                    <div className={cx('header-right-avatar-header2')}>
                        <p>Xem tất cả trang cá nhân</p>
                        <span>50+</span>
                    </div>
                </div>
                <div className={cx('header-right-menu-right','margin10')}>
                    {avatarIcon.map((data,index) =>{
                        return <MenuRight key={index} data={data}/>
                    })}                   
                </div>
                <InforAddvertise/>
            </Tippy>}
        </ul>
        <div onClick={handleNewMessenger} style={{zIndex:3}} className={cx('newmesg')}>
            <img src={edit} alt=""/>
        </div>
        {isNewMsgVisible && <Tippy newmsg>
            <div className={cx('newmsg-header')}>
                <p>Tin nhắn mới</p>
                <img onClick={handleClickOffNewMsg} src={x} alt=""/>
            </div>
            <div className={cx('newmsg-search')}>
                <p>Đến:</p>
                <input onChange={handleOnchangeNewMsg} type="text" autoFocus/>
            </div>
            <div className={cx('borderbt')}></div>   
            <div className={cx('newmsg-avatar')}>
                {listAccountCopy.map((data,index) =>{
                    return <ItemSidebar key={index} data={data} isRightSidebar/>
                })}
            </div>
        </Tippy>}
    </div>;
}

export default Header;