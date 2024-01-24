import React from 'react';
import './QnA_page.css';
import { TypeAnimation } from 'react-type-animation';
import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFolder, faTrashCan } from '@fortawesome/free-regular-svg-icons';
import { faPlus, faPenToSquare, faFileLines } from '@fortawesome/free-solid-svg-icons';
import {useRef} from "react";
import { Link } from 'react-router-dom';

function QnA_page() {
    const [count, setCount] = useState(["Blueprint 1"]);
    const [print, setPrint] = useState(1);

    const [idea, setIdea] = useState(false);
    const [startup, setStartup] = useState(false);
    const [brand, setBrand] = useState(false);
    const [digital, setDigital] = useState(false);
    const [technology, setTechnology] = useState(false);
    const [branding, setBranding] = useState(false);
    const [influencer, setInfluencer] = useState(false);
    const [public_relations, setPublic_relation] = useState(false);
    const [content, setContent] = useState(false);
    const [social, setSocial] = useState(false);
    const [performance, setPerformance] = useState(false);
    const [SEO, setSEO] = useState(false);

    const [buttonidea, setButtonidea] = useState("");
    const [buttonstartup, setButtonstartup] = useState("");
    const [buttonbrand, setButtonbrand] = useState("");
    const [buttondigital, setButtonDigital] = useState("");
    const [buttontechnology, setButtonTechnology] = useState("");
    const [buttonbranding, setButtonBranding] = useState("");
    const [buttonpublic, setButtonPublic] = useState("");
    const [buttoninfluencer, setButtonInfluencer] = useState("");
    const [buttoncontent, setButtonContent] = useState("");
    const [buttonsocial, setButtonSocial] = useState("");
    const [buttonperformance, setButtonPerformance] = useState("");
    const [buttonseo, setButtonSeo] = useState("");

    // function counter() {
    //     setCount(prevCount => prevCount + 1);
    // }

    const ideaHandler = () => {
        setIdea(true);
        setStartup(false);
        setBrand(false);
        setButtonidea("1px solid #0060d0");
        setButtonstartup(false);
        setButtonbrand(false);
    };

    const startupHandler = () => {
        setIdea(false);
        setStartup(true);
        setBrand(false);
        setButtonstartup("1px solid #0060d0");
        setButtonbrand(false);
        setButtonidea(false);

    };

    const brandHandler = () => {
        setIdea(false);
        setStartup(false);
        setBrand(true);
        setButtonbrand("1px solid #0060d0");
        setButtonstartup(false);
        setButtonidea(false);
    };

    const digitalHandler = () => {
        setDigital(true);
        setTechnology(false);
        setBranding(false);
        setInfluencer(false);
        setPublic_relation(false);
        setContent(false);

        setButtonDigital("1px solid #0060d0");
        setButtonTechnology(false);
        setButtonBranding(false);
        setButtonPublic(false);
        setButtonInfluencer(false);
        setButtonContent(false);
    };

    const technologyHandler = () => {
        setDigital(false);
        setTechnology();
        setBranding(false);
        setInfluencer(false);
        setPublic_relation(false);
        setContent(false);

        setButtonDigital(false);
        setButtonTechnology("1px solid #0060d0");
        setButtonBranding(false);
        setButtonPublic(false);
        setButtonInfluencer(false);
        setButtonContent(false);
    };

    const brandingHandler = () => {
        setDigital(false);
        setTechnology(false);
        setBranding(true);
        setInfluencer(false);
        setPublic_relation(false);
        setContent(false);

        setButtonDigital(false);
        setButtonTechnology(false);
        setButtonBranding("1px solid #0060d0");
        setButtonPublic(false);
        setButtonInfluencer(false);
        setButtonContent(false);
    };

    const influencerHandler = () => {
        setDigital(false);
        setTechnology(false);
        setBranding(false);
        setInfluencer(true);
        setPublic_relation(false);
        setContent(false);

        setButtonDigital(false);
        setButtonTechnology(false);
        setButtonBranding(false);
        setButtonPublic(false);
        setButtonInfluencer("1px solid #0060d0");
        setButtonContent(false);
    };

    const public_relationsHandler = () => {
        setDigital(false);
        setTechnology(false);
        setBranding(false);
        setInfluencer(false);
        setPublic_relation(true);
        setContent(false);

        setButtonDigital(false);
        setButtonTechnology(false);
        setButtonBranding(false);
        setButtonPublic("1px solid #0060d0");
        setButtonInfluencer(false);
        setButtonContent(false);
    };

    const contentHandler = () => {
        setDigital(false);
        setTechnology(false);
        setBranding(false);
        setInfluencer(false);
        setPublic_relation(false);
        setContent(true);

        setButtonDigital(false);
        setButtonTechnology(false);
        setButtonBranding(false);
        setButtonPublic(false);
        setButtonInfluencer(false);
        setButtonContent("1px solid #0060d0");
    };

    const socialHandler = () => {
        setSocial(true);
        setPerformance(false);
        setSEO(false);

        setButtonSocial("#0060d0");
        setButtonPerformance(false);
        setButtonSeo(false);
    };

    const performanceHandler = () => {
        setSocial(false);
        setPerformance(true);
        setSEO(false);

        setButtonSocial(false);
        setButtonPerformance("#0060d0");
        setButtonSeo(false);
    };

    const SEOHandler = () => {
        setSocial(false);
        setPerformance(false);
        setSEO(true);

        setButtonSocial(false);
        setButtonPerformance(false);
        setButtonSeo("#0060d0");
    };

    function add() {
        // console.log("before "+print)
        setPrint((prev) => {
            prev = prev + 1;
            setCount([...count, `Blueprint ${prev}`])
            return prev;
        })
        console.log(count);
    }

// blueprint Increment button
    const [clownCounter, setClownCounter] = React.useState(1);
    
    function onChangeForm() {

    }

    function addClown(event) {
        event.preventDefault();
        setClownCounter(prev=> prev+1);
    }
    
    console.log(clownCounter);

// Input field 
    const inputRef = useRef(null);
    const inputFunction = () =>{

        if (inputRef.current) {
            //console.log("This is working");
            //This will remove the read only attribute
            inputRef.current.removeAttribute('readOnly');
            //console.log(inputRef.current);
          }
    };
    return (
        <div className='container'>
            <header className='q-header-class'>
                <section className='logo1'>
                    <img src='./images/logo.png' alt=''></img>
                    <p>TenMarket</p>
                </section>
                <Link to="/QnA_page" style={{ padding: '0 18px' }}>
                    <button  onClick={addClown} className='new-btn mt-4' >
                        <FontAwesomeIcon icon={faPlus} ></FontAwesomeIcon>Add Blueprint</button></Link>

                <div style={{ padding: '0 18px', marginBottom: "180px" }}>
                    <p className='draft mt-3'>DRAFTS</p>
                    {/* <div className="blueprint--container" style={{ paddingBottom: '18px' }}>
                    
                        <button className="main-btn">
                            <FontAwesomeIcon icon={faFileLines} />
                        {count.map((item) => {
                        return <span style={{backgroundColor: '#292929',color: 'white',border: "0",}}>{item}</span>
                    })}
                            <FontAwesomeIcon icon={faPenToSquare} />
                            <FontAwesomeIcon icon={faTrashCan} />
                        </button>
                    </div> */}

                
            <div>
                 
                {Array.from({ length: clownCounter}, (_unused, index) => index + 1).map(
                    (clownIndex) => {
                        const clownid = `${clownIndex}`;
                        return (
                        <div key={clownid } className="main-btn mt-2">
                             <FontAwesomeIcon icon={faFileLines} />
                            <label htmlFor={clownid } className='main-btn'>Blueprint {clownIndex}</label>
                            <FontAwesomeIcon icon={faPenToSquare} />
                            <FontAwesomeIcon icon={faTrashCan} />
                        </div>
                        )
                    })
                }
                 
            </div>
        
                    <div className='divider'></div>
                    <p className='draft mt-3' style={{ marginBottom: '0px' }}>GENERATED BLUEPRINTS</p>

                    <button type='button' className='new-btn mt-3'><FontAwesomeIcon icon={faFolder} ></FontAwesomeIcon>Standard</button>
                    <button type='button' className='new-btn mt-3'><FontAwesomeIcon icon={faFolder} ></FontAwesomeIcon>Upgraded</button>
                    
                </div>

                {/* </div> */}
                <div className='del-position'>
                    <button type='button' className='q-delete mt-3'><FontAwesomeIcon icon={faTrashCan} ></FontAwesomeIcon>Clear drafts</button>
                </div>

            </header>


            <div className='row mt-2'>
                <div className='col-lg-9 col-md-8 col-12'>
                    <div class="blue">
                        <h3>Blueprint {clownCounter}</h3>
                        <div className='pro-algin'>
                        <span className='qna-free'>Free</span>
                        <span className='qna-pro'>Pro</span>
                        <span className='qna-pro'>Premium</span>
                    </div>
                    </div>
                    
                    <div className='mydivider mt-5'></div>
                    <div className='bussiness' style={{ padding: "32px 10px" }}>
                        <div className='logo'>
                            <img src='./images/logo.png' alt=''></img>
                        </div>
                        <span> <TypeAnimation
                            sequence={[
                                // Same substring at the start will only be typed out once, initially
                                'What is the stage of your business ?',
                                1000,
                            ]}
                            wrapper="span"
                            speed={70}
                            style={{ fontSize: '1rem', color: '#ececf1', flex: '1', textAlign: 'center', gap: '10px' }}
                        /></span>
                    </div>
                </div>

                <div className='row qna-box' style={{ width: "75%" }}>
                    <div className='col-lg-4 col-md-6 col-12' onClick={ideaHandler}>
                        <div className='qna-border' style={{ border: buttonidea }}>
                            <img src='./images/stage_idea.png' alt=''></img>
                            <div className='mydivider mt-4'></div>
                            <p className='qna-text'>Idea / Vision</p>
                        </div>

                    </div>
                    <div className='col-lg-4 col-md-6 col-12' onClick={startupHandler}>
                        <div className='qna-border' style={{ border: buttonstartup }}>
                            <img src='./images/stage_startup.png' alt=''></img>
                            <div className='mydivider mt-4'></div>
                            <p className='qna-text'>Startup / Growth</p>
                        </div>

                    </div>
                    <div className='col-lg-4 col-md-6 col-12' onClick={brandHandler}>
                        <div className='qna-border' style={{ border: buttonbrand }}>
                            <img src='./images/stage_brand.png' alt=''></img>
                            <div className='mydivider mt-4'></div>
                            <p className='qna-text'>Brand / Enterprise</p>
                        </div>

                    </div>

                    
               </div> 
               
                
                
            </div>
                

                {/* Idea / Vision */}
                {idea && (
                    <div>
                        <div className='bussiness' >
                            <div className='logo'>
                                <img src='./images/logo.png' alt=''></img>
                            </div>
                            <span> <TypeAnimation
                                sequence={[
                                    // Same substring at the start will only be typed out once, initially
                                    'What are you looking for (choose ONLY one)?',
                                    1000,
                                ]}
                                wrapper="span"
                                speed={70}
                                style={{ fontSize: '1rem', color: '#ececf1', flex: '1', textAlign: 'center', gap: '10px' }}
                            /></span>
                        </div>

                        <div className='row qna-box'>
                            <div className='col-lg-4 col-md-6 col-12'>
                                <div className='qna-border'>
                                    <div className="lock-icon" style={{ position: "relative", right: "85px", bottom: "5px" }}>
                                        <img src='./images/premium.png' alt=''></img>
                                    </div>
                                    <img src='./images/market_strategy.png' alt=''></img>
                                    <div className='mydivider mt-4'></div>
                                    <p className='qna-text'>Go to Market Strategy</p>
                                </div>

                            </div>
                            <div className='col-lg-4 col-md-6 col-12'>
                                <div className='qna-border'>
                                    <div className="lock-icon" style={{ position: "relative", right: "85px", bottom: "5px" }}>
                                        <img src='./images/premium.png' alt=''></img>
                                    </div>
                                    <img src='./images/launch_plan.png' alt=''></img>
                                    <div className='mydivider mt-4'></div>
                                    <p className='qna-text'>Launch Plan of Action</p>
                                </div>

                            </div>
                            <div className='col-lg-4 col-md-6 col-12'>
                                <div className='qna-border'>
                                    <div className="lock-icon" style={{ position: "relative", right: "85px", bottom: "5px" }}>
                                        <img src='./images/premium.png' alt=''></img>
                                    </div>
                                    <img src='./images/traditional_marketing.png' alt=''></img>
                                    <div className='mydivider mt-4'></div>
                                    <p className='qna-text'>Traditional Marketing</p>
                                </div>

                            </div>
                        </div>

                        <div className='row qna-box'>
                            <div className='col-lg-4 col-md-6 col-12' onClick={digitalHandler}>
                                <div className='qna-border' style={{ border: buttondigital }} >
                                    <img src='./images/digital.png' alt=''></img>
                                    <div className='mydivider mt-4'></div>
                                    <p className='qna-text mt-4'>Digital Marketing</p>
                                </div>

                            </div>
                            <div className='col-lg-4 col-md-6 col-12' onClick={technologyHandler}>
                                <div className='qna-border' style={{ border: buttontechnology }}>
                                    <img src='./images/technology.png' alt=''></img>
                                    <div className='mydivider mt-4'></div>
                                    <p className='qna-text'>Technology & Innovation</p>
                                </div>

                            </div>
                            <div className='col-lg-4 col-md-6 col-12' onClick={brandingHandler}>
                                <div className='qna-border' style={{ border: buttonbranding }}>
                                    <img src='./images/branding.png' alt=''></img>
                                    <div className='mydivider mt-4'></div>
                                    <p className='qna-text mt-4'>Branding & Design</p>
                                </div>

                            </div>
                        </div>
                        <div className='row qna-box'>
                            <div className='col-lg-4 col-md-6 col-12' onClick={public_relationsHandler}>
                                <div className='qna-border' style={{ border: buttonpublic }}>
                                    <img src='./images/public_relations.png' alt=''></img>
                                    <div className='mydivider mt-4'></div>
                                    <p className='qna-text'>Public Realations</p>
                                </div>

                            </div>
                            <div className='col-lg-4 col-md-6 col-12' onClick={influencerHandler}>
                                <div className='qna-border' style={{ border: buttoninfluencer }}>
                                    <img src='./images/influencer_marketing.png' alt=''></img>
                                    <div className='mydivider mt-4'></div>
                                    <p className='qna-text'>Influencer Marketing</p>
                                </div>

                            </div>
                            <div className='col-lg-4 col-md-6 col-12' onClick={contentHandler}>
                                <div className='qna-border' style={{ border: buttoncontent }}>
                                    <img src='./images/content.png' alt=''></img>
                                    <div className='mydivider mt-4'></div>
                                    <p className='qna-text'>Content Production</p>
                                </div>

                            </div>
                        </div>
                    </div>

                )}

                {/* Startup / Growth */}
                {startup && (
                    <div>
                        <div className='bussiness' >
                            <div className='logo'>
                                <img src='./images/logo.png' alt=''></img>
                            </div>
                            <span> <TypeAnimation
                                sequence={[
                                    // Same substring at the start will only be typed out once, initially
                                    'What are you looking for (choose ONLY one)?',
                                    1000,
                                ]}
                                wrapper="span"
                                speed={70}
                                style={{ fontSize: '1rem', color: '#ececf1', flex: '1', textAlign: 'center', gap: '10px' }}
                            /></span>
                        </div>

                        <div className='row qna-box'>
                            <div className='col-lg-4 col-md-6 col-12'>
                                <div className='qna-border'>
                                    <div className="lock-icon" style={{ position: "relative", right: "85px", bottom: "5px" }}>
                                        <img src='./images/premium.png' alt=''></img>
                                    </div>
                                    <img src='./images/market_strategy.png' alt=''></img>
                                    <div className='mydivider mt-4'></div>
                                    <p className='qna-text'>Go to Market Strategy</p>
                                </div>

                            </div>
                            <div className='col-lg-4 col-md-6 col-12'>
                                <div className='qna-border'>
                                    <div className="lock-icon" style={{ position: "relative", right: "85px", bottom: "5px" }}>
                                        <img src='./images/premium.png' alt=''></img>
                                    </div>
                                    <img src='./images/launch_plan.png' alt=''></img>
                                    <div className='mydivider mt-4'></div>
                                    <p className='qna-text'>Launch Plan of Action</p>
                                </div>

                            </div>
                            <div className='col-lg-4 col-md-6 col-12'>
                                <div className='qna-border'>
                                    <div className="lock-icon" style={{ position: "relative", right: "85px", bottom: "5px" }}>
                                        <img src='./images/premium.png' alt=''></img>
                                    </div>
                                    <img src='./images/traditional_marketing.png' alt=''></img>
                                    <div className='mydivider mt-4'></div>
                                    <p className='qna-text'>Traditional Marketing</p>
                                </div>

                            </div>
                        </div>

                        <div className='row qna-box'>
                            <div className='col-lg-4 col-md-6 col-12' onClick={digitalHandler}>
                                <div className='qna-border' style={{ border: buttondigital }}>
                                    <img src='./images/digital.png' alt=''></img>
                                    <div className='mydivider mt-4'></div>
                                    <p className='qna-text mt-4'>Digital Marketing</p>
                                </div>

                            </div>
                            <div className='col-lg-4 col-md-6 col-12' onClick={technologyHandler}>
                                <div className='qna-border' style={{ border: buttontechnology }}>
                                    <img src='./images/technology.png' alt=''></img>
                                    <div className='mydivider mt-4'></div>
                                    <p className='qna-text'>Technology & Innovation</p>
                                </div>

                            </div>
                            <div className='col-lg-4 col-md-6 col-12' onClick={brandingHandler}>
                                <div className='qna-border' style={{ border: buttonbranding }}>
                                    <img src='./images/branding.png' alt=''></img>
                                    <div className='mydivider mt-4'></div>
                                    <p className='qna-text mt-4'>Branding & Design</p>
                                </div>

                            </div>
                        </div>
                        <div className='row qna-box'>
                            <div className='col-lg-4 col-md-6 col-12' onClick={public_relationsHandler}>
                                <div className='qna-border' style={{ border: buttonpublic }}>
                                    <img src='./images/public_relations.png' alt=''></img>
                                    <div className='mydivider mt-4'></div>
                                    <p className='qna-text'>Public Realations</p>
                                </div>

                            </div>
                            <div className='col-lg-4 col-md-6 col-12' onClick={influencerHandler}>
                                <div className='qna-border' style={{ border: buttoninfluencer }}>
                                    <img src='./images/influencer_marketing.png' alt=''></img>
                                    <div className='mydivider mt-4'></div>
                                    <p className='qna-text'>Influencer Marketing</p>
                                </div>

                            </div>
                            <div className='col-lg-4 col-md-6 col-12' onClick={contentHandler}>
                                <div className='qna-border' style={{ border: buttoncontent }}>
                                    <img src='./images/content.png' alt=''></img>
                                    <div className='mydivider mt-4'></div>
                                    <p className='qna-text'>Content Production</p>
                                </div>

                            </div>
                        </div>

                        
                    </div>
                )}

                {/* Brand / Enterprise */}
                {brand && (
                    <div>
                        <div className='bussiness' >
                            <div className='logo'>
                                <img src='./images/logo.png' alt=''></img>
                            </div>
                            <span> <TypeAnimation
                                sequence={[
                                    // Same substring at the start will only be typed out once, initially
                                    'What are you looking for (choose ONLY one)?',
                                    1000,
                                ]}
                                wrapper="span"
                                speed={70}
                                style={{ fontSize: '1rem', color: '#ececf1', flex: '1', textAlign: 'center', gap: '10px' }}
                            /></span>
                        </div>

                        <div className='row qna-box'>
                            <div className='col-lg-4 col-md-6 col-12'>
                                <div className='qna-border'>
                                    <div className="lock-icon" style={{ position: "relative", right: "85px", bottom: "5px" }}>
                                        <img src='./images/premium.png' alt=''></img>
                                    </div>
                                    <img src='./images/market_strategy.png' alt=''></img>
                                    <div className='mydivider mt-4'></div>
                                    <p className='qna-text'>Go to Market Strategy</p>
                                </div>

                            </div>
                            <div className='col-lg-4 col-md-6 col-12'>
                                <div className='qna-border'>
                                    <div className="lock-icon" style={{ position: "relative", right: "85px", bottom: "5px" }}>
                                        <img src='./images/premium.png' alt=''></img>
                                    </div>
                                    <img src='./images/launch_plan.png' alt=''></img>
                                    <div className='mydivider mt-4'></div>
                                    <p className='qna-text'>Launch Plan of Action</p>
                                </div>

                            </div>
                            <div className='col-lg-4 col-md-6 col-12'>
                                <div className='qna-border'>
                                    <div className="lock-icon" style={{ position: "relative", right: "85px", bottom: "5px" }}>
                                        <img src='./images/premium.png' alt=''></img>
                                    </div>
                                    <img src='./images/traditional_marketing.png' alt=''></img>
                                    <div className='mydivider mt-4'></div>
                                    <p className='qna-text'>Traditional Marketing</p>
                                </div>

                            </div>
                        </div>

                        <div className='row qna-box'>
                            <div className='col-lg-4 col-md-6 col-12' onClick={digitalHandler}>
                                <div className='qna-border' style={{ border: buttondigital }}>
                                    <img src='./images/digital.png' alt=''></img>
                                    <div className='mydivider mt-4'></div>
                                    <p className='qna-text mt-4'>Digital Marketing</p>
                                </div>

                            </div>
                            <div className='col-lg-4 col-md-6 col-12' onClick={technologyHandler}>
                                <div className='qna-border' style={{ border: buttontechnology }}>
                                    <img src='./images/technology.png' alt=''></img>
                                    <div className='mydivider mt-4'></div>
                                    <p className='qna-text'>Technology & Innovation</p>
                                </div>

                            </div>
                            <div className='col-lg-4 col-md-6 col-12' onClick={brandingHandler}>
                                <div className='qna-border' style={{ border: buttonbranding }}>
                                    <img src='./images/branding.png' alt=''></img>
                                    <div className='mydivider mt-4'></div>
                                    <p className='qna-text mt-4'>Branding & Design</p>
                                </div>

                            </div>
                        </div>
                        <div className='row qna-box'>
                            <div className='col-lg-4 col-md-6 col-12' onClick={public_relationsHandler}>
                                <div className='qna-border' style={{ border: buttonpublic }}>
                                    <img src='./images/public_relations.png' alt=''></img>
                                    <div className='mydivider mt-4'></div>
                                    <p className='qna-text'>Public Realations</p>
                                </div>

                            </div>
                            <div className='col-lg-4 col-md-6 col-12' onClick={influencerHandler}>
                                <div className='qna-border' style={{ border: buttoninfluencer }}>
                                    <img src='./images/influencer_marketing.png' alt=''></img>
                                    <div className='mydivider mt-4'></div>
                                    <p className='qna-text'>Influencer Marketing</p>
                                </div>

                            </div>
                            <div className='col-lg-4 col-md-6 col-12' onClick={contentHandler}>
                                <div className='qna-border' style={{ border: buttoncontent }}>
                                    <img src='./images/content.png' alt=''></img>
                                    <div className='mydivider mt-4'></div>
                                    <p className='qna-text'>Content Production</p>
                                </div>

                            </div>
                        </div>
                    </div>
                )}

                {/* Digital Marketing */}
                {digital && (
                    <div>
                        <div className='bussiness' >
                            <div className='logo'>
                                <img src='./images/logo.png' alt=''></img>
                            </div>
                            <span> <TypeAnimation
                                sequence={[
                                    // Same substring at the start will only be typed out once, initially
                                    'Anything specific in the digital marketing?',
                                    1000,
                                ]}
                                wrapper="span"
                                speed={70}
                                style={{ fontSize: '1rem', color: '#ececf1', flex: '1', textAlign: 'center', gap: '10px' }}
                            /></span>
                        </div>

                        <div className='row qna-box'>
                            <div className='col-lg-4 col-md-6 col-12' onClick={socialHandler}>
                                <div className='digital-text' style={{ backgroundColor: buttonsocial }}>
                                    <p>Social Media Marketing</p>
                                </div>
                            </div>
                            <div className='col-lg-4 col-md-6 col-12' onClick={performanceHandler}>
                                <div className='digital-text' style={{ backgroundColor: buttonperformance }}>
                                    <p>Performance marketing</p>
                                </div>

                            </div>
                            <div className='col-lg-4 col-md-6 col-12' onClick={SEOHandler}>
                                <div className='digital-text' style={{ backgroundColor: buttonseo }}>
                                    <p>SEO, ASO & SEM</p>
                                </div>
                            </div>
                        </div>

                    </div>
                )}

                {/* Technology and innovation */}
                {technology && (
                    <div>
                        <div className='bussiness' >
                            <div className='logo'>
                                <img src='./images/logo.png' alt=''></img>
                            </div>
                            <span> <TypeAnimation
                                sequence={[
                                    // Same substring at the start will only be typed out once, initially
                                    'Anything specific in the technology and innovation?',
                                    1000,
                                ]}
                                wrapper="span"
                                speed={70}
                                style={{ fontSize: '1rem', color: '#ececf1', flex: '1', textAlign: 'center', gap: '10px' }}
                            /></span>
                        </div>

                        <div className='row qna-box'>
                            <div className='col-lg-4 col-md-6 col-12'>
                                <div className='digital-text'>
                                    <p>Website Development</p>
                                </div>
                            </div>
                            <div className='col-lg-4 col-md-6 col-12'>
                                <div className='digital-text'>
                                    <p>App development</p>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {/* Branding & Design */}
                {branding && (
                    <div>
                        <div className='bussiness' >
                            <div className='logo'>
                                <img src='./images/logo.png' alt=''></img>
                            </div>
                            <span> <TypeAnimation
                                sequence={[
                                    // Same substring at the start will only be typed out once, initially
                                    'Anything specific in the branding and Designing?',
                                    1000,
                                ]}
                                wrapper="span"
                                speed={70}
                                style={{ fontSize: '1rem', color: '#ececf1', flex: '1', textAlign: 'center', gap: '10px' }}
                            /></span>
                        </div>

                        <div className='row qna-box'>
                            <div className='col-lg-4 col-md-6 col-12'>
                                <div className='digital-text'>
                                    <p>Product Branding</p>
                                </div>
                            </div>
                            <div className='col-lg-4 col-md-6 col-12'>
                                <div className='digital-text'>
                                    <p>Service Branding</p>
                                </div>
                            </div>
                            <div className='col-lg-4 col-md-6 col-12'>
                                <div className='digital-text'>
                                    <p>Company branding</p>
                                </div>
                            </div>
                        </div>
                        <div className='row qna-box mt-0'>
                            <div className='col-lg-4 col-md-6 col-12'>
                                <div className='digital-text'>
                                    <p>Personal branding</p>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {/* influencer */}
                {influencer && (
                    <div>
                        <div className='bussiness' >
                            <div className='logo'>
                                <img src='./images/logo.png' alt=''></img>
                            </div>
                            <span> <TypeAnimation
                                sequence={[
                                    // Same substring at the start will only be typed out once, initially
                                    'What are your goals for influencer marketing?(For example, increasing brand awareness, driving product sales, expanding reach)',
                                    1000,
                                ]}
                                wrapper="span"
                                speed={70}
                                style={{ fontSize: '1rem', color: '#ececf1', flex: '1', textAlign: 'center', gap: '10px' }}
                            /></span>
                        </div>

                    </div>
                )}

                {/* public relation */}
                {public_relations && (
                    <div>
                        <div className='bussiness' >
                            <div className='logo'>
                                <img src='./images/logo.png' alt=''></img>
                            </div>
                            <span> <TypeAnimation
                                sequence={[
                                    // Same substring at the start will only be typed out once, initially
                                    'Anything specific in the public relations?',
                                    1000,
                                ]}
                                wrapper="span"
                                speed={70}
                                style={{ fontSize: '1rem', color: '#ececf1', flex: '1', textAlign: 'center', gap: '10px' }}
                            /></span>
                        </div>

                        <div className='row qna-box'>
                            <div className='col-lg-4 col-md-6 col-12'>
                                <div className='digital-text'>
                                    <p>Press Release</p>
                                </div>
                            </div>
                            <div className='col-lg-4 col-md-6 col-12'>
                                <div className='digital-text'>
                                    <p>TV & Radio</p>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {/* Content */}
                {content && (
                    <div>
                        <div className='bussiness' >
                            <div className='logo'>
                                <img src='./images/logo.png' alt=''></img>
                            </div>
                            <span> <TypeAnimation
                                sequence={[
                                    // Same substring at the start will only be typed out once, initially
                                    'Anything specific in the content production?',
                                    1000,
                                ]}
                                wrapper="span"
                                speed={70}
                                style={{ fontSize: '1rem', color: '#ececf1', flex: '1', textAlign: 'center', gap: '10px' }}
                            /></span>
                        </div>

                        <div className='row qna-box'>
                            <div className='col-lg-4 col-md-6 col-12'>
                                <div className='digital-text'>
                                    <p>Video shoot</p>
                                </div>

                            </div>
                            <div className='col-lg-4 col-md-6 col-12'>
                                <div className='digital-text'>
                                    <p>Photo shoot</p>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {/* Social Media Marketing  */}
                {social && (
                    <div>
                        <div className='bussiness' >
                            <div className='logo'>
                                <img src='./images/logo.png' alt=''></img>
                            </div>
                            <span> <TypeAnimation
                                sequence={[
                                    // Same substring at the start will only be typed out once, initially
                                    'Do you have a particular social media channel in mind?. If not, just click on “Generate Now”)',
                                    1000,
                                ]}
                                wrapper="span"
                                speed={70}
                                style={{ fontSize: '1rem', color: '#ececf1', flex: '1', textAlign: 'center', gap: '10px' }}
                            /></span>
                        </div>

                        <div className='row qna-box'>
                            <div className='col-lg-4 col-md-6 col-12'>
                                <div className='digital-text'>
                                    <p>Youtube</p>
                                </div>
                            </div>
                            <div className='col-lg-4 col-md-6 col-12'>
                                <div className='digital-text'>
                                    <p>Facebook</p>
                                </div>
                            </div>
                            <div className='col-lg-4 col-md-6 col-12'>
                                <div className='digital-text'>
                                    <p>Instagram</p>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {/* Performance marketing  */}
                {performance && (
                    <div>
                        <div className='bussiness' >
                            <div className='logo'>
                                <img src='./images/logo.png' alt=''></img>
                            </div>
                            <span> <TypeAnimation
                                sequence={[
                                    // Same substring at the start will only be typed out once, initially
                                    'Do you have a particular social media channel in mind?. If not, just click on “Generate Now”)',
                                    1000,
                                ]}
                                wrapper="span"
                                speed={70}
                                style={{ fontSize: '1rem', color: '#ececf1', flex: '1', textAlign: 'center', gap: '10px' }}
                            /></span>
                        </div>

                        <div className='row qna-box'>
                            <div className='col-lg-4 col-md-6 col-12'>
                                <div className='digital-text'>
                                    <p>Youtube Ads</p>
                                </div>
                            </div>
                            <div className='col-lg-4 col-md-6 col-12'>
                                <div className='digital-text'>
                                    <p>Google Ads</p>
                                </div>
                            </div>
                            <div className='col-lg-4 col-md-6 col-12'>
                                <div className='digital-text'>
                                    <p>Instagram Ads</p>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {/* SEO, ASO & SEM */}
                {SEO && (
                    <div>
                        <div className='bussiness' >
                            <div className='logo'>
                                <img src='./images/logo.png' alt=''></img>
                            </div>
                            <span> <TypeAnimation
                                sequence={[
                                    // Same substring at the start will only be typed out once, initially
                                    'Do you have a particular preference in mind?. If not, just click on “Generate Now”, we’ll take care of the rest)',
                                    1000,
                                ]}
                                wrapper="span"
                                speed={70}
                                style={{ fontSize: '1rem', color: '#ececf1', flex: '1', textAlign: 'center', gap: '10px' }}
                            /></span>
                        </div>

                        <div className='row qna-box'>
                            <div className='col-lg-4 col-md-6 col-12'>
                                <div className='digital-text'>
                                    <p>On Page SEO</p>
                                </div>
                            </div>
                            <div className='col-lg-4 col-md-6 col-12'>
                                <div className='digital-text'>
                                    <p>Off Page SEO</p>
                                </div>
                            </div>
                            <div className='col-lg-4 col-md-6 col-12'>
                                <div className='digital-text'>
                                    <p>Local SEO</p>
                                </div>
                            </div>
                        </div>
                        <div className='row qna-box mt-0'>
                            <div className='col-lg-4 col-md-6 col-12'>
                                <div className='digital-text'>
                                    <p>Technical SEO</p>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            
            

            {/* Right accordion */}
            <div className='qna-header'>
                <div className='divider mt-5'></div>
                <div className='cards-group'>
                    <p className='stp-title'>Steps</p>
                    <div className='step-group'>
                        <span className='line'></span>
                        <div className='step'>
                            <span className='circle'></span>
                            <p className='text'>Stage Selection</p>
                        </div>
                        <div className='step'>
                            <span className='circle'></span>
                            <p className='text'>Service Requirements</p>
                        </div>
                        <div className='step'>
                            <span className='circle'></span>
                            <p className='text'>Service Spefication</p>
                        </div>
                        <div className='step'>
                            <span className='circle'></span>
                            <p className='text'>Business bio</p>
                        </div>
                        <div className='step'>
                            <span className='circle'></span>
                            <p className='text'>Vendor partership</p>
                        </div>
                    </div>

                    <div className='company-group'>
                        <p>Privacy policies</p>
                        <p>Terms and conditions</p>
                        <p>© 2023 TEN Inc.</p>
                        <p>Contact us</p>
                    </div>
                </div>
            </div>
            
            <footer>
    <div className='container input--field p-3'>
        <input className='input-field' type='text' placeholder='Enter the text here'   ref={inputRef}></input>
        {/* <p className='bottom-text p-2'>
        Our goal is to make the startup ecosystem systems more seamless. Your<a href='#'>feedback</a> will help us to improve.
        </p> */}
    </div>
    <div className='bottom-position mt-5'>
    <p className='bottom-text'>
        Our goal is to make the startup ecosystem systems more seamless. Your<a href='#'>feedback</a> will help us to improve.
        </p>
        </div>
    
</footer>

            
        </div>


    );
}
export default QnA_page;