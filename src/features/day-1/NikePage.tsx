import { Card } from "~/components";
import "./NikePage.css";
import { CiShoppingCart, CiHeart } from "react-icons/ci";

import { Button } from "~/components";

export const NikePage = () => {
  const sizeShoes = [39, 40, 41, 42];
  const colorShoes = ["red", "green", "blue", "yellow"];

  return (
    <>
      <div className="container">
        <Card>
          <div className="card__heading-icon">
            <CiHeart className="icon-style" />
            <CiShoppingCart className="icon-style" />
          </div>
          <div className="card__infor">
            <div className="card__infor-img">
              <img
                src="https://www.nodemy.vn/projects/html-css-js/product-card/Nike%20Zoom%20KD%2012.png"
                alt="none"
              />
            </div>
            <h2 className="card__infor-title">Nike Zoom KD 12</h2>
            <p className="card__infor-price">$99</p>
          </div>
          <div className="card__size">
            <h3 className="card__size-title">Size:</h3>
            <div className="card__size-num">
              {sizeShoes.map(item => (
                <span>{item}</span>
              ))}
            </div>
          </div>
          <div className="card__color">
            <h3 className="card__color-title">Color:</h3>
            <div className="card__color-block">
              {colorShoes.map(item => (
                <span className={item}></span>
              ))}
            </div>
          </div>
          <div className="card__action">
            <Button size="medium" label="Buy now" />

            <Button variant="secondary" size="medium" label="Add cart" />
          </div>
        </Card>
      </div>
    </>
  );
};
