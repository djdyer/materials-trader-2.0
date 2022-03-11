import React from "react";

export default function Search() {
  const plastic = require("../../src/assets/icons/materials/plastic.png");
  const glass = require("../../src/assets/icons/materials/glass.png");
  const aluminum = require("../../src/assets/icons/materials/aluminum.png");
  const textiles = require("../../src/assets/icons/materials/textiles.png");
  const cardboard = require("../../src/assets/icons/materials/cardboard.png");
  const paper = require("../../src/assets/icons/materials/paper.png");
  const electronics = require("../../src/assets/icons/materials/electronics.png");
  const batteries = require("../../src/assets/icons/materials/batteries.png");
  const appliances = require("../../src/assets/icons/materials/appliances.png");
  const steel = require("../../src/assets/icons/materials/steel.png");
  const concrete = require("../../src/assets/icons/materials/concrete.png");
  const oil = require("../../src/assets/icons/materials/oil.png");

  return (
    <div className="search">
      <div className="title_header">
        <h3>SEARCH MATERIALS</h3>
      </div>
      <div className="form_body">
        <div id="search-field">
          {/* LEFT COLUMN */}
          <div>
            <a href="/searchmaterial/1">
              <button
                onClick={this.myfunction}
                value="1"
                type="click"
                className="search-button"
              >
                <img
                  alt="search-plastics"
                  id="plastic-icon"
                  src={plastic}
                ></img>
                <h2 id="search-plastic">PLASTIC</h2>
              </button>
            </a>
            <a href="/searchmaterial/2">
              <button
                value="2"
                type="click"
                className="search-button"
                id="search-glass"
              >
                <img alt="search-glass" id="glass-icon" src={glass}></img>
                <h2>GLASS</h2>
              </button>
            </a>
            <a href="/searchmaterial/3">
              <button
                value="3"
                type="click"
                className="search-button"
                id="search-aluminum"
              >
                <img
                  alt="search-aluminum"
                  id="aluminum-icon"
                  src={aluminum}
                ></img>
                <h2>ALUMINUM</h2>
              </button>
            </a>
            <a href="/searchmaterial/12">
              <button
                value="12"
                type="click"
                className="search-button"
                id="search-textiles"
              >
                <img
                  alt="search-textiles"
                  id="textiles-icon"
                  src={textiles}
                ></img>
                <h2>TEXTILES</h2>
              </button>
            </a>
            <a href="/searchmaterial/5">
              <button
                value="5"
                type="click"
                className="search-button"
                id="search-cardboard"
              >
                <img
                  alt="search-cardboard"
                  id="cardboard-icon"
                  src={cardboard}
                ></img>
                <h2>CARDBOARD</h2>
              </button>
            </a>
            <a href="/searchmaterial/6">
              <button
                value="6"
                type="click"
                className="search-button"
                id="search-paper"
              >
                <img alt="search-paper" id="paper-icon" src={paper}></img>
                <h2>PAPER</h2>
              </button>
            </a>
          </div>
          {/* RIGHT COLUMN */}
          <div>
            <a href="/searchmaterial/7">
              <button
                value="7"
                type="click"
                className="search-button"
                id="search-electronics"
              >
                <img
                  alt="search-electronics"
                  id="electronics-icon"
                  src={electronics}
                ></img>
                <h2>ELECTRONICS</h2>
              </button>
            </a>
            <a href="/searchmaterial/11">
              <button
                value="11"
                type="click"
                className="search-button"
                id="search-batteries"
              >
                <img alt="batteries" id="batteries-icon" src={batteries}></img>
                <h2>BATTERIES</h2>
              </button>
            </a>
            <a href="/searchmaterial/8">
              <button
                value="8"
                type="click"
                className="search-button"
                id="search-appliances"
              >
                <img
                  alt="search-appliances"
                  id="appliances-icon"
                  src={appliances}
                ></img>
                <h2>APPLIANCES</h2>
              </button>
            </a>
            <a href="/searchmaterial/4">
              <button
                value="4"
                type="click"
                className="search-button"
                id="search-steel"
              >
                <img alt="search-steel" id="steel-icon" src={steel}></img>
                <h2>STEEL</h2>
              </button>
            </a>
            <a href="/searchmaterial/9">
              <button
                value="9"
                type="click"
                className="search-button"
                id="search-concrete"
              >
                <img
                  alt="search-concrete"
                  id="concrete-icon"
                  src={concrete}
                ></img>
                <h2>CONCRETE</h2>
              </button>
            </a>
            <a href="/searchmaterial/10">
              <button
                value="10"
                type="click"
                className="search-button"
                id="search-oil"
              >
                <img alt="search-oil" id="oil-icon" src={oil}></img>
                <h2>OIL</h2>
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
