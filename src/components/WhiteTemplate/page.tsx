export default function WhiteTemplate(props : any) {
    return (
        <div className="bg-white mt-[24vh] ml-[21vw] p-7 shadow-md w-[76%]">
            {props.children}        
        </div>  
    )
}