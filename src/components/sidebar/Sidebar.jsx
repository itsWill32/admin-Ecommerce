import './Sidebar.css';
import { LineStyle,  
        PersonOutlineOutlined, 
        StorefrontOutlined, 
    } from '@mui/icons-material';
import { Link } from 'react-router-dom';


export default function Sidebar() {
  return (
    <>
        <div className='main-Sidebar'>
            <div className="container-Sidebar">
                <div className="menu-Sidebar">
                    <h3 className='title-Sidebar'>Dashboard</h3>
                    <ul className="options-Sidebar">
                        <Link to={'/'} className='link'>
                            <li className='option-Sidebar active'>
                                <LineStyle className='icon-Sidebar'/>
                                Home
                            </li></Link>
                        {/* <li className='option-Sidebar'>
                            <Timeline className='icon-Sidebar'/>
                            Analytics
                        </li>
                        <li className='option-Sidebar'>
                            <TrendingUp className='icon-Sidebar'/>
                            Sales
                        </li> */}
                    </ul>
                </div>
                <div className="menu-Sidebar">
                    <h3 className='title-Sidebar'>Quick Menu</h3>
                    <ul className="options-Sidebar">
                        <Link to={"/Users"} className='link'>
                            <li className='option-Sidebar '>
                                <PersonOutlineOutlined className='icon-Sidebar'/>
                                Users
                            </li>
                        </Link>
                        <Link to={"/Products"} className='link'>
                            <li className='option-Sidebar'>
                                <StorefrontOutlined className='icon-Sidebar'/>
                                Products 
                            </li>   
                        </Link>
                        {/* <li className='option-Sidebar'>
                            <AttachMoneyOutlined className='icon-Sidebar'/>
                            Transactions
                        </li>
                        <li className='option-Sidebar'>
                            <QueryStatsOutlined className='icon-Sidebar'/>
                            Reports
                        </li> */}
                    </ul>
                </div>
                {/* <div className="menu-Sidebar">
                    <h3 className='title-Sidebar'>Notifications</h3>
                    <ul className="options-Sidebar">
                        <li className='option-Sidebar'>
                            <EmailOutlined className='icon-Sidebar'/>
                            Mail
                        </li>
                        <li className='option-Sidebar'>
                            <DynamicFeedOutlined className='icon-Sidebar'/>
                            Feedback
                        </li>
                        <li className='option-Sidebar'>
                            <ChatBubbleOutline className='icon-Sidebar'/>
                            Messeges
                        </li>
                    </ul>
                </div>
                <div className="menu-Sidebar">
                    <h3 className='title-Sidebar'>Staff</h3>
                    <ul className="options-Sidebar">
                        <li className='option-Sidebar'>
                            <WorkOutlineOutlined className='icon-Sidebar'/>
                            Manage
                        </li>
                        <li className='option-Sidebar'>
                            <Timeline className='icon-Sidebar'/>
                            Analytics
                        </li>
                        <li className='option-Sidebar'>
                            <ReportGmailerrorredOutlined className='icon-Sidebar'/>
                            Reports
                        </li>
                    </ul>
                </div> */}
            </div>
        </div>
    </>
  )
}
