import React, { useState } from 'react';

import './styles/Header2.css';
import './styles/Header.css';

const Header2 = () => {

    return (
        <nav>
            <ul>
                <li class="has-child"><a href="#">企業情報</a></li>
                {/* <li><a href="#">採用情報</a></li> */}
                <li class="has-child"><a href="#">採用情報</a>
                    <ul>
                        <li><a href="#">中途採用</a></li>
                        <li><a href="#">新卒採用</a></li>
                    </ul>
                </li>
                <li class="has-child"><a href="#">アクセス</a></li>

                <li class="has-child"><a href="#">お問い合わせ</a>
                    <ul>
                        <li><a href="#">Blog Top</a></li>
                        <li><a href="#">Blog-1</a></li>
                        <li><a href="#">Blog-2</a></li>
                        <li><a href="#">Blog-3</a></li>
                        <li><a href="#">Blog-4</a></li>
                    </ul>
                </li>
            </ul>
        </nav>

    )
};

export default Header2;