import React from 'react';
import Person from '../images/Person.jpg';

const Greeting = () => {

    return (

        <div className="Greeting">

            <header className="header" >
                <div className="backImg">
                    <h1>ごあいさつ</h1>
                </div>
            </header>

            <h2>
                <span className="red">社</span>員が一丸となって社会への貢献を目指す
            </h2>
            <hr></hr>

            <div className="around">
                <div>
                    <p>皆様には平素より当社グループ並びにフォース株式会社を御引き立て賜り、<br />
                        心より御礼申し上げます。
                    </p>
                    <p>私たちを取り巻く社会・経済環境は日々変化しており、<br />
                        お客様企業の成長戦略や経営課題、IT活用ニーズは多様化、高度化してきております。
                    </p>
                    <p>フォース株式会社は、IT技術領域において幅広い展開を行い、<br />
                        お客様の成長戦略や経営課題に最適なサービスの提案、サービスの提供を積極的に行って参ります。
                    </p>
                    <p>社員が一丸となってお客様満足度の向上と企業価値の最大化、社会への貢献を目指してまいります。<br />
                        今後ともより一層のご支援を賜りますよう、お願い申し上げます。
                    </p>
                </div>

                <div className="picFrame">
                    <img src={Person} alt="" />
                    <p>フォース株式会社　代表取締役</p>
                    <p>松永　淳</p>
                </div>
            </div>

        </div>
    );
};

export default Greeting;