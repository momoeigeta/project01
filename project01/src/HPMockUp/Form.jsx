import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import { Link, useHistory } from 'react-router-dom';
import Confirm from './Confirm';
import './Form.css';
import './styles/Contact.css';
import { Element, scroller } from 'react-scroll';


const Form = () => {

    const { register, handleSubmit, watch, reset, getValues, formState: { errors } } = useForm();
    const [isConfirmationVisible, setIsConfirmationVisible] = useState(false);
    const hideConfirmation = () => setIsConfirmationVisible(false);
    const onSubmitData = () => setIsConfirmationVisible(true);

    // const scrollToTarget = () => {
    //     scroller.scrollTo('scrollTarget', {
    //         duration: 800,
    //         delay: 0,
    //         smooth: 'easeOutQuint'
    //     })
    // };

    const history = useHistory();
    const move = () => {
        {
            isConfirmationVisible &&
                history.push("/Confirm")
                
            // (values = getValues());


            // <Confirm
            // values={getValues()}
            // hideConfirmation={hideConfirmation}
            // />

            // history.push(<Confirm
            //     values={getValues()}
            //     hideConfirmation={hideConfirmation}
            // />)

        };
    };
    //     {
    //         isConfirmationVisible &&
    //             <Confirm

    //                 values={getValues()}
    //                 hideConfirmation={hideConfirmation}
    //             />
    // };


    // history.push("/Confirm");
    // values = getValues();
    // hideConfirmation = hideConfirmation;

    // }


    // const Name = watch("name");
    // const Company = watch("company");
    // const Department = watch("department");
    // const Email = watch("email");
    // const Tel = watch("tel");
    // const PostalCode = watch("postalCode");
    // const Prefectures = watch("prefectures");
    // const Address = watch("address");
    // const Message = watch("message");




    // const onSubmit = data => console.log(data);
    // console.log(errors);


    return (
        <div>
            <div className="Form">
                <div className="Form-Item">
                    <form onSubmit={handleSubmit(onSubmitData)} className="contactBox">

                        <div className="Form-Item-Label">
                            <p htmlFor="name">お名前
                                <span className="caution">*</span>
                                <input type="text" id="name" name="name"
                                    className="Form-Item-Input"
                                    {...register("name", { required: true })} />
                                {errors.name &&
                                    <div className="error">お名前を入力してください</div>}
                            </p>
                        </div>

                        <div className="Form-Item-Label">
                            <p htmlFor="company">会社名・法人名・団体名
                                <span className="caution">*</span>
                                <span className="mgr10">※個人のお客様は「個人」とご記入ください</span>
                                <input type="text" id="company" name="company"
                                    className="Form-Item-Input"
                                    {...register("company", { required: true })} />
                                {errors.company &&
                                    <div className="error">会社名・法人名・団体名を入力してください</div>}
                            </p>
                        </div>

                        <div className="Form-Item-Label">
                            <p htmlFor="department">
                                部署・役職等
                                <span className="caution">*</span>
                                <input type="text" id="department" name="department"
                                    className="Form-Item-Input"
                                    {...register("department", { required: true })} />
                                {errors.department &&
                                    <div className="error">部署・役職等を入力してください</div>}
                            </p>
                        </div>

                        <div className="Form-Item-Label">
                            <p htmlFor="email">メールアドレス
                                <span className="caution">*</span>
                                <input type="text" id="email" name="email"
                                    className="Form-Item-Input"
                                    {...register("email", {
                                        required: true,
                                        pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i
                                    })} />
                                {errors.email?.type === "required" &&
                                    <div className="error">メールアドレスを入力してください</div>}
                                {errors.email?.type === "pattern" &&
                                    <div className="error">正しいメールアドレスを入力してください</div>}
                            </p>
                        </div>

                        <div className="Form-Item-Label">
                            <p htmlFor="tel">電話番号
                                <span className="caution">*</span>
                                <input type="tel" id="tel" name="tel"
                                    className="Form-Item-Input"
                                    {...register("tel", {
                                        required: true,
                                        pattern: /^[0-9]+$/i
                                    })} />
                                {errors.tel?.type === "required" &&
                                    <div className="error">電話番号を入力してください</div>}
                                {errors.tel?.type === "pattern" &&
                                    <div className="error">半角数字で入力してください</div>}
                            </p>
                        </div>

                        <div className="Form-Item-Label">
                            <p htmlFor="postalCode">郵便番号
                                <span className="caution">*</span>
                                <input type="postalCode" id="postalCode" name="postalCode"
                                    className="Form-Item-Input"
                                    {...register("postalCode", {
                                        required: true,
                                        pattern: /^\d{3}-\d{4}$/,
                                    })} />
                                {errors.postalCode?.type === "required" &&
                                    <div className="error">郵便番号を入力してください</div>}
                                {errors.postalCode?.type === "pattern" &&
                                    <div className="error">ハイフンを入れて正しい郵便番号を入力してください</div>}
                            </p>
                        </div>

                        <div className="Form-Item-Label">
                            <p htmlFor="prefectures">都道府県
                                <span className="caution">*</span>
                                <input type="address-level1" id="prefectures" name="prefectures"
                                    className="Form-Item-Input"
                                    {...register("prefectures", { required: true })} />
                                {errors.prefectures &&
                                    <div className="error">都道府県を入力してください</div>}
                            </p>
                        </div>

                        <div className="Form-Item-Label">
                            <p htmlFor="address">ご住所
                                <span className="caution">*</span>
                                <input type="text" id="address" name="address"
                                    className="Form-Item-Input"
                                    {...register("address", { required: true })} />
                                {errors.address &&
                                    <div className="error">ご住所を入力してください</div>}
                            </p>
                        </div>

                        <div className="Form-Item-Label">
                            <p htmlFor="message">メッセージ本文
                                <span className="caution">*</span>
                                <textarea id="message" name="message"
                                    className="Form-Item-Textarea"
                                    {...register("message", {
                                        required: true,
                                        minLength: 1,
                                        maxLength: 300,
                                    })} />
                                {errors.message &&
                                    <div className="error">メッセージを300文字以内で入力してください</div>}
                            </p>
                        </div>

                        <div className='btnBox'>
                            <input
                                type="button"
                                onClick={() => reset()}
                                value="クリア"
                                className="Form-Btn reset"
                            />

                            <button
                                type="submit"
                                className="Form-Btn"
                                // >
                                // onClick={() => onSubmit()}

                                onClick={() => {
                                    move();
                                    // const values = getValues();
                                    // console.log(values);
                                }}


                            // onClick= */
                            // /* {isConfirmationVisible &&
                            //     <Confirm
                            //         values={getValues()}
                            //         hideConfirmation={hideConfirmation}
                            //     />
                            // } */}

                            >
                                確認画面へ
                            </button>
                        </div>
                    </form>
                </div>
            </div>

            {/* <Element name='scrollTarget' /> */}
            {/* {isConfirmationVisible &&
                <Confirm
                values={getValues()}
                hideConfirmation={hideConfirmation}
                />
            } */}

        </div >
    );
}

export default Form;