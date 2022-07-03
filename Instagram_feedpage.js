import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Heart from "react-heart";
import Card from "react-bootstrap/Card";
import "bootstrap/dist/css/bootstrap.min.css";
import pic from "./img/instagram.png";
import akp from "./img/akp.jpg";
import human1 from "./img/human1.jpg";
import human2 from "./img/human2.jpg";
import human3 from "./img/human3.jpg";
import human4 from "./img/human4.jpg";
import ins from "./img/ins1.jpg";
import "./Instagram_feedpage.css";
import { FaDirections, FaUserCircle } from "react-icons/fa";
import { AiFillHome, AiOutlineMessage, AiOutlineHeart } from "react-icons/ai";
import {
  BiMessageSquareAdd,
  BiUserCircle,
  BiMessageRounded,
  BiSmile,
} from "react-icons/bi";
import { BsFacebook, BsBookmark, BsThreeDots } from "react-icons/bs";
import { TbBrandTelegram } from "react-icons/tb";
// import FormControlLabel from '@material-ui/core/FormControlLabel';
// import Checkbox from '@material-ui/core/Checkbox';
export default function Feed_page() {
  const [active, setActive] = useState(false);
  const [items, setItems] = useState([]);
  const [DataisLoaded, setDataisLoaded] = useState(false);

  useEffect(() => {
    fetch("https://629c61fae9358232f75a0851.mockapi.io/users")
      .then((res) => res.json())
      .then((json) => {
        setItems(json);
        setDataisLoaded(true);
      });
  }, []);

  // const {items,setItems} = useState('');
  if (!DataisLoaded)
    return (
      <div>
        <h1>
          <img src={ins} className="first_img" />
        </h1>{" "}
        <h4 style={{marginTop:"100px"}}>
          By
          <br />
          AKP corporation
        </h4>
      </div>
    );

  return (
    <div>
      <ul className="heading_line">
        <li className="insta">
          <img src={pic} height="50px" width="100px" alt="profile1" />
        </li>
        <li>
          <input
            type="text"
            name="name"
            className="search_box"
            placeholder="Search...."
          />
        </li>
        <li className="li_list">
          <AiFillHome className="icons" />
        </li>
        <li className="li_list">
          <AiOutlineMessage className="icons" />
        </li>
        <li className="li_list">
          <BiMessageSquareAdd className="icons" />
        </li>
        <li className="li_list">
          <FaDirections className="icons" />
        </li>
        <li className="li_list">
          <AiOutlineHeart className="icons" />
        </li>
        <li className="li_list">
          <BiUserCircle className="icons" />
        </li>
      </ul>
      <div className="left_page">
        <div style={{ transform: "translate(-35%, -24%)" }}>get started</div>
        <Card className="get_start">
          <BsFacebook className="facebook" />
          <br />
          <br />
          <b>Find Facebook friends</b>
          <br />
          <p>
            You choose which friends to follow. We'll never post to Facebook
            without your permission.
          </p>
          <Button variant="primary" className="log_btn">
            connect to acebook
          </Button>
        </Card>
        <br />
        {/* left second page */}
        {/* first tag */}

        {items.map((item) => (
          <ul key={item.id}>
            <Card className="feed_left">
              <Card.Body>
                <span as="h6">
                  <p style={{ float: "left" }}>
                    {" "}
                    <FaUserCircle />
                    &nbsp;&nbsp;{item.name}
                  </p>
                  <BsThreeDots style={{ float: "right" }} />
                </span>
                <br />
                <img src={item.avatar} width="100%" height="300px" />
                <br />
                <ul className="img_bottom">
                  <br />

                  <li style={{ width: "24px" }} className="heart_icon heart">
                    <Heart
                      isActive={active}
                      onClick={() => setActive(!active)}
                    />
                  </li>

                  <li>
                    <BiMessageRounded className="heart_icon icons_two" />
                  </li>
                  <li>
                    <TbBrandTelegram className="heart_icon icons_two" />
                  </li>
                  <li>
                    <BsBookmark
                      cassName="heart_icon"
                      className="bookmark bookmark"
                    />
                  </li>
                </ul>
                <ul className="last_page">
                  <li>
                    <BiSmile
                      className="icons"
                      style={{ transform: "translate(-28%, 10%)" }}
                    />
                  </li>
                  <li>
                    <input
                      type="text"
                      placeholder="Comments...."
                      className="bottom_input"
                    />
                  </li>
                  <li style={{ transform: "translate(15%, 10%)" }}>post</li>
                </ul>
              </Card.Body>
            </Card>
          </ul>
        ))}

        <div className="right_page" style={{ top: "0" }}>
          <ul className="user_one">
            <li className="one">
              <img
                src={akp}
                width="40px"
                height="40px"
                style={{ borderRadius: "20px" }}
              />
            </li>
            <li className="two">arnkumaresan555</li>
            <li className="three">
              <a href="#" style={{ textDecoration: "none" }}>
                switch
              </a>
            </li>
          </ul>
          <ul className="user_one">
            <li style={{ marginRight: "50px" }}>suggestions for you</li>
            <li>see all</li>
          </ul>
          <ul className="user_two user_one">
            <li className="one">
              <img
                src={human1}
                width="40px"
                height="40px"
                style={{ borderRadius: "20px" }}
              />
            </li>
            <li className="two">arnkumaresan555</li>
            <li className="three">
              <a href="#" style={{ textDecoration: "none" }}>
                follow
              </a>
            </li>
          </ul>
          <ul className="user_three user_one">
            <li className="one">
              <img
                src={human2}
                width="40px"
                height="40px"
                style={{ borderRadius: "20px" }}
              />
            </li>
            <li className="two">arnkumaresan555</li>
            <li className="three">
              <a href="#" style={{ textDecoration: "none" }}>
                follow
              </a>
            </li>
          </ul>
          <ul className="user_four user_one">
            <li className="one">
              <img
                src={human3}
                width="40px"
                height="40px"
                style={{ borderRadius: "20px" }}
              />
            </li>
            <li className="two">arnkumaresan555</li>
            <li className="three">
              <a href="#" style={{ textDecoration: "none" }}>
                follow
              </a>
            </li>
          </ul>

          <ul className="user_four user_one">
            <li className="one">
              <img
                src={human4}
                width="40px"
                height="40px"
                style={{ borderRadius: "20px" }}
              />
            </li>
            <li className="two">arnkumaresan555</li>
            <li className="three">
              <a href="#" style={{ textDecoration: "none" }}>
                switch
              </a>
            </li>
          </ul>
          <p className="h6">
            About - HelpPress - API - Jobs - Privacy - Terms - Locations
            <br />
            Language
          </p>
          <p>© 2022 INSTAGRAM FROM META</p>
        </div>
      </div>
    </div>
  );
}
