import React from 'react';
import './styles/Access.css';

const Access = () => {

    return (
        <div className="Access">

            <header className="header" >
                <div className="backImg">
                    <h1>アクセス</h1>
                </div>
            </header>

            <div className="around">

                {/* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3240.331754136401!2d139.75921421461732!3d35.69345291073059!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188c0fe0ed6591%3A0x4df0f27d6a1119!2z44OV44Kp44O844K544ix!5e0!3m2!1sja!2sjp!4v1630474902629!5m2!1sja!2sjp" >
                </iframe> */}
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3240.3466352993605!2d139.75914581477136!3d35.69308663693005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188c0fde2095ef%3A0x7d59788c2b7ca2c7!2z44CSMTAxLTAwNTQg5p2x5Lqs6YO95Y2D5Luj55Sw5Yy656We55Sw6Yym55S677yT5LiB55uu77yR77yY4oiS77ySIOWvv-ODk-ODqw!5e0!3m2!1sja!2sjp!4v1630480686551!5m2!1sja!2sjp" title="map"></iframe>

                <div className="block">

                    <p className="le">最寄駅</p>
                    <div className="paling">
                        <p>東西線/竹橋駅（3b出口[KKRホテル側]より徒歩3分）<br />
                            半蔵門線・新宿線・三田線/神保町駅（A9出口から、徒歩5分）</p>
                    </div>

                    <p className="le">住所</p>
                    <div className="paling">
                        <p>千代田区神田錦町三丁目18番地　寿ビル7階 <br />
                            （データウェアネットワーク株式会社　社内）</p>
                    </div>

                </div>


            </div>


        </div>
    );
};

export default Access;