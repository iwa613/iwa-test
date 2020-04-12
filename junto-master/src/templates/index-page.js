import React from "react";
import PropTypes from "prop-types";
import { Link, graphql } from "gatsby";

import Layout from "../components/Layout";
import Features from "../components/Features";
import BlogRoll from "../components/BlogRoll";

export const IndexPageTemplate = ({
  image,
  title,
  heading,
  subheading,
  mainpitch,
  description,
  intro,
}) => (
  <div>
    <div
      className="full-width-image margin-top-0"
      style={{
        backgroundImage: `url(${
          !!image.childImageSharp ? image.childImageSharp.fluid.src : image
        })`,
        backgroundPosition: `center`,
        cursor: "grab",
      }}
    >
      <div className="background">
        <div
          style={{
            display: "flex",
            height: "150px",
            lineHeight: "1",
            justifyContent: "space-around",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <a
            className="img"
            style={{
              margin: "0em 0em 0.3125em",
              cursor: "grab",
            }}
          >
            <img src="/img/slide1icon.png"></img>
          </a>
          <p
            style={{
              color: "white",
              fontSize: "16px",
              fontWeight: "bold",
              margin: "0em 0em 0.3125em",
            }}
          >
            業界最速クラスの支払サイトを実現
          </p>
          <h1
            className="has-text-weight-bold is-size-3-mobile is-size-2-tablet is-size-1-widescreen"
            style={{
              color: "white",
              fontSize: "38px",
              lineHeight: "1",
              padding: "0.25em",
              fontWeight: "bold",
            }}
          >
            {title}
          </h1>
          <h3
            className="has-text-weight-400 is-size-5-mobile is-size-5-tablet is-size-4-widescreen"
            style={{
              color: "white",
              lineHeight: "1",
              padding: "0.25em",
              fontSize: "24px",
              fontWeight: "400",
            }}
          >
            {subheading}
          </h3>
          <h3
            style={{
              color: "white",
              lineHeight: "1",
              margin: "0em 0em 0.9375em",
              fontSize: "24px",
              fontWeight: "400",
            }}
          >
            Juntoだからできる、スペシャル待遇です。
          </h3>

          <div className="columns">
            <div className="column is-12 has-text-centered">
              <Link className="btn2" to="/products">
                さらに詳しく見る
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
    <section class="boxsection section--gradient">
      <div id="index_3box" className="index_content clearfix">
        {/*選ばれる理由*/}
        <div className="box clearfix">
          <a className="reason" href="https://matasema10.work/main/?page_id=70">
            <span class="boximg">
              <img
                src="/img/reason.jpg"
                alt="選ばれる理由"
                width="300px"
                height="250px"
              ></img>
            </span>
          </a>
          <div className="three_title">
            <h4 className="title">
              <a href="https://matasema10.work/main/?page_id=70">
                選ばれる理由
              </a>
            </h4>
          </div>
        </div>
        {/*ご利用の流れ*/}
        <div className="box clearfix">
          <a className="flow" href="https://matasema10.work/main/?page_id=200">
            <span class="boxing">
              <img
                src="/img/flow.jpg"
                alt="ご利用の流れ"
                width="300px"
                height="250px"
              ></img>
            </span>
          </a>
          <div className="three_title">
            <h4 className="title">
              <a href="https://matasema10.work/main/?page_id=200">
                ご利用の流れ
              </a>
            </h4>
          </div>
        </div>
        <div className="box clearfix">
          <a className="agent" href="https://matasema10.work/main/?page_id=206">
            <span class="boxing">
              <img
                src="/img/agent.jpg"
                alt="当社エージェント紹介"
                width="300px"
                height="250px"
              ></img>
            </span>
          </a>
          <div className="three_title">
            <h4 className="title">
              <a href="https://matasema10.work/main/?page_id=206">
                当社エージェント紹介
              </a>
            </h4>
          </div>
        </div>
      </div>
    </section>
    <section className="section section--gradient">
      <div className="container">
        <div className="section">
          <div className="columns">
            <div className="column is-10 is-offset-1">
              <div className="content">
                <div className="column is-12">
                  <div className="has-text-centered">
                    <p className="title">案件情報</p>
                  </div>
                  <p className="has-text-centered">
                    案件の一部をご紹介いたします
                  </p>
                  <BlogRoll />
                  <div className="column is-12 has-text-centered">
                    <Link className="btn" to="/blog">
                      案件情報一覧
                    </Link>
                  </div>
                </div>
                <div id="index_news" className="clearfix">
                  <p className="title">お役立ちコラム</p>
                  <div id="index_new_list" className="column_content">
                    <article className="item clearfix">
                      <a
                        className="column_image"
                        href=""
                        title="非公開求人について"
                      >
                        <img src="/img/column_private.jpg"></img>
                      </a>
                      <a
                        className="title_area"
                        href="/"
                        title="非公開求人について"
                      >
                        <div className="title_area_inner">
                          <h4 className="title">非公開求人について</h4>
                          <p className="data">
                            <time
                              className="entry-data upadated"
                              datatime="2018-10-31T11:54:13+09:00"
                            >
                              2018.10.20
                            </time>
                          </p>
                        </div>
                      </a>
                    </article>
                    <article className="item clearfix">
                      <a
                        className="column_image"
                        href=""
                        title="履歴書を書き始める前のチェック！　履歴書職歴書き方の基本"
                      >
                        <img src="/img/column_history.jpg"></img>
                      </a>
                      <a
                        className="title_area"
                        href=""
                        title="履歴書を書き始める前のチェック！　履歴書職歴書き方の基本"
                      >
                        <div className="title_area_inner">
                          <h4 className="title">
                            履歴書を書き始める前のチェック！　履歴書職歴書き方の基本
                          </h4>
                          <p className="data">
                            <time
                              className="entry-data upadated"
                              datatime="2018-10-31T11:54:40+09:00"
                            >
                              2018.10.16
                            </time>
                          </p>
                        </div>
                      </a>
                    </article>
                    <article className="item clearfix">
                      <a
                        className="column_image"
                        href=""
                        title="ポイントを抑えた職務経歴書を書こう"
                      >
                        <img src="/img/column_resume.jpg"></img>
                      </a>
                      <a
                        className="title_area"
                        href=""
                        title="ポイントを抑えた職務経歴書を書こう"
                      >
                        <div className="title_area_inner">
                          <h4 className="title">
                            ポイントを抑えた職務経歴書を書こう
                          </h4>
                          <p className="data">
                            <time
                              className="entry-data upadated"
                              datatime="2018-10-31T11:55:05+09:00"
                            >
                              2018.10.15
                            </time>
                          </p>
                        </div>
                      </a>
                    </article>
                  </div>
                  <div className="column is-12 has-text-centered">
                    <Link className="btn" to="/blog">
                      お役立ちコラム一覧
                    </Link>
                  </div>
                </div>

                <div
                  className="corporation"
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                >
                  <div className="tile1">
                    <p className="title">{mainpitch.title}</p>
                  </div>
                  <div className="tile2">
                    <p
                      style={{
                        fontSize: "14px",
                        color: "rgb(102, 102, 102)",
                      }}
                    >
                      {mainpitch.description}
                    </p>
                  </div>
                  <div className="corporation2">
                    <a className="image">
                      <img
                        src="/img/corporation.jpg"
                        alt="またせま10(テン)について"
                      ></img>
                    </a>
                    <div className="button2">
                      <a class="button" href="./">
                        またせま10(テン)について
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
);

IndexPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  heading: PropTypes.string,
  subheading: PropTypes.string,
  mainpitch: PropTypes.object,
  description: PropTypes.string,
  intro: PropTypes.shape({
    blurbs: PropTypes.array,
  }),
};

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;

  return (
    <Layout>
      <IndexPageTemplate
        image={frontmatter.image}
        title={frontmatter.title}
        heading={frontmatter.heading}
        subheading={frontmatter.subheading}
        mainpitch={frontmatter.mainpitch}
        description={frontmatter.description}
        intro={frontmatter.intro}
      />
    </Layout>
  );
};

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
};

export default IndexPage;

export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        title
        image {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        heading
        subheading
        mainpitch {
          title
          description
        }
        description
        intro {
          blurbs {
            image {
              childImageSharp {
                fluid(maxWidth: 240, quality: 64) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            text
          }
          heading
          description
        }
      }
    }
  }
`;
