import SingleEmoji from './SingleEmoji';

const EmojiContainer=({list})=>{
    return(
        <div className="container">
        {list.map((singleEmoji, idx) => {
            return (
              
                    <div> <SingleEmoji key={idx} singleEmoji={singleEmoji} /></div>
           
              
            );
            
          })}
          </div>
    )
}
export default EmojiContainer;