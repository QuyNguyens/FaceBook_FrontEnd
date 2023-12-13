import classNames from "classnames/bind";
import styles from './Home.module.scss';
import { StoryIcon,StoryMain } from "~/assets/story";
import Story from "./Story";
import tin from '~/assets/header_right_menu/tin.svg';
import reels from '~/assets/header_right_menu/xem.svg';
import avatarmain from '~/assets/avatar/quy.jpg';
import {hiddenItem, uploadIcon,dataBongda,dataBongdaComment,dataAnhDaVang,dataAnhDaVangComment } from "~/assets/container_mid";
import HeaderContent from "./HeaderContent";
import Comment from "./Comment";
import { AnhDaVang, Bongda24h } from "./TitleContent";
import HiddenContent from "./HiddenContent";
import { useState } from "react";
import UploadEvent from "./UploadEvent";
const cx = classNames.bind(styles);
function Home() {
    const [isHiddenBongDa,setIsHiddenBongDa] = useState(false);
    const [isHiddenAnhDaVang,setIsHiddenAnhDaVang] = useState(false);
    const handleClickHiddenBongDa = () =>{
        setIsHiddenBongDa(!isHiddenBongDa)
    }
    const handleClickHiddenAnhDaVang = () =>{
        setIsHiddenAnhDaVang(!isHiddenAnhDaVang)
    }
    return <div className={cx('wrapper')}>
        <div className={cx('box-mid','wrapper-story')}>
            <div className={cx('story-reels')}>
                <div>
                    <img src={tin} alt=""/>
                    <span>Tin</span>
                </div>        
                <div>
                    <img src={reels} alt=""/>
                    <span>Reels</span>
                </div>
            </div>
            <div className={cx('marginbw')}></div>
            <div className={cx('story-header')}>
                <Story data={StoryMain} isMain={'avatar-story-main'}></Story>
                {StoryIcon.map((data,index)=>{
                    return <Story key={index} data={data}/>
                })}
            </div>
        </div>
        <UploadEvent data={uploadIcon}/>
        <div className={cx('box-mid','wrapper-content','margin-top15')}>
            {isHiddenBongDa && <HiddenContent data={hiddenItem} handleClick={handleClickHiddenBongDa} />}
           {!isHiddenBongDa && <div> <HeaderContent data={dataBongda} isX handleClick={handleClickHiddenBongDa}/>
            <Bongda24h/>
            <div className={cx('content-image','margin-top15')}>
                <img src={dataBongda.imgContent} alt=""/>
            </div>
            <Comment data={dataBongdaComment} dataHeader={dataBongda} isBongda24h/> </div> }        
        </div>
        <div className={cx('box-mid','wrapper-content','margin-top15')}>
            {isHiddenAnhDaVang && <HiddenContent data={hiddenItem} handleClick={handleClickHiddenAnhDaVang}/>}
            {!isHiddenAnhDaVang && <div><HeaderContent data={dataAnhDaVang} isX handleClick={handleClickHiddenAnhDaVang}/>
            <AnhDaVang/>
            <div className={cx('content-image','margin-top15')}>
                <iframe width="1520" height="538" src="https://www.youtube.com/embed/YQjU7KET0yk" title="đi rừng lấy mật ong, yos hav zoov taus ntab#116" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
            </div>
            <Comment data={dataAnhDaVangComment} dataHeader={dataAnhDaVang} isAnhDaVang/></div> }         
        </div>
    </div>;
}

export default Home;