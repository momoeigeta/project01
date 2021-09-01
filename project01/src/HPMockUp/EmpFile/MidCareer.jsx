import React from 'react';
import MidCareerForm from './MidCareerForm';
import '../styles/Emp.css';

const MidCareer = () => {

    return (
        <>
            <header className="header" >
                <div className="backImg">

                    <h1>中途採用</h1>
                </div>
            </header>
            <div className="lineshadow">
                <p className="shadow">
                    {/* <span className="lineshadow"> */}
                    中途採用について
                    {/* </span> */}
                </p>
                <hr className="hr1"></hr>
            </div>
            <p className="caution">現在、募集を行っております。</p>
            <div className="lineshadow">
                <p className="shadow">
                    {/* <span className="lineshadow"> */}
                    募集要項
                    {/* </span> */}
                </p>
                <hr className="hr2"></hr>
            </div>
            <table border="1">
                <tr>
                    <th>募集職種</th>
                    <td>エンジニア職</td>
                    <td>ITサポート職</td>
                </tr>
                <tr>
                    <th>募集人数</th>
                    <td>30名（予定）</td>
                    <td>10名（予定）</td>
                </tr>
                <tr>
                    <th>業務内容</th>
                    <td>
                        <ul>
                            <li>・受発注管理システム</li>
                            <li>・ソーシャルアプリ開発業務</li>
                            <li>・売上管理システム開発</li>
                            <li>・Webサイト制作及び運用、保守業務</li>
                            <li>・顧客管理システム開発業務</li>
                            <li>・NW維持管理業務</li>
                            <li>・クラウド基盤環境設計及び構築</li>
                            <li>・サーバ運用、監視</li>
                            <li>・データ入力、検証作業</li>
                            <li>・その他</li>
                        </ul>
                    </td>
                    <td>
                        <ul>
                            <li>・ヘルプデスク</li>
                            <li>・カスタマーサポート</li>
                            <li>・コールセンター</li>
                            <li>・プロジェクトサポート支援業務</li>
                            <li>・その他</li>
                        </ul>
                    </td>
                </tr>
                <tr>
                    <th>待遇</th>
                    <td colSpan="2">
                        <ul>
                            <li>初任給：基本給165,000円 + 職務手当35,000円</li>
                            <li>※上記給与には、みなし残業代（月28時間分・35,000円以上）を含む。超過分は別途支給。</li>
                            <li>賞与：業績による</li>
                            <li>勤務時間：9:30～18:30（休憩1時間）</li>
                            <li>勤務地：東京本社</li>
                            <li>休日：完全週休2日制（土曜・日曜）、国民の祝日</li>
                            <li>休暇：年次有給休暇（入社6か月後、10日付与）</li>
                            <li>福利厚生：各種社会保険、産前・産後休暇、半日有給休暇取得制度</li>
                        </ul>
                    </td>
                </tr>
            </table>
            <div className="lineshadow">
                <p className="shadow">
                    {/* <span className="lineshadow"> */}
                    採用フロー
                    {/* </span> */}
                </p>
                <hr className="hr3"></hr>
            </div>
            <h3>
                エントリー
            </h3>
            <ul className="left">
                <li>フォース株式会社にご興味をお持ち頂きました方は、お電話や応募フォームにて直接お問い合わせ下さい。</li>
            </ul>

            <h3>一次選考会</h3>
            <ul className="left">
                <li>これからＩＴ業界を目指す方・興味を持ち始めた方も是非ご応募ください！</li>
                <li>筆記試験と面接を受けていただきます。</li>
            </ul>

            <h3>最終選考</h3>
            <ul className="left">
                <li>個人面接を受けていただきます。</li>
            </ul>

            <h3>内定</h3>
            <ul className="left">
                <li>内定までは、1週間前後を予定しています。</li>
            </ul>

            <h3>持ち物</h3>
            <ul className="left">
                <li>筆記用具、写真付履歴書、職務経歴書</li>
            </ul>
            <div className="lineshadow">
                <p className="shadow">
                    {/* <span className="lineshadow"> */}
                    応募フォーム
                    {/* </span> */}
                </p>
                <hr className="hr4"></hr>
            </div>
            <MidCareerForm />
        </>
    );
};
export default MidCareer;