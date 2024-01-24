import React from 'react';
import './Welcome.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFolder, faTrashCan } from '@fortawesome/free-regular-svg-icons';
import { faPlus } from '@fortawesome/free-solid-svg-icons';


import { Link } from 'react-router-dom';
function Welcome_page() {
    return (
        <div className='container-fluid'>
            <header className='header-class'>
                <div className='menu'>
                    <h5 classsName='logo-text'>TEN Market</h5>
                    <Link to="/QnA_page"><button className='new-btn  mt-4'><FontAwesomeIcon icon={faPlus} ></FontAwesomeIcon>Add Blueprint</button></Link>

                    <p className='draft mt-3'>DRAFTS</p>
                    <div className='divider'></div>
                    <p className='draft mt-3'>GENERATED BLUEPRINTS</p>

                    <button type='button' className='new-btn mt-3'><FontAwesomeIcon icon={faFolder} ></FontAwesomeIcon>Standard</button>
                    <button type='button' className='new-btn mt-3'><FontAwesomeIcon icon={faFolder} ></FontAwesomeIcon>Upgraded</button>
                </div>
                <div className='del-position'>
                    <button type='button' className='delete mt-3'><FontAwesomeIcon icon={faTrashCan} ></FontAwesomeIcon>Clear drafts</button>
                </div>
            </header>

            <div className='day-algin'>

                <div class="component__ProfileDropdown fix-top-right">
                    <div class="button" data-type="compact">
                        <picture class="profile__img">
                            <img src="https://api.dicebear.com/6.x/initials/svg?seed=Mohd Faisal Saifi" alt="user profile image" />
                        </picture>
                        <div class="profile__name" >
                            <p style={{ margin: "0px" }}>Hi, Mohd Faisal Saifi</p>
                        </div>
                        <span class="icon" data-active="false">
                            <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14 17.9375L7 10.9375L8.25417 9.68335L14 15.4583L19.7458 9.71252L21 10.9667L14 17.9375Z" fill="white"></path></svg>
                        </span></div>
                    <div data-active="false" class="dropdown">
                        <a href="/price">
                            <div class="item">
                                <svg width="18" height="19" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M7.5 9.40625C6.675 9.40625 6 9.14375 5.475 8.61875C4.95 8.09375 4.6875 7.41875 4.6875 6.59375C4.6875 5.76875 4.95 5.09375 5.475 4.56875C6 4.04375 6.675 3.78125 7.5 3.78125C8.325 3.78125 9 4.04375 9.525 4.56875C10.05 5.09375 10.3125 5.76875 10.3125 6.59375C10.3125 7.41875 10.05 8.09375 9.525 8.61875C9 9.14375 8.325 9.40625 7.5 9.40625ZM1.5 15.425V13.6625C1.5 13.225 1.60938 12.8313 1.82812 12.4813C2.04688 12.1313 2.3625 11.8625 2.775 11.675C3.675 11.275 4.50938 10.9875 5.27813 10.8125C6.04688 10.6375 6.7875 10.55 7.5 10.55H7.93125C7.85625 10.725 7.8 10.8969 7.7625 11.0656C7.725 11.2344 7.69375 11.4375 7.66875 11.675H7.5C6.775 11.675 6.06563 11.7531 5.37188 11.9094C4.67813 12.0656 3.9625 12.325 3.225 12.6875C3.025 12.7875 2.875 12.9281 2.775 13.1094C2.675 13.2906 2.625 13.475 2.625 13.6625V14.3H7.66875C7.73125 14.525 7.80625 14.7281 7.89375 14.9094C7.98125 15.0906 8.0875 15.2625 8.2125 15.425H1.5ZM12.5063 16.25L12.3188 15.0125C12.1063 14.95 11.8906 14.8594 11.6719 14.7406C11.4531 14.6219 11.2688 14.4875 11.1188 14.3375L10.0875 14.5625L9.61875 13.775L10.5 12.95C10.475 12.8375 10.4625 12.6813 10.4625 12.4813C10.4625 12.2812 10.475 12.125 10.5 12.0125L9.61875 11.1875L10.0875 10.4L11.1188 10.625C11.2688 10.475 11.4531 10.3406 11.6719 10.2219C11.8906 10.1031 12.1063 10.0125 12.3188 9.95L12.5063 8.7125H13.5188L13.7063 9.95C13.9188 10.0125 14.1344 10.1031 14.3531 10.2219C14.5719 10.3406 14.7563 10.475 14.9063 10.625L15.9375 10.4L16.4063 11.1875L15.525 12.0125C15.55 12.125 15.5625 12.2812 15.5625 12.4813C15.5625 12.6813 15.55 12.8375 15.525 12.95L16.4063 13.775L15.9375 14.5625L14.9063 14.3375C14.7563 14.4875 14.5719 14.6219 14.3531 14.7406C14.1344 14.8594 13.9188 14.95 13.7063 15.0125L13.5188 16.25H12.5063ZM13.0125 13.9813C13.4625 13.9813 13.825 13.8438 14.1 13.5688C14.375 13.2938 14.5125 12.9313 14.5125 12.4813C14.5125 12.0312 14.375 11.6688 14.1 11.3938C13.825 11.1188 13.4625 10.9813 13.0125 10.9813C12.5625 10.9813 12.2 11.1188 11.925 11.3938C11.65 11.6688 11.5125 12.0312 11.5125 12.4813C11.5125 12.9313 11.65 13.2938 11.925 13.5688C12.2 13.8438 12.5625 13.9813 13.0125 13.9813ZM7.5 8.28125C7.9875 8.28125 8.39063 8.12188 8.70938 7.80313C9.02813 7.48438 9.1875 7.08125 9.1875 6.59375C9.1875 6.10625 9.02813 5.70313 8.70938 5.38438C8.39063 5.06563 7.9875 4.90625 7.5 4.90625C7.0125 4.90625 6.60938 5.06563 6.29063 5.38438C5.97188 5.70313 5.8125 6.10625 5.8125 6.59375C5.8125 7.08125 5.97188 7.48438 6.29063 7.80313C6.60938 8.12188 7.0125 8.28125 7.5 8.28125Z" fill="white"></path>
                                </svg>
                                <p>My plan</p>
                            </div>
                        </a>
                        <a href="/settings">
                            <div class="item">
                                <svg width="18" height="19" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.275 17L6.9 14.6375C6.6625 14.55 6.4125 14.4313 6.15 14.2813C5.8875 14.1313 5.65625 13.975 5.45625 13.8125L3.24375 14.825L1.5 11.75L3.525 10.2688C3.5 10.1562 3.48438 10.0281 3.47813 9.88438C3.47188 9.74063 3.46875 9.6125 3.46875 9.5C3.46875 9.3875 3.47188 9.25938 3.47813 9.11563C3.48438 8.97188 3.5 8.84375 3.525 8.73125L1.5 7.25L3.24375 4.175L5.45625 5.1875C5.65625 5.025 5.8875 4.86875 6.15 4.71875C6.4125 4.56875 6.6625 4.45625 6.9 4.38125L7.275 2H10.725L11.1 4.3625C11.3375 4.45 11.5906 4.56563 11.8594 4.70938C12.1281 4.85313 12.3563 5.0125 12.5438 5.1875L14.7563 4.175L16.5 7.25L14.475 8.69375C14.5 8.81875 14.5156 8.95313 14.5219 9.09688C14.5281 9.24063 14.5313 9.375 14.5313 9.5C14.5313 9.625 14.5281 9.75625 14.5219 9.89375C14.5156 10.0312 14.5 10.1625 14.475 10.2875L16.5 11.75L14.7563 14.825L12.5438 13.8125C12.3438 13.975 12.1156 14.1344 11.8594 14.2906C11.6031 14.4469 11.35 14.5625 11.1 14.6375L10.725 17H7.275ZM9 11.9375C9.675 11.9375 10.25 11.7 10.725 11.225C11.2 10.75 11.4375 10.175 11.4375 9.5C11.4375 8.825 11.2 8.25 10.725 7.775C10.25 7.3 9.675 7.0625 9 7.0625C8.325 7.0625 7.75 7.3 7.275 7.775C6.8 8.25 6.5625 8.825 6.5625 9.5C6.5625 10.175 6.8 10.75 7.275 11.225C7.75 11.7 8.325 11.9375 9 11.9375ZM9 10.8125C8.6375 10.8125 8.32813 10.6844 8.07188 10.4281C7.81563 10.1719 7.6875 9.8625 7.6875 9.5C7.6875 9.1375 7.81563 8.82813 8.07188 8.57188C8.32813 8.31563 8.6375 8.1875 9 8.1875C9.3625 8.1875 9.67188 8.31563 9.92813 8.57188C10.1844 8.82813 10.3125 9.1375 10.3125 9.5C10.3125 9.8625 10.1844 10.1719 9.92813 10.4281C9.67188 10.6844 9.3625 10.8125 9 10.8125ZM8.175 15.875H9.825L10.0875 13.775C10.5 13.675 10.8906 13.5188 11.2594 13.3063C11.6281 13.0938 11.9625 12.8375 12.2625 12.5375L14.25 13.4L15 12.05L13.2375 10.7563C13.2875 10.5438 13.3281 10.3344 13.3594 10.1281C13.3906 9.92188 13.4062 9.7125 13.4062 9.5C13.4062 9.2875 13.3938 9.07813 13.3688 8.87188C13.3438 8.66563 13.3 8.45625 13.2375 8.24375L15 6.95L14.25 5.6L12.2625 6.4625C11.975 6.1375 11.65 5.86563 11.2875 5.64688C10.925 5.42813 10.525 5.2875 10.0875 5.225L9.825 3.125H8.175L7.9125 5.225C7.4875 5.3125 7.09063 5.4625 6.72188 5.675C6.35313 5.8875 6.025 6.15 5.7375 6.4625L3.75 5.6L3 6.95L4.7625 8.24375C4.7125 8.45625 4.67188 8.66563 4.64063 8.87188C4.60938 9.07813 4.59375 9.2875 4.59375 9.5C4.59375 9.7125 4.60938 9.92188 4.64063 10.1281C4.67188 10.3344 4.7125 10.5438 4.7625 10.7563L3 12.05L3.75 13.4L5.7375 12.5375C6.0375 12.8375 6.37188 13.0938 6.74063 13.3063C7.10938 13.5188 7.5 13.675 7.9125 13.775L8.175 15.875Z" fill="white"></path>
                                </svg>
                                <p>Settings</p>
                            </div>
                        </a>
                        <a href="/faq">
                            <div class="item">
                                <svg width="18" height="19" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3.375 16.25C3.075 16.25 2.8125 16.1375 2.5875 15.9125C2.3625 15.6875 2.25 15.425 2.25 15.125V3.875C2.25 3.575 2.4 3.5375 2.625 3.3125C2.85 3.0875 3.0956 3.0875 3.3956 3.0875L8.625 3.125V4.25H3.375V15.125H14.25V9.875H15.375V15.125C15.375 15.425 15.4125 15.65 15.1875 15.875C14.9625 16.1 14.925 16.25 14.625 16.25H3.375ZM7.1625 12.1438L6.375 11.3375L13.8375 3.875H9.73125V2.75H15.75V8.76875H14.625V4.68125L7.1625 12.1438Z" fill="white"></path>
                                </svg>
                                <p>Help &amp; FAQs</p>
                            </div></a>
                        <div class="item">
                            <svg width="18" height="19" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3.375 16.25C3.075 16.25 2.8125 16.1375 2.5875 15.9125C2.3625 15.6875 2.25 15.425 2.25 15.125V3.875C2.25 3.575 2.3625 3.3125 2.5875 3.0875C2.8125 2.8625 3.075 2.75 3.375 2.75H8.83125V3.875H3.375V15.125H8.83125V16.25H3.375ZM12.4875 12.7812L11.6813 11.975L13.5938 10.0625H7.03125V8.9375H13.5563L11.6438 7.025L12.45 6.21875L15.75 9.51875L12.4875 12.7812Z" fill="white"></path>
                            </svg>
                            <p>Log out</p>
                        </div>
                    </div>
                </div>



                
                    <div className='version mt-3'>
                        <span className='free'>Free</span>
                        <span className='pro'>Pro</span>
                        <span className='pro'>Premium</span>
                    </div>
                    <h1 className='title mt-3'>Welcome to TEN Market</h1>
                    <h3 className='subtitle mt-3'>BLUEPRINT TO BRILLIANCE</h3>
                    <div className='content mt-5'>
                        <p className='para1'>We are here for you if, you’re planning to start a company, need any marketing, tech or production services or
                            need an exhaustive scope of work for niche services such as SEO, Ads, Branding etc.</p>
                        <p className='para2 mt-2'><b>Disclaimer : We’re only your planners NOT your implementers. Make sure that your creative execution is done right</b></p>
                    </div>
                    <Link to="/QnA_page"><button className='create-btn mt-4'>Create Free Blueprint</button></Link>
                    {/* <link type="button" href="/Main_Page" className='create-btn mt-4'>Create Free Blueprint</link> */}
            
            </div>
        </div>



    );

}
export default Welcome_page;