import React from 'react';
import PropTypes from 'prop-types';

class Card extends React.Component {
  render() {
    // criando as props
    const {
      cardName, cardDescription, cardAttr1,
      cardAttr2, cardAttr3, cardImage, cardRare,
      cardTrunfo } = this.props;

    return (
      <div className="card">
        <div className="innerCard">
          <div className="elementCard">
            <img src={ cardImage } alt={ cardName } data-testid="image-card" />
          </div>
          <div className="elementCard">
            <h1 data-testid="name-card" className="name-card">{cardName}</h1>
          </div>
          <section className="atributes">
            <div className="elementCard">
              <p
                data-testid="description-card"
                className="descricao"
              >
                { cardDescription }

              </p>
            </div>
            <div className="elementCard">
              <p className="attributesP" data-testid="attr1-card">
                Architecture:
                { `  ${cardAttr1}` }
              </p>
              <p className="attributesP" data-testid="attr2-card">
                Landscape:
                { `  ${cardAttr2}` }
              </p>
              <p className="attributesP" data-testid="attr3-card">
                Food:
                { `  ${cardAttr3}` }
              </p>
            </div>
            <div className="elementCard">
              <p data-testid="rare-card">{ cardRare }</p>
            </div>
            <div className="elementCard">
              {
                cardTrunfo === true && <h4 data-testid="trunfo-card"> Top Trump </h4>
              }
            </div>

          </section>
        </div>
      </div>
    );
  }
}

Card.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
};
export default Card;
