import tructiep from './tructiep.svg';
import video from './anhvideo.png';
import camxuc from './camxuc.png';
import avatarBongda from './iconbongda.jpg'
import trung from '~/assets/avatar/trung.jpg'
import thuan from '~/assets/avatar/thuan.jpg'
import bachty from '~/assets/avatar/bachty.jpg'
import tai from '~/assets/avatar/tai.jpg'
import truong from '~/assets/avatar/trung.jpg'
import quy from '~/assets/avatar/quy.jpg'
import like from './like.svg'
import haha from './haha.svg'
import heart from './tim.svg'
import likeYellow from './likeyellow.gif'
import imgGau from './imgGau.jpg'
import imgContent from './bongda.jpg'
import iconAnhDaVang from './iconAnhdavang.jpg'
import xhd from './xHiden.png'
import whd from './wHiden.png'
import shd from './sHiden.png'
import rhd from './rHiden.png'
const uploadIcon = [
    {icon:tructiep,title:'Video trực tiếp'},
    {icon:video,title:'Ảnh/video'},
    {icon:camxuc,title:'Cảm xúc/hoạt động'}
]
const hiddenItem = [
    {icon:xhd,title:'Đã ẩn',content:'Việc ẩn bài viết giúp Facebook cá nhân hóa Bảng feed của bạn.',isBlock:'Hoàn tác'},
    {icon:whd,title:'Tạm ẩn trong 30 ngày',content:'Tạm thời không nhìn thấy bài viết nửa.'},
    {icon:rhd,title:'Báo cáo bài viết',content:'Chúng tôi sẻ không cho biết ai đã báo cáo'},
    {icon:shd,title:'Tuỳ chọn bảng tin' }
]
const dataBongda = {avatar:avatarBongda,imgContent:imgContent,nameAvatar:'Bóng đá 24h',time:'59 phút'}
const dataBongdaComment = {iconLike:like,iconHaha:haha,like:'496',comment:'33',share:'1',
comments:[{avatarRep:trung,name:'Lê Vĩnh Trung',commentRep:'tưởng người bồ khổng lồ',timePost:'16 giờ',isImg:imgGau},
{avatarRep:truong,name:'Đỗ Mạnh Trường',commentRep:'Nhìn haâland đá mình chả thấy có gì quá nổi bật mà cứ đòi cho haaland nhưng messi thì đk mỗi cái wc toả sáng vậy nên phải trao QBV cho lukaku thì hợp lý hơn nói hay làm giỏi yêu mọi clb',timePost:'7 phút'},
{avatarRep:tai,name:'Nguyễn Tấn Tài',commentRep:'Chừng nào Messi còn đá bóng thì mặc định. Có gì khó hiểu đâu',timePost:'9 phút',isImg:likeYellow},
{avatarRep:thuan,name:'Võ Hoàng Thuận',commentRep:'Messi dc ưu ái quá. Chả xứng đáng',timePost:'22 phút'},
{avatarRep:quy,name:'Nguyễn Công Quý',commentRep:'Hoa Vy quá xứng đáng ấy chứ , halaand chỉ giành nhiều danh hiệu cùng đội bóng chứ chưa thấy gánh team',timePost:'15 phút'},
{avatarRep:bachty,name:'Bạch Tỷ',commentRep:'chỉ cần k phải Messi thì ai cg xứng đáng',timePost:'20 phút'}]}

const dataAnhDaVang = {avatar:iconAnhDaVang,imgContent:imgContent,nameAvatar:'Anh Da Vàng',time:'3 giờ'}
const dataAnhDaVangComment = {iconLike:like,iconHeart:heart,like:'2.3K',comment:'351',share:'21',
comments:[{avatarRep:bachty,name:'Bạch Tỷ',commentRep:'Sao họ làm hay v chứ gặp tui nhìn vào đám ong là nổi hết da gà rồi',timePost:'1 giờ',isImg:likeYellow},
{avatarRep:truong,name:'Đỗ Mạnh Trường',commentRep:'Anh lấy một nửa ăn thôi để loài ông duy trì nồi giống ạ!',timePost:'35 phút'},
{avatarRep:tai,name:'Nguyễn Tấn Tài',commentRep:'mật ong nhìn ngon quá',timePost:'56 phút'},
{avatarRep:thuan,name:'Võ Hoàng Thuận',commentRep:'Nhìn mà nổi da gà ai nổi da gà giơ tay điểm danh',timePost:'22 phút'},
{avatarRep:quy,name:'Nguyễn Công Quý',commentRep:'Đỉnh của chót',timePost:'15 phút'},
{avatarRep:trung,name:'Lê Vĩnh Trung',commentRep:'Ngon nhưng khổ thân chn cả đời mới xây đc cái tổ thì bị lấy đi',timePost:'20 phút',isImg:imgGau}]}

export {uploadIcon,dataBongda,dataBongdaComment,dataAnhDaVang,dataAnhDaVangComment,hiddenItem}