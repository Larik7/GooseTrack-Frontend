import css from './logoutBtn.module.css'
import { MdLogout } from 'react-icons/md';


export const LogoutBtn=()=>{
return(
<div>
    <button className={css.LogOutBtn}> Log out <span><MdLogout size={22}/> </span> </button>
      </div> 
)

}