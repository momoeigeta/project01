import React from 'react';
import './styles/Emp.css';

const JobDescription = () => {

    return (
        <>
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
                    <th>応募資格</th>
                    <td colspan="2">
                        <p>2021年3月に4年制大学または大学院を卒業・修了見込みであり、就業経験のないこと</p>
                        <p>※既卒3年以内の方も応募可能</p>
                    </td>
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
                    <td colspan="2">
                        <ul>
                            <li>初任給：基本給170,000円 + 職務手当30,000円</li>
                            <li>※上記給与には、みなし残業代（月24時間分・30,000円以上）を含む。超過分は別途支給。</li>
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

        </>
    );
};

export default JobDescription;