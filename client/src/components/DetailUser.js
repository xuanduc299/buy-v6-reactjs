import React from 'react'
import { Link, Routes } from 'react-router-dom'
import Header from './Header';

// export default function DetailUser({ user }) {
//     return (
//         <div className="detailUser">
//             {
//                 <div className="username">
//                     <h2>{user.displayName}</h2>
//                 </div>
//             }
//         </div>
//     )
// }


const DetailUser = ({ user }) => {

    const logout = () => {
        window.open("http://localhost:5000/auth/logout", "_self");
    };
    return (
        <>

            <ul className='detailUser'>
                <nav>
                    <h2>{user}</h2>
                    <h2 onClick={logout} >Logout</h2>

                </nav>
            </ul>

        </>
    );
};

export default DetailUser;