import React from 'react';
import { useForm } from "react-hook-form";
import { useHistory } from 'react-router-dom';
// import './Form.css';
import '../styles/Contact.css';
import useFormPersist from 'react-hook-form-persist';

const ContactForm = () => {

    const { register, handleSubmit, reset, getValues, formState: { errors }, setValue, watch } = useForm({
        mode: "all",
    });

    useFormPersist('form', { watch, setValue });

    const onSubmitData = (() => {
        history.push("./ContactConfirm",
            { values: getValues() }
        );
        reset();
    }
    );

    const history = useHistory();

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
                                    {...register("name", { required: true })}
                                />
                                {errors.name &&
                                    <p className="error">お名前を入力してください</p>}
                            </p>
                        </div>

                        <div className="Form-Item-Label">
                            <p htmlFor="company">会社名・法人名・団体名
                                <span className="caution">*</span>
                                <span className="mgr10">※個人のお客様は「個人」とご記入ください</span>
                                <input type="text" id="company" name="company"
                                    className="Form-Item-Input"
                                    {...register("company", { required: true })}
                                />
                                {errors.company &&
                                    <p className="error">会社名・法人名・団体名を入力してください</p>}
                            </p>
                        </div>

                        <div className="Form-Item-Label">
                            <p htmlFor="department">
                                部署・役職等
                                <span className="caution">*</span>
                                <input type="text" id="department" name="department"
                                    className="Form-Item-Input"
                                    {...register("department", { required: true })}
                                />
                                {errors.department &&
                                    <p className="error">部署・役職等を入力してください</p>}
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
                                    })}
                                />
                                {errors.email?.type === "required" &&
                                    <p className="error">メールアドレスを入力してください</p>}
                                {errors.email?.type === "pattern" &&
                                    <p className="error">正しいメールアドレスを入力してください</p>}
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
                                    })}
                                />
                                {errors.tel?.type === "required" &&
                                    <p className="error">電話番号を入力してください</p>}
                                {errors.tel?.type === "pattern" &&
                                    <p className="error">半角数字で入力してください</p>}
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
                                    })}
                                />
                                {errors.postalCode?.type === "required" &&
                                    <p className="error">郵便番号を入力してください</p>}
                                {errors.postalCode?.type === "pattern" &&
                                    <p className="error">ハイフンを入れて正しい郵便番号を入力してください</p>}
                            </p>
                        </div>

                        <div className="Form-Item-Label">
                            <p htmlFor="prefectures">都道府県
                                <span className="caution">*</span>
                                <input type="address-level1" id="prefectures" name="prefectures"
                                    className="Form-Item-Input"
                                    {...register("prefectures",
                                        { required: true }
                                    )}
                                />
                                {errors.prefectures &&
                                    <p className="error">都道府県を入力してください</p>}
                            </p>
                        </div>

                        <div className="Form-Item-Label">
                            <p htmlFor="address">ご住所
                                <span className="caution">*</span>
                                <input type="text" id="address" name="address"
                                    className="Form-Item-Input"
                                    {...register("address", { required: true })}
                                />
                                {errors.address &&
                                    <p className="error">ご住所を入力してください</p>}
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
                                    })}
                                />
                                {errors.message &&
                                    <p className="error">メッセージを300文字以内で入力してください</p>}
                            </p>
                        </div>

                        <div className='btnBox'>
                            <input type="button"
                                value="クリア"
                                className="Form-Btn reset"
                                onClick={() => reset()}
                            />

                            <input
                                type="submit"
                                className="Form-Btn"
                                value="確認画面へ"
                            />
                        </div>
                    </form>
                </div>
            </div>
        </div >
    );
};

export default ContactForm;