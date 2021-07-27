import React from 'react';
import './styles/Contact.css';


const Form = () => {


    return (

        <div className="Form">
            <div className="Form-Item">
                <p className="Form-Item-Label" >
                    お名前
                    <span className="caution">*</span>
                </p>
                <input type="text" id="name"
                    class="Form-Item-Input">
                </input>

            </div>

            <div class="Form-Item">
                <p class="Form-Item-Label">
                    会社名・法人名・団体名
                    <span className="caution">*</span>
                    <span className="mgr10">※個人のお客様は「個人」とご記入ください</span>
                </p>
                <input type="text" class="Form-Item-Input">
                </input>
            </div>

            <div class="Form-Item">
                <p class="Form-Item-Label">
                    部署・役職等
                    <span class="caution">*</span>
                </p>
                <input type="text" class="Form-Item-Input">
                </input>
            </div>

            <div className="Form-Item">
                <p className="Form-Item-Label">
                    メールアドレス
                    <span className="caution">*</span>
                </p>
                <input id="email" type="text" className="Form-Item-Input">
                </input>


            </div>
            <div class="Form-Item">
                <p class="Form-Item-Label">
                    電話番号
                    <span class="caution">*</span>
                </p>
                <input type="tel" class="Form-Item-Input">
                </input>
            </div>
            <div class="Form-Item">
                <p class="Form-Item-Label">
                    郵便番号
                    <span class="caution">*</span>
                </p>
                <input type="postal-code" class="Form-Item-Input">
                </input>
            </div>
            <div class="Form-Item">
                <p class="Form-Item-Label">
                    都道府県
                    <span class="caution">*</span>
                </p>
                <input type="address-level1" class="Form-Item-Input">
                </input>
            </div>
            <div class="Form-Item">
                <p class="Form-Item-Label">
                    ご住所
                    <span class="caution">*</span>
                </p>
                <input type="text" class="Form-Item-Input">
                </input>
            </div>

            <div class="Form-Item">
                <p class="Form-Item-Label isMsg">
                    メッセージ本文
                    <span class="caution">*</span>
                </p>
                <textarea
                    class="Form-Item-Textarea"
                    id="test"
                ></textarea>
                <p id="validation"></p>
            </div>
            <input
                type="submit"
                class="Form-Btn"
                value="確認画面へ"
            ></input>
        </div>
        // </form>

    )
}
export default Form;