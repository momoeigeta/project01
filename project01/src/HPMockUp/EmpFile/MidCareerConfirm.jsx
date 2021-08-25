import React from 'react';
import { useLocation } from 'react-router-dom';
import Bottom from '../Bottom';
import Header from '../Header';
import '../styles/Contact.css';

const MidCareerConfirm = (props) => {
    const { history } = props;
    const location = useLocation();
    const state = location.state;

    return (
        <>
            <div>
                <Header />
                <header className="header" >
                    <div className="backImg">

                        <h1 className="f">中途採用応募フォーム</h1>
                        <h1 className="f">確認画面</h1>

                    </div>
                </header>
            </div>

            <div className="Form">
                <div className="Form-Item">
                    {/* <div className='contactBox'> */}
                    <div className="Form-Item-Label" >
                        <p>
                            お名前
                            <span className="caution">*</span>
                        </p>
                    </div>
                    <p className="value">
                        {state.values.name}
                    </p>
                    {/* </div> */}

                    {/* <div class="Form-Item"> */}
                    <div className="Form-Item-Label">
                        <p>
                            会社名・法人名・団体名
                            <span className="caution">*</span>

                            <p className="company">※個人のお客様は「個人」とご記入ください</p>
                        </p>
                    </div>
                    <p className="value">
                        {state.values.company}
                    </p>
                    {/* </div> */}
                    {/* <div class="Form-Item"> */}
                    <div className="Form-Item-Label">
                        <p>
                            部署・役職等
                            <span className="caution">*</span>
                        </p>
                    </div>
                    <p className="value">
                        {state.values.department}
                    </p>
                    {/* </div> */}

                    {/* <div className="Form-Item"> */}
                    <div className="Form-Item-Label">
                        <p>
                            メールアドレス
                            <span className="caution">*</span>
                        </p>
                    </div>
                    <p className="value">
                        {state.values.email}
                    </p>
                    {/* </div> */}

                    {/* <div class="Form-Item"> */}
                    <div class="Form-Item-Label">
                        <p>
                            電話番号
                            <span class="caution">*</span>
                        </p>
                    </div>
                    <p className="value">
                        {state.values.tel}
                    </p>
                    {/* </div> */}

                    {/* <div className="Form-Item"> */}
                    <div className="Form-Item-Label">
                        <p>
                            郵便番号
                            <span className="caution">*</span>
                        </p>
                    </div>
                    <p className="value">
                        {state.values.postalCode}
                    </p>
                    {/* </div> */}
                    {/* <div className="Form-Item"> */}
                    <div className="Form-Item-Label">
                        <p>
                            都道府県
                            <span className="caution">*</span>
                        </p>
                    </div>
                    <p className="value">
                        {state.values.prefectures}
                    </p>
                    {/* </div> */}
                    {/* <div className="Form-Item"> */}
                    <div className="Form-Item-Label">
                        <p>
                            ご住所
                            <span className="caution">*</span>
                        </p>
                    </div>
                    <p className="value">
                        {state.values.address}
                    </p>
                    {/* </div> */}

                    {/* <div class="Form-Item"> */}
                    <div className="Form-Item-Label isMsg">
                        <p>
                            メッセージ本文
                            <span className="caution">*</span>
                        </p>
                    </div>
                    <p className="value">
                        {state.values.message}
                    </p>
                    {/* </div> */}
                </div>

                <div className='btnBox'>
                    <input
                        type='button'
                        onClick={() => history.goBack()}
                        value='戻る'
                        className='Form-Btn reset' />
                    <input
                        type="submit"
                        className="Form-Btn"
                        value="送信する"
                    />
                </div>
            </div>
            <Bottom />
        </>
    );
};

export default MidCareerConfirm;