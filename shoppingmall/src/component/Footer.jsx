const Footer = ({setcurrentPage}) =>{

    return (
        <div>
            <span onClick={()=>setcurrentPage(1)}>1 </span>
            <span onClick={()=>{setcurrentPage(2)}}>2 </span>
            <span onClick={()=>{setcurrentPage(3)}}>3 </span>
            <span onClick={()=>{setcurrentPage(4)}}>4 </span>
            <span onClick={()=>{setcurrentPage(5)}}>5 </span>
        </div>
    )
}

export default Footer