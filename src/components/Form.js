import React from 'react';
import PropTypes from 'prop-types';

class Form extends React.Component {
  render() {
    // criando as props
    const {
      cardName, cardDescription, cardAttr1,
      cardAttr2, cardAttr3, cardImage, cardRare,
      cardTrunfo, isSaveButtonDisabled,
      onInputChange, onSaveButtonClick, hasTrunfo } = this.props;

    return (

      <form className="form">
        <h1 className="formTitle">Card Generator</h1>
        {/* // card name input 🎴 */}
        <label htmlFor="name">
          Title
          <input
            value={ cardName }
            onChange={ onInputChange }
            className="input"
            data-testid="name-input"
            name="cardName"
            id="name"
            type="text"
            placeholder="City, Council, Country"
            required
          />
        </label>
        {/* // card image url input 🎴 */}
        <label htmlFor="image">
          Image
          <input
            value={ cardImage }
            onChange={ onInputChange }
            className="input"
            data-testid="image-input"
            name="cardImage"
            id="image"
            type="text"
            placeholder="Image URL"
            required
          />
        </label>
        {/* // cards description input 🎴 */}
        <label htmlFor="description">
          Place description
          <textarea
            value={ cardDescription }
            onChange={ onInputChange }
            className="input"
            data-testid="description-input"
            name="cardDescription"
            id="description"
            type="text"
            placeholder="what's interesting in this place?"
            required
          />
        </label>
        {/* // cards attr1 input 🎴 */}
        <p className="att"> Attributes </p>
        <label htmlFor="attr1">
          Architecture:
          <input
            value={ cardAttr1 }
            onChange={ onInputChange }
            className="input"
            data-testid="attr1-input"
            name="cardAttr1"
            id="attr1"
            type="number"
            min={ 0 }
            max={ 90 }
          />
        </label>
        {/* // cards attr2 input 🎴 */}
        <label htmlFor="attr2">
          Landscape:
          <input
            value={ cardAttr2 }
            onChange={ onInputChange }
            className="input"
            data-testid="attr2-input"
            name="cardAttr2"
            id="attr2"
            type="number"
            min={ 0 }
            max={ 90 }
          />
        </label>
        {/* // cards attr3 input 🎴 */}
        <label htmlFor="attr3">
          Food:
          <input
            value={ cardAttr3 }
            onChange={ onInputChange }
            className="input"
            data-testid="attr3-input"
            name="cardAttr3"
            id="attr3"
            type="number"
            min={ 0 }
            max={ 90 }
          />
        </label>
        {/* // card rareness url input 🎴 */}
        {/* placeholder for select https://reactgo.com/react-select-tag-placeholder/#:~:text=To%20set%20a%20placeholder%20to,the%20disabled%20and%20hidden%20attributes.&text=In%20the%20above%20code%2C%20we,placeholder%20for%20the%20select%20tag. */}
        <label className="rarenessSelect" htmlFor="rareness">
          Rareness
          <select
            value={ cardRare }
            onChange={ onInputChange }
            className="input"
            data-testid="rare-input"
            name="cardRare"
            id="rareness"
          >
            <option value="Normal">Normal</option>
            <option value="Rare">Raro</option>
            <option value="Legendary">Legendary</option>
          </select>
        </label>
        {/* // card trunfo url input 🎴 */}
        {
          hasTrunfo === false ? (
            <label className="trumpCheck" htmlFor="trunfo">
              Top Trump
              <input
                checked={ cardTrunfo }
                onChange={ onInputChange }
                className="input checkbox"
                data-testid="trunfo-input"
                name="cardTrunfo"
                id="trunfo"
                type="checkbox"
              />
              <span className="checkmark"> </span>
              <span className="iconTrump">👻</span>
            </label>
          )
            : <p className="pTrunf"> ⚠️ You already have a Top Trump in your deck.</p>
        }
        <button
          disabled={ isSaveButtonDisabled }
          onClick={ onSaveButtonClick }
          type="button"
          data-testid="save-button"
        >
          Save

        </button>
      </form>
    );
  }
}

Form.propTypes = {
  cardName: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
  hasTrunfo: PropTypes.bool.isRequired,
  isSaveButtonDisabled: PropTypes.bool.isRequired,
  onInputChange: PropTypes.func.isRequired,
  onSaveButtonClick: PropTypes.func.isRequired,
};

export default Form;
