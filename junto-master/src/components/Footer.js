import React from "react";
import { Link } from "gatsby";

import logo from "../img/logo.svg";

const Footer = class extends React.Component {
  render() {
    return (
      <footer className="footer">
        <div id="footer_contact_area" className="tel_invite_area">
          <div id="footer_contact_area_inner" className="clearfix">
            <div className="footer_contact_content" id="footer_tel">
              <div class="clearfix">
                <div class="right_area">
                  <p className="number">
                    <span>TEL: </span>
                    <a href="tel:0120-978-639">03-6280-5822</a>
                  </p>
                  <p class="time">
                    受付時間 / 平日：09:30 - 18:00　（土日祝は休み）
                  </p>
                </div>
              </div>
            </div>
            <div class="footer_contact_content2" id="footer_contact">
              <div class="clearfix">
                <p class="headline">ニーズにあった案件をご案内！</p>
                <div class="apo-btn">
                  <Link class="btn" to="./">
                    無料相談を予約する
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="content">
          <div className="container">
            <div className="columns">
              <section className="menu">
                <ul className="menu-list">
                  <li className="menu-list-item">
                    <a href="https://matasema10.work/main/?page_id=569">
                      個人情報保護方針
                    </a>
                  </li>
                  <li className="menu-list-item">
                    <a href="https://matasema10.work/main/?page_id=569">
                      お問い合わせフォーム
                    </a>
                  </li>
                  <li className="menu-list-item">
                    <a href="https://matasema10.work/main/?page_id=569">
                      案件情報一覧
                    </a>
                  </li>
                  <li className="menu-list-item">
                    <a href="https://matasema10.work/main/?page_id=569">
                      よくある質問
                    </a>
                  </li>
                  <li className="menu-list-item">
                    <a href="https://matasema10.work/main/?page_id=569">
                      運営会社：株式会社要
                    </a>
                  </li>
                </ul>
              </section>
            </div>
          </div>
        </div>
        <div className="copylight">
          <a href="https://kanamekey.com/">Copyright © 2018 KANAME Co.,Ltd</a>
        </div>
      </footer>
    );
  }
};

export default Footer;
