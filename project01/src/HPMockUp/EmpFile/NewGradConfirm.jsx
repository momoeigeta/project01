import React from 'react';
import '../styles/Contact.css';
import { useLocation } from 'react-router-dom';
import Header from '../Header';

const NewGradConfirm = (props) => {
    const { history } = props;
    const location = useLocation();
    const state = location.state;

    return (
        <>
            <div>
                <Header />
                <header className="header" >
                    <div className="backImg">

                        <h1 className="f">新卒採用応募フォーム</h1>
                        <h1 className="f">確認画面</h1>

                    </div>
                </header>
            </div>

            <div className="Form">
                <div className="Form-Item">
                    {/* <div className='contactBox'> */}
                    <p className="Form-Item-Label" >
                        お名前
                        <span className="caution">*</span>
                    </p>
                    <p className="value">
                        {state.values.name}
                    </p>
                    {/* </div> */}

                    {/* <div class="Form-Item"> */}
                    <p className="Form-Item-Label">
                        会社名・法人名・団体名
                        <span className="caution">*</span>
                        <span className="mgr10">※個人のお客様は「個人」とご記入ください</span>
                    </p>
                    <p className="value">
                        {state.values.company}
                    </p>
                    {/* </div> */}
                    {/* <div class="Form-Item"> */}
                    <p className="Form-Item-Label">
                        部署・役職等
                        <span className="caution">*</span>
                    </p>
                    <p className="value">
                        {state.values.department}
                    </p>
                    {/* </div> */}

                    {/* <div className="Form-Item"> */}
                    <p className="Form-Item-Label">
                        メールアドレス
                        <span className="caution">*</span>
                    </p>
                    <p className="value">
                        {state.values.email}
                    </p>
                    {/* </div> */}

                    {/* <div class="Form-Item"> */}
                    <p class="Form-Item-Label">
                        電話番号
                        <span class="caution">*</span>
                    </p>
                    <p className="value">
                        {state.values.tel}
                    </p>
                    {/* </div> */}

                    {/* <div className="Form-Item"> */}
                    <p className="Form-Item-Label">
                        郵便番号
                        <span className="caution">*</span>
                    </p>
                    <p className="value">
                        {state.values.postalCode}
                    </p>
                    {/* </div> */}
                    {/* <div className="Form-Item"> */}
                    <p className="Form-Item-Label">
                        都道府県
                        <span className="caution">*</span>
                    </p>
                    <p className="value">
                        {state.values.prefectures}
                    </p>
                    {/* </div> */}
                    {/* <div className="Form-Item"> */}
                    <p className="Form-Item-Label">
                        ご住所
                        <span className="caution">*</span>
                    </p>
                    <p className="value">
                        {state.values.address}
                    </p>
                    {/* </div> */}

                    {/* <div class="Form-Item"> */}
                    <p className="Form-Item-Label isMsg">
                        メッセージ本文
                        <span className="caution">*</span>
                    </p>
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
        </>
    );
};

export default NewGradConfirm;