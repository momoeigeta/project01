import React from 'react';
import { Link } from 'react-router-dom';


const Overview = () => {

    return (
        <div className="Overview">

            <header className="header" >
                <div className="backImg">
                    <h1>会社概要</h1>
                </div>
            </header>

            <table>
                <tbody>
                    <tr>
                        <th>会社名</th>
                        <td>フォース株式会社</td>
                    </tr>
                    <tr>
                        <th>設立</th>
                        <td>2013年（平成25年）11月</td>
                    </tr>
                    <tr>
                        <th>資本金</th>
                        <td>10,000,000円</td>
                    </tr>
                    <tr>
                        <th>代表者</th>
                        <td>代表取締役　松永　淳</td>
                    </tr>
                    <tr>
                        <th>社員数</th>
                        <td>84名（2020年4月現在）</td>
                    </tr>
                    <tr>
                        <th>所在地</th>
                        <td>
                            〒101-0054 東京都千代田区神田錦町3-18 寿ビル7階<br />
                            <Link to="/Access">会社所在地</Link>
                        </td>
                    </tr>
                    <tr>
                        <th>連絡先</th>
                        <td>Tel:03-5259-5231(代表)　Fax:03-5259-5320</td>
                    </tr>
                    <tr>
                        <th>事業内容</th>
                        <td>
                            <ul>
                                <li>情報処理に関するソフトウェア及びハードウェア、
                                    スマートフォン・タブレット端末用の開発・製造及び販売、動画プラットフォームの販売</li>
                                <li><Link to="/Services">事業内容</Link></li>
                            </ul>
                        </td>
                    </tr>
                    <tr>
                        <th>関連会社</th>
                        <td>
                            <ul>
                                <li><Link to="/">サン株式会社</Link>（セールスプロモーション・ソリューション・企画)</li>
                                <li><Link to="/">株式会社サンシャイン</Link>（教育事業・人材派遣事業）</li>
                                <li><Link to="/">データウェアネットワーク株式会社</Link> (システム開発・Web制作事業・特定労働派遣事業）</li>
                                <li><Link to="/">ドラゴン株式会社</Link>（SP、PR、WEBを中心とした広告制作全般）</li>
                                <li><Link to="/">株式会社ノア</Link>（インターネット・サービス事業・ウェブサイト・ソリューション事業）</li>
                                <li><Link to="/">株式会社シエロ</Link>（デイサービスの運用）</li>
                                <li><Link to="/">アールビィシィ株式会社</Link>（建設業界のノウハウを凝縮したパッケージソフトのご提案、
                                    導入から保守運用、建設事業に携わる建機・仮設事業様専門アプリケーションの開発）</li>
                                <li><Link to="/">メッツソフトウェア株式会社</Link>（受託開発）</li>
                                {/* <li><Link to="/">メッツソフトウェア株式会社</Link>（受託開発）</li> */}
                                <li><Link to="/">システムラボラトリー株式会社</Link>（受託開発及び製品販売）</li>
                                <li><Link to="/">株式会社エフディエス</Link>（静脈認証システムの開発・販売）</li>
                                <li><Link to="/">株式会社grapple</Link>（マーケティングコンテンツ、Webインテグレーション、
                                    分析コンサルティング、ヒューマンリソース）</li>
                            </ul>
                        </td>
                    </tr>
                </tbody>
            </table>

        </div>
    );
};

export default Overview;