import React, { useEffect, useState } from "react";
import emojiList from "../emojilist";
import EmojiContainer from './EmojiContainer'
const Main = () => {
  const [list, setlist] = useState(emojiList);
  const [keyword, setkeyword] = useState();

  const typed = (e) => {
    const value = e.target.value.toLowerCase()   ;
    setkeyword(value);
  };

  useEffect(
    (_) => {
      const FilterList = emojiList.filter((singleEmoji) => {
        if (singleEmoji.emoji===keyword){
          return true;
        }
        if (singleEmoji.description.startsWith(keyword)) {
          return true;
        }
        if (singleEmoji.category.startsWith(keyword)) {
          return true;
        }
        if (singleEmoji.aliases.some((e) => e.startsWith(keyword))) {
          return true;
        }

        return false;
      });
      setlist(FilterList);
    },
    [keyword]
  );

  return (
    <main>
    
      <input type="text" placeholder=" &emsp;🔎 &emsp; Search Emoji" onKeyUp={typed} />
      {keyword==="" ? false : <h3>Result for-  &emsp; {keyword}</h3>}
      <hr/>
      {list.length === 0 ? (<p className="not_found">No Emoji Found  😳</p>) : <EmojiContainer list={list}/>}
    </main>
  );
};

export default Main;
 