import React from 'react';
import './styles/Contact.css';


const Confirm = props => {
    const { values, hideConfirmation } = props;

    return (
        <>
            <div>
            <header className="header" >
                <div className="back">

                    <h1 className="f">お問い合わせ</h1>
                    <h1 className="f">確認画面</h1>

                </div>
            </header>
            </div>
            
            <div className="Form">
                <div className="Form-Item">
                    <div className='contactBox'>

                        <p className="Form-Item-Label" >
                            お名前
                            <span className="caution">*</span>
                        </p>
                        <p className="value">
                            {values.name}
                        </p>
                    </div>

                    <div class="Form-Item">
                        <p class="Form-Item-Label">
                            会社名・法人名・団体名
                            <span className="caution">*</span>
                            <span className="mgr10">※個人のお客様は「個人」とご記入ください</span>
                        </p>
                        <p className="value">
                            {values.company}
                        </p>
                    </div>

                    <div class="Form-Item">
                        <p class="Form-Item-Label">
                            部署・役職等
                            <span class="caution">*</span>
                        </p>
                        <p className="value">
                            {values.department}
                        </p>
                    </div>

                    <div className="Form-Item">
                        <p className="Form-Item-Label">
                            メールアドレス
                            <span className="caution">*</span>
                        </p>
                        <p className="value">
                            {values.email}
                        </p>
                    </div>
                    <div class="Form-Item">
                        <p class="Form-Item-Label">
                            電話番号
                            <span class="caution">*</span>
                        </p>
                        <p className="value">
                            {values.tel}
                        </p>
                    </div>

                    <div class="Form-Item">
                        <p class="Form-Item-Label">
                            郵便番号
                            <span class="caution">*</span>
                        </p>
                        <p className="value">
                            {values.postalCode}
                        </p>
                    </div>
                    <div class="Form-Item">
                        <p class="Form-Item-Label">
                            都道府県
                            <span class="caution">*</span>
                        </p>
                        <p className="value">
                            {values.prefectures}
                        </p>
                    </div>
                    <div class="Form-Item">
                        <p class="Form-Item-Label">
                            ご住所
                            <span class="caution">*</span>
                        </p>
                        <p className="value">
                            {values.address}
                        </p>
                    </div>

                    <div class="Form-Item">
                        <p class="Form-Item-Label isMsg">
                            メッセージ本文
                            <span class="caution">*</span>
                        </p>
                        <p className="value">
                            {values.message}
                        </p>
                    </div>
                    <div className='btnBox'>
                        <input
                            type='button'
                            onClick={hideConfirmation}
                            value='戻る'
                            className='Form-Btn reset' />

                        <button
                            type="submit"
                            className="Form-Btn"
                        >
                            送信する
                        </button>

                    </div>
                </div>
            </div>
        </>
    )
};

export default Confirm;