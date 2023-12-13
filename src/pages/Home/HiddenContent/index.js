import ContentHid from "./ContentHid";
import './HiddenContent.module.scss';
function HiddenContent({data,handleClick}) {
    return <div className="wrapper">
        {data.map((item,index) =>{
            return <ContentHid key={index} data={item} handleClick={handleClick}/>
        })}
    </div> 
}

export default HiddenContent;