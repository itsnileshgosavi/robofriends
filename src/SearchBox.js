import React from "react";
import 'tachyons';

const SearchBox=({ searchfield, searchChange })=>{
    return(
        <div className="pa2">
            <input 
            clasName="br2 b--washed-blue bw4"
            type="search" 
            placeholder="search robots" 
            onChange={searchChange}/>
        </div>
    );
}
export default SearchBox; 