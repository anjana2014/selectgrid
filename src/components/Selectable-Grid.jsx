import React, { useCallback, useState } from 'react'

const SelectableGrid = ({rows=15, cols=10}) => {
    const [isMouseDown,setIsMouseDown]=useState(false);
    const[selectedBoxes,setSelectedBoxes]=useState([]);
    

    const handleMouseUp = () => {
        setIsMouseDown(false);};
    const handleMouseDown=(boxNumber)=>{
        setIsMouseDown(true);
        setSelectedBoxes([boxNumber]);
    };
    const handleMouseEnter=useCallback((boxNumber)=>{
        if(isMouseDown){
            const startbox=selectedBoxes[0];
            const endbox=boxNumber;
            const startRow=Math.floor((startbox-1)/cols);
            const startcol=(startbox-1)%cols;
            const endRow=Math.floor((endbox-1)/cols);
            const endcol=(endbox-1)%cols;
            const minRow=Math.min(startRow,endRow);
            const maxRow=Math.max(startRow,endRow);
            const minCol=Math.min(startcol,endcol);
            const maxCol=Math.max(startcol,endcol);

            const selected=[];
            for(let row=minRow;row<=maxRow;row++){
              for(let col=minCol;col<=maxCol;col++){
                selected.push(row*cols+col+1);

                }
            }
            
            setSelectedBoxes(selected);
        }
    },[isMouseDown]);

  return (<div className="selectable-grid"style={{"--rows":rows,"--cols":cols}}onMouseUp={handleMouseUp}>
    
     {[...Array(rows * cols).keys()].map((_,i)=>(<div key={i} className={`box ${selectedBoxes.includes(i+1) ? "selected": ""}`} onMouseDown={()=>handleMouseDown(i+1)
    } 
    onMouseEnter={()=>handleMouseEnter(i+1)}
    
    >{i+1}</div>))}
     
  </div>  
  );  
};

export default SelectableGrid