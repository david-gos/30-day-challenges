import { Card } from "~/components/Card";
import "./NikePage.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping, faHeart } from "@fortawesome/free-solid-svg-icons";
import { Button } from "~/components";

export const NikePage = () => {
  const sizeShoes = [39, 40, 41, 42];
  const colorShoes = ["red", "green", "blue", "yellow"];
  return (
    <>
      <div className="container">
        <Card>
          <div className="card__heading-icon">
            <FontAwesomeIcon className="icon-style" icon={faHeart} />
            <FontAwesomeIcon className="icon-style" icon={faCartShopping} />
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
            <Button size="medium" label="Buy now" backgroundColor="#4daf54" />

            <Button size="medium" label="Add cart" backgroundColor="#4daf54" />
          </div>
        </Card>
      </div>
    </>
  );
};
