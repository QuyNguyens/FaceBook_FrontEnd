function RenderImages({data}) {
    console.log('data = ',data)
    return <ul>
        {data.map((item,index) =>{
            return <li key={index}>
                <img src={item.img} alt=""/>
                {data.name && <span>{data.name}</span>}
            </li>
        })}
    </ul>
}

export default RenderImages;