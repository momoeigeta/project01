import React, { useState } from 'react';
// import { useForm } from 'react-hook-form';
import './styles/Contact.css';
// import Form from './Form';
// import { UseFormRegisterReturn } from 'react-hook-form'
import { useLocation, useHistory, Link } from 'react-router-dom';
import Contact from './Contact';
import { useForm } from 'react-hook-form';
import { useStateMachine } from "little-state-machine";
import updateAction from "./updateAction";

const Confirm = (
    props
) => {
    const { values, hideConfirmation, history } = props;
    const { getValues } = useForm();
    // const location = useLocation();

    const { state } = useStateMachine(updateAction);
    // const state = location.state;

    // const history = useHistory();

    // const [isConfirmationVisible, setIsConfirmationVisible] = useState(false);
    // const hideConfirmation = () => setIsConfirmationVisible(false)
    const [showresults, setShowResults] = useState(true);
    const onClick = () => setShowResults(false);

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
                            {state.name}
                        </p>
                    </div>

                    <div class="Form-Item">
                        <p class="Form-Item-Label">
                            会社名・法人名・団体名
                            <span className="caution">*</span>
                            <span className="mgr10">※個人のお客様は「個人」とご記入ください</span>
                        </p>
                        <p className="value">
                            {state.company}
                        </p>
                    </div>

                    <div class="Form-Item">
                        <p class="Form-Item-Label">
                            部署・役職等
                            <span class="caution">*</span>
                        </p>
                        <p className="value">
                            {state.department}
                        </p>
                    </div>

                    <div className="Form-Item">
                        <p className="Form-Item-Label">
                            メールアドレス
                            <span className="caution">*</span>
                        </p>
                        <p className="value">
                            {state.email}
                        </p>
                    </div>
                    <div class="Form-Item">
                        <p class="Form-Item-Label">
                            電話番号
                            <span class="caution">*</span>
                        </p>
                        <p className="value">
                            {state.tel}
                        </p>
                    </div>

                    <div class="Form-Item">
                        <p class="Form-Item-Label">
                            郵便番号
                            <span class="caution">*</span>
                        </p>
                        <p className="value">
                            {state.postalCode}
                        </p>
                    </div>
                    <div class="Form-Item">
                        <p class="Form-Item-Label">
                            都道府県
                            <span class="caution">*</span>
                        </p>
                        <p className="value">
                            {state.prefectures}
                        </p>
                    </div>
                    <div class="Form-Item">
                        <p class="Form-Item-Label">
                            ご住所
                            <span class="caution">*</span>
                        </p>
                        <p className="value">
                            {state.address}
                        </p>
                    </div>

                    <div class="Form-Item">
                        <p class="Form-Item-Label isMsg">
                            メッセージ本文
                            <span class="caution">*</span>
                        </p>
                        <p className="value">
                            {state.message}
                        </p>
                    </div>
                    <div className='btnBox'>
                        {/* <Link to="/Contact"
                        
                        > */}
                        <input
                            type='button'
                            // onClick={() => 

                            // hideConfirmation
                            // }

                            // onClick={() => onClick()}

                            onClick={() => history.goBack()}


                            // onClick={() => history.goBack(props)}
                            value='戻る'
                            className='Form-Btn reset' />

                        {/* {showresults ? null : null} */}


                        {/* </Link> */}
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