import { useState ,useEffect} from 'react';
import {CopyToClipboard} from 'react-copy-to-clipboard';
const SingleEmoji=({singleEmoji})=>{
    const [iscopied,setcopy]=useState(false);
    useEffect(_=>{
      if (iscopied){
        setTimeout(_=>{
         setcopy(false);
        },5000)
      }
    })
    return(
        <CopyToClipboard text={singleEmoji.emoji} onCopy={_=>setcopy(true)}> 
        
        <div className={`item ${iscopied ?'copied' : ""}` }>

        <p className='emoji'>{iscopied ?  '☑' : singleEmoji.emoji}  </p>
         <p>{singleEmoji.description}</p>
        </div>
        </CopyToClipboard>
    )
}
export default SingleEmoji;