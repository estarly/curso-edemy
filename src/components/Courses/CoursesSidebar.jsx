import React from "react";
import Link from "next/link";

const CoursesSidebar = () => {
  return (
    <>
      <div className="widget-area">
        <div className="widget widget_search">
          <h3 className="widget-title">Search</h3>

          <form className="search-form">
            <label>
              <span className="screen-reader-text">Search for:</span>
              <input
                type="search"
                className="search-field"
                placeholder="Search..."
              />
            </label>
            <button type="submit">
              <i className="bx bx-search-alt"></i>
            </button>
          </form>
        </div>

        <div className="widget widget_recent_courses">
          <h3 className="widget-title">Recent Courses</h3>

          <div className="item">
            <Link href="#" className="thumb">
              <span className="fullimage cover bg1" role="img"></span>
            </Link>
            <div className="info">
              <span>$49.00</span>
              <h4 className="title usmall">
                <Link href="#">
                  The Data Science Course 2020: Complete Data Science Bootcamp
                </Link>
              </h4>
            </div>
            <div className="clear"></div>
          </div>

          <div className="item">
            <Link href="#" className="thumb">
              <span className="fullimage cover bg2" role="img"></span>
            </Link>
            <div className="info">
              <span>$59.00</span>
              <h4 className="title usmall">
                <Link href="#">
                  Java Programming MasterclassName for Software Developers
                </Link>
              </h4>
            </div>
            <div className="clear"></div>
          </div>

          <div className="item">
            <Link href="#" className="thumb">
              <span className="fullimage cover bg3" role="img"></span>
            </Link>
            <div className="info">
              <span>$69.00</span>
              <h4 className="title usmall">
                <Link href="#">
                  Deep Learning A-Z™: Hands-On Artificial Neural Networks
                </Link>
              </h4>
            </div>
            <div className="clear"></div>
          </div>
        </div>

        <div className="widget widget_tag_cloud">
          <h3 className="widget-title">Popular Tags</h3>

          <div className="tagcloud">
            <Link href="#">
              Business <span className="tag-link-count">(3)</span>
            </Link>
            <Link href="#">
              Design <span className="tag-link-count">(3)</span>
            </Link>
            <Link href="#">
              Digital <span className="tag-link-count">(2)</span>
            </Link>
            <Link href="#">
              SEO <span className="tag-link-count">(2)</span>
            </Link>
            <Link href="#">
              Braike <span className="tag-link-count">(2)</span>
            </Link>
            <Link href="#">
              Fashion <span className="tag-link-count">(2)</span>
            </Link>
            <Link href="#">
              Software <span className="tag-link-count">(2)</span>
            </Link>
            <Link href="#">
              Travel <span className="tag-link-count">(1)</span>
            </Link>
            <Link href="#">
              Smart <span className="tag-link-count">(1)</span>
            </Link>
            <Link href="#">
              Marketing <span className="tag-link-count">(1)</span>
            </Link>
            <Link href="#">
              Tips <span className="tag-link-count">(2)</span>
            </Link>
            <Link href="#">
              Website <span className="tag-link-count">(2)</span>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default CoursesSidebar;
