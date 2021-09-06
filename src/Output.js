import React from 'react'


export default function Output (props)
{
   
    return(
        <div className="outputlist">
        
        
         <div>
             <b>Calculate Tip and Customer : </b>
         <button className="mybutton" onClick={() => { props.mytabletip() }}>Calculate</button>
         </div>

         <div>
             <table>
                 <tr>
                     <th>Total Customer</th>
                     <th>Tip</th>
                 </tr>
                     <tr>
                         <td className="mytable">
                         {props.mylength}
                         </td>
                     
                         <td className="mytable">
                         {props.mytip}
                        
                         </td>
                    
                 </tr>
             </table>
         </div>
        </div>
        
    )
}






