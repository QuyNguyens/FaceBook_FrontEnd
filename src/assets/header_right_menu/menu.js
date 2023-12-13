import sukien from './sukien.png'
import banbe from './banbe.png'
import nhom from './nhom.png'
import bangtin from './bangtin.png'
import bangfeed from './bangphit.png'
import trang from './trang.png'
import videogame from './videochoigame.png'
import choigame from './choigame.png'
import video from './video.png'
import dondathang from './dondathang.png'
import market from './market.png'
import hoatdong from './hoatdongqc.png'
import kyniem from './kyniem.png'
import daluu from './daluu.png'
import trinhql from './trinhquanly.png'
import trungtamqc from './trungtamqc.png'
import hienmau from './hienmau.png'
import trungtamkh from './trungtamkh.png'
import chiendich from './chiendich.png'
import msgchild from './msgkid.png'

// Icon right
import dang from'./dang.svg'
import tin from'./tin.svg';
import thuocphim from './xem.svg'
import sukiensvg from './sukien.svg'
import trangsvg from './trang.svg'
import quangcaosvg from './thongbao.svg'
import nhomsvg from './group.svg'
import sukien2svg from './sukien1.svg'
import niemyet from './bag.svg'
// avatar
import trung from '~/assets/avatar/trung.jpg'
import kinh from '~/assets/avatar/kinh.jpg'
import lanh from '~/assets/avatar/lanh.jpg'
import tung from '~/assets/avatar/tung.jpg'
import tai from '~/assets/avatar/tai.jpg'
import quynh from '~/assets/avatar/quynh.jpg'
import lainguyen from '~/assets/avatar/lainguyen.jpg'
import quyenhuynh from '~/assets/avatar/quyenhuynh.jpg'
import truong from '~/assets/avatar/truong.jpg'
import bachty from '~/assets/avatar/bachty.jpg'
import thuan from '~/assets/avatar/thuan.jpg'
// logout avatar
import caidat from './caidat.svg'
import cauhoi from './cauhoi.svg'
import tronang from './tronang.svg'
import donggop from './donggop.svg'
import dangxuat from './dangxuat.svg'
import next from './next.svg'
const menuIcon = [
    {title:'Xã hội',
    content:[{
        icon:sukien,nameIcon: 'Sự kiện',contentIcon:'Tổ chức hoặc tìm sự kiện cùng những hoạt động khác trên mạng và ở quanh đây.'
    },{
        icon:banbe,nameIcon: 'Bạn bè',contentIcon:'Tìm kiếm bạn bè hoặc những người bạn có thể biết.'
    },{
        icon:nhom,nameIcon: 'Nhóm',contentIcon:'Kết nối với những người cùng chung sở thích.'
    },{
        icon:bangtin,nameIcon: 'Bảng tin',contentIcon:'Xem bài viết phù hợp của những người và Trang bạn theo dõi.'
    },{
        icon:bangfeed,nameIcon: 'Bảng feed',contentIcon:'Xem bài viết gần đây nhất từ bạn bè, nhóm, Trang và hơn thế nữa.'
    },{
        icon:trang,nameIcon: 'Trang',contentIcon:'Khám phá và kết nối với các doanh nghiệp trên Facebook.'
    }
    ]},
    {
        title: "Giải trí",
        content:[{
            icon:videogame,nameIcon: 'Video chơi game',contentIcon:'Xem, kết nối với những game và người phát trực tiếp mà bạn yêu thích.'
        },
        {
            icon:choigame,nameIcon:'Chơi game',contentIcon:'Chơi game bạn yêu thích'
        },{
            icon:video,nameIcon:'Video',contentIcon:'Đích đến của video phù hợp với sở thích và quan hệ kết nối của bạn.'
        }]
    },
    {
        title: "Mua sắm",
        content:[{
            icon:dondathang,nameIcon: 'Đơn đặt hàng và thanh toán',contentIcon:'Một cách dễ dàng, bảo mật để thanh toán trên các ứng dụng bạn đang dùng.'
        },
        {
            icon:market,nameIcon:'Marketplace',contentIcon:'Mua bán trong cộng đồng của bạn.'
        }]
    },
    {
        title: "Cá nhân",
        content:[{
            icon:hoatdong,nameIcon: 'Hoạt động quảng cáo gần đây',contentIcon:'Xem toàn bộ quảng cáo mà bạn đã tương tác trên Facebook.'
        },
        {
            icon:kyniem,nameIcon:'Kỷ niệm',contentIcon:'Lướt xem ảnh, video và bài viết cũ của bạn trên Facebook.'
        },{
            icon:daluu,nameIcon:'Đã lưu',contentIcon:'Tìm bài viết, ảnh và video mà bạn đã lưu để xem sau.'
        }]
    },
    {
        title: "Chuyên nghiệp",
        content:[{
            icon:trinhql,nameIcon: 'Trình quản lý quảng cáo',contentIcon:'Tạo, quản lý và theo dõi hiệu quả quảng cáo.'
        },
        {
            icon:trungtamqc,nameIcon:'Trung tâm quảng cáo',contentIcon:'Dùng các tính năng đơn giản hơn để quản lý mọi quảng cáo bạn tạo trên Trang.'
        }]
    },
    {
        title: "Nguồn lực cho cộng đồng",
        content:[{
            icon:hienmau,nameIcon: 'Hiến máu',contentIcon:'Cập nhật thông tin về hoạt động hiến máu ở gần bạn.'
        },
        {
            icon:trungtamkh,nameIcon:'Trung tâm khoa học khí hậu',contentIcon:'Tìm hiểu về vấn đề biến đổi khí hậu và tác động của hiện tượng này.'
        },{
            icon:chiendich,nameIcon:'Chiến dịch gây quỹ',contentIcon:'Quyên góp và gây quỹ cho tổ chức phi lợi nhuận và mục đích cá nhân.'
        }]
    },
    {
        title:'Sản phẩm khác của Meta',
        content:[{
            icon:msgchild,nameIcon:'Messenger Kids',contentIcon:'Cho phép bé nhắn tin với bạn thân và gia đình'
        }]
    }
]
const menuIconRight = [
    {
        id:1,
        content:[{
            icon:dang,title:'Đăng'
        },{
            icon:tin,title:'Tin'
        },{
            icon:thuocphim,title:'Thước phim'
        },{
            icon:sukiensvg,title:'Sự kiện trong đời'
        }]
    },{
        id:2,
        content:[{
            icon:trangsvg,title:'Trang'
        },{
            icon:quangcaosvg,title:'Quảng cáo'
        },{
            icon:nhomsvg,title:'Nhóm'
        },{
            icon:sukien2svg,title:'Sự kiện'
        },{
            icon:niemyet,title:'Bài niêm yết trên Marketplace'
        }]
    }
]
const mesgIcon = [
    {img:trung,nameImg:'Lê Vĩnh Trung',state:'Đang hoạt động',msg:'Ghê vậy sao :)',time:'1 phút',isState:'1'},
    {img:kinh,nameImg:'Hà Võ Gia Kính',state:'Hoạt động 15 phút trước sssssssssssssss   ',msg:'Cuối tháng về',time:'1 giờ'},
    {img:bachty,nameImg:'Bạch Tỷ',state:'Đang hoạt động',msg:'Ok.',time:'40 phút',isState:'1'},
    {img:lanh,nameImg:'Mai Đăng Lanh',state:'Hoạt động 22 phút trước',msg:'Lanh đã gửi 1 ảnh',time:'45 phút'},
    {img:tung,nameImg:'Nguyễn Hà Tùng',state:'Hoạt động 1 giờ trước',msg:'Lạy luôn',time:'27 phút'},
    {img:tai,nameImg:'Nguyễn Tấn Tài',state:'Đang hoạt động',msg:'Hôm qua tài không có đi học nơi, tài về quê',time:'2 giờ',isState:'1'},
    {img:quynh,nameImg:'Quỳnh Nguyễn',state:'Hoạt động 1 ngày trước',msg:'Ok eng',time:'59 phút'},
    {img:lainguyen,nameImg:'Lài Nguyễn',state:'Đang hoạt động',msg:'Ời ngoài nhà mưa nước tràn qua đường luôn',time:'12 phút',isState:'1'},
    {img:quyenhuynh,nameImg:'Quyền Huỳnh',state:'Đang hoạt động',msg:'Ra lẹ đi chơi',time:'3 giờ',isState:'1'},
    {img:truong,nameImg:'Đỗ Mạnh Trường',state:'Hoạt động 7 phút trước',msg:'Game không?',time:'26 phút'},
    {img:thuan,nameImg:'Võ Hoàng Thuận',state:'Hoạt động 36 phút trước',msg:'Dữ vậy sao :))',time:'1 ngày'}
]
const msgGroup = [
    {img:quyenhuynh,nameImg:'Quyền Huỳnh',msg:'Ra lẹ đi chơi',time:'3 giờ'},
    {img:truong,nameImg:'Đỗ Mạnh Trường',msg:'Game không?',time:'26 phút'},
    {img:thuan,nameImg:'Võ Hoàng Thuận',msg:'Dữ vậy sao :))',time:'1 ngày'}
]
const announIcon = [
    {img:trung,nameImg:'Lê Vĩnh Trung',announ:' Đã thêm vào tin của mình',time:'1 giờ trước'},
    {img:kinh,nameImg:'AI VIETNAM',announ:' HƯỚNG DẪN HỌC TẬP LỚP AIO2023_MODULE05_WEEK02',time:'13 giờ trước'},
    {img:bachty,nameImg:'Đại Học đừng học đại',announ:' có một bài viết mới: Trời đất ơi, cú tui cú tui. Kinh tế vi mô, kinh...',time:'14 giờ trước'},
    {img:lanh,nameImg:'Mai Đăng Lanh',announ:' Đã đăng 3 liên kết',time:'16 giờ trước'},
    {img:tung,nameImg:'Đại học Sư Phạm Đà Nẵng',announ:' Mn cho e hỏi, Năm 2023 nay em có đậu hình thức...',time:'16 giờ trước'},
    {img:tai,nameImg:'Leo Messi',announ:' Đã đăng video mới: "Messi Green Line"',time:'20 giờ trước'},
    {img:quynh,nameImg:'Quỳnh Nguyễn',announ:' Ok eng',time:'20 giờ trước'},
    {img:lainguyen,nameImg:'Lài Nguyễn',announ:' Đã thay đổi ảnh đại diện của cô ấy.',time:'21 giờ trước'},
    {img:quyenhuynh,nameImg:'Quyền Huỳnh',announ:' đã nêu bật một bình luận để bạn xem thử',time:'22 giờ trước'}
]
const avatarIcon = [
    {
        id:1,
        content:[{
            icon:caidat,title:'Cài đặt & quyền riêng tư',iconNext:next
        },{
            icon:cauhoi,title:'Trợ giúp & hỗ trợ',iconNext:next
        },{
            icon:tronang,title:'Màn hình & trợ năng',iconNext:next
        },{
            icon:donggop,title:'Đóng góp ý kiến'
        },{
            icon:dangxuat,title:'Đăng xuất'
        }]
    }
]
export {menuIcon,menuIconRight,mesgIcon,announIcon,avatarIcon,msgGroup};