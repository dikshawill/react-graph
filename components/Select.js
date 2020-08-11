
import react from 'react';

function Select ()
{

    return (
        <>
        <div>
        <form> 

<table  responsive id = "tab" >
        
    <tr>
        <td>
            Select:
        </td>
        <td>
        <select id = "myList" >
               <option value = "1" size= "22">Triangle</option>
               <option value = "2" size= "22">Triangle</option>
              
             </select>

        </td>
    </tr>
    <br/>
    <tr>
        <td>
            Compare To:
        </td>
        <td>
            <input 
             />
        
        </td>
    </tr>
    <br/>
    <tr>
        <td>
            From:
        </td>
        <td>
            <input 
            placeholder = "07-06-2020"/> 
        
        </td>
    </tr>
    <br/>
    <tr>
        <td>
            To:
        </td>
        <td>
            <input 
           
            placeholder = "07-07-2020" />
        

        </td>
    </tr>


    </table>

</form>
        </div>

        </>
    )
}
export default Select;