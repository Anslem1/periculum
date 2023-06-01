import React from 'react';
import './Sidebar.css'
import { Link } from 'react-router-dom';
import HomeIcon from '../../icon/HomeIcon';
import DocumentIcon from '../../icon/DocumentIcon';
import LogoutIcon from '../../icon/LogoutIcon';


// when you click on the icons, it changes to  #2f74dd

const Sidebar: React.FC = () => {
    return (
        <aside className='sidebar-container'>
            <div>
                <div>
                    <Link to='/'>
                        <HomeIcon />
                    </Link>

                    <Link to='/all-customers'>
                        <DocumentIcon />
                    </Link>
                </div>
                <LogoutIcon />
            </div>
        </aside>
    );
};

export default Sidebar;