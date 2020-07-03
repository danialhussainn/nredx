export  const reduc=(state=0,action)=>{
    debugger
     if(action.type=='INFO_PERSONAL'){
         return( {state,...action.payload })
        
     }    
}