import React, { useState, useRef, useEffect } from 'react';
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
    AccordionItemState,
} from 'react-accessible-accordion';


const Dropdown3 = () => {
    const [isOpenMenu, setIsOpenMenu] = useState(false);
    const menuRef = useRef(null);
    useEffect(() => {
        isOpenMenu && menuRef.current.focus();
    }, [isOpenMenu]);
    const handleClick = (text) => () => {
        alert(text);
    };
    return (
        <div
            className="menu-container"
            onClick={() => setIsOpenMenu(!isOpenMenu)}
            ref={menuRef}
            onBlur={() => setIsOpenMenu(false)}
            tabIndex={0}
        >
            <div className="menuButton">Menu 3</div>
            <ul className="menu" hidden={!isOpenMenu}>

                <Accordion allowZeroExpanded>


                    <AccordionItem>
                        <AccordionItemHeading>
                            <AccordionItemButton>
                               企業情報
                            </AccordionItemButton>
                        </AccordionItemHeading>
                        
                            <AccordionItemPanel onClick={"expanded"} >
                                ごあいさつ
                            </AccordionItemPanel>
                       
                       
                            <AccordionItemPanel onClick={"expanded"}>
                                事業内容
                            </AccordionItemPanel>
                       

                            <AccordionItemPanel onClick={"expanded"}>
                                会社概要
                            </AccordionItemPanel>
                     
                    </AccordionItem>

                    <AccordionItem>
                        <AccordionItemHeading>
                            <AccordionItemButton >
                             採用情報
                                {/* <AccordionItemState onClick={"expanded"}>
            {}
        </AccordionItemState> */}

                            </AccordionItemButton>
                        </AccordionItemHeading>
                 
                            <AccordionItemPanel onClick={"expanded"}>
                                中途採用
                            </AccordionItemPanel>
                    
                       
                            <AccordionItemPanel onClick={"expanded"}>
                                新卒採用
                            </AccordionItemPanel>
                      
                    </AccordionItem>

                 
                        <li>アクセス </li>
                  
                  
                        <li>
                            お問い合わせ
                        </li>
                  

                </Accordion>


                <li className="item" onClick={handleClick("a")}>
                    {" "}
                    a{" "}
                </li>
                <li className="separator"></li>
                <li className="item" onClick={handleClick("b")}>
                    {" "}
                    b{" "}
                </li>
                <li className="item">
                    {" "}
                    c<span>▶</span>
                    <ul className="submenu">
                        <li className="item" onClick={handleClick("c-1")}>
                            {" "}
                            c-1{" "}
                        </li>
                        <li className="item" onClick={handleClick("c-2")}>
                            {" "}
                            c-2{" "}
                        </li>
                    </ul>
                </li>
            </ul>
        </div>
    );
};

export default Dropdown3;