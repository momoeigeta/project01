import React from 'react';
import '../styles/Contact.css';
import { useLocation } from 'react-router-dom';

const ContactConfirm = (props) => {
    const { history } = props;
    const location = useLocation();
    const state = location.state;

    return (
        <div className="ContactHeader">
            <div>
                <header className="header" >
                    <div className="backImg">

                        <h1 className="f">お問い合わせ</h1>
                        <h1 className="f">確認画面</h1>

                    </div>
                </header>
            </div>

            <div className="Form">
                <div className="Form-Item">
                    {/* <div className='contactBox'> */}
                    <div className="Form-Item-Label" >
                        <div>
                            お名前
                            <span className="caution">*</span>
                        </div>
                    </div>
                    <p className="value">
                        {state.values.name}
                    </p>
                    {/* </div> */}
                    {/* </div> */}
                    {/* <div class="Form-Item"> */}
                    <div className="Form-Item-Label">
                        <div>
                            会社名・法人名・団体名
                            <span className="caution">*</span>
                            <p className="company">※個人のお客様は「個人」とご記入ください</p>
                        </div>
                    </div>

                    <p className="value">
                        {state.values.company}
                    </p>


                    {/* <p className="value">
                            {state.values.company}
                        </p> */}



                    {/* </div> */}
                    {/* <div class="Form-Item"> */}
                    <div className="Form-Item-Label">
                        <div>
                            部署・役職等
                            <span className="caution">*</span>
                        </div>
                    </div>
                    <p className="value">
                        {state.values.department}
                    </p>
                    {/* </div> */}

                    {/* <div className="Form-Item"> */}
                    <div className="Form-Item-Label">
                        <div>
                            メールアドレス
                            <span className="caution">*</span>
                        </div>
                    </div>
                    <p className="value">
                        {state.values.email}
                    </p>
                    {/* </div> */}

                    {/* <div class="Form-Item"> */}
                    <div className="Form-Item-Label">
                        <div>
                            電話番号
                            <span className="caution">*</span>
                        </div>
                    </div>
                    <p className="value">
                        {state.values.tel}
                    </p>
                    {/* </div> */}

                    {/* <div className="Form-Item"> */}
                    <div className="Form-Item-Label">
                        <div>
                            郵便番号
                            <span className="caution">*</span>
                        </div>
                    </div>
                    <p className="value">
                        {state.values.postalCode}
                    </p>
                    {/* </div> */}
                    {/* <div className="Form-Item"> */}
                    <div className="Form-Item-Label">
                        <div>
                            都道府県
                            <span className="caution">*</span>
                        </div>
                    </div>
                    <p className="value">
                        {state.values.prefectures}
                    </p>
                    {/* </div> */}
                    {/* <div className="Form-Item"> */}
                    <div className="Form-Item-Label">
                        <div>
                            ご住所
                            <span className="caution">*</span>
                        </div>
                    </div>
                    <p className="value">
                        {state.values.address}
                    </p>
                    {/* </div> */}

                    {/* <div class="Form-Item"> */}
                    <div className="Form-Item-Label isMsg">
                        <div>
                            メッセージ本文
                            <span className="caution">*</span>
                        </div>
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
        </div>
    );
};

export default ContactConfirm;