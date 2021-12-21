import React, { Component } from "react";
import styles from "./Pricing.module.scss";
import PriceItem from "./PriceItem";
import massage from "../../images/massage.png";
import VisibilitySensor from "react-visibility-sensor";

class Pricing extends Component {
  state = {
    visible: false,
  };
  onVisibilityChange = (isVisible) => {
    if (isVisible) {
      this.setState({
        visible: true,
      });
    }
  };

  render() {
    const {
      pricing,
      pricingShow,
      pricingHide,
      price_content,
      title,
      separator,
      price_list,
      massage_image,
      price_items,
      showText,
    } = styles;
    return (
      <VisibilitySensor
        onChange={this.onVisibilityChange}
        delayedCall
        minTopValue={this.props.width > 968 ? 300 : 100}
        partialVisibility
      >
        <section id="cennik-uslug" className={pricing}>
          <div
            className={
              this.state.visible
                ? `${pricingHide} ${pricingShow} `
                : pricingHide
            }
          >
            <div className="container">
              <div className={price_content}>
                <div className={title}>
                  Cennik usług
                  <span className={separator}></span>
                </div>
                <div className={price_list}>
                  <div className={price_items}>
                    <PriceItem
                      content="Masaż leczniczy/terapia manualna"
                      price="150zł"
                      time="60"
                    />
                    <PriceItem content="Masaż kobiet w ciąży" price="100zł" />
                    <PriceItem
                      content="Terapia blizn"
                      price="130zł"
                      time="50"
                    />
                    <PriceItem
                      content="Terapia bóli głowy"
                      price="150zł"
                      time="60"
                    />
                    <PriceItem
                      content="Masaż tkanek głębokich"
                      price="150zł"
                      time="60"
                    />
                    <p
                      className={showText}
                      onClick={this.props.handleModalVisibity}
                    >
                      pokaż cały cennik
                    </p>
                  </div>

                  <div className={massage_image}>
                    <img src={massage} alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </VisibilitySensor>
    );
  }
}

export default Pricing;
