import React from 'react';
import propTypes from 'prop-types';

class Form extends React.Component {
  render() {
    const { cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
      // hasTrunfo,
      isSaveButtonDisabled,
      onInputChange,
      onSaveButtonClick } = this.props;
    return (
      <form>
        <div>
          <label htmlFor="name">
            Card Name:
            <input
              data-testid="name-input"
              type="text"
              id="name"
              name="name"
              value={ cardName }
              onChange={ onInputChange }
            />
          </label>
        </div>

        <div>
          <label htmlFor="description">
            Description:
            <input
              type="textarea"
              data-testid="description-input"
              id="description"
              name="desc"
              onChange={ onInputChange }
              value={ cardDescription }
            />
          </label>
        </div>

        <div>
          <label htmlFor="number1">
            Number:
            <input
              data-testid="attr1-input"
              type="number"
              id="number1"
              name="attr1"
              value={ cardAttr1 }
              onChange={ onInputChange }
            />
          </label>
        </div>

        <div>
          <label htmlFor="number2">
            Number:
            <input
              data-testid="attr2-input"
              type="number"
              id="number2"
              name="attr2"
              value={ cardAttr2 }
              onChange={ onInputChange }
            />
          </label>
        </div>

        <div>
          <label htmlFor="number3">
            Number:
            <input
              data-testid="attr3-input"
              type="number"
              id="number3"
              name="attr3"
              value={ cardAttr3 }
              onChange={ onInputChange }
            />
          </label>
        </div>

        <div>
          <label htmlFor="image">
            Image URL:
            <input
              data-testid="image-input"
              type="text"
              id="image"
              name="thumbnail"
              value={ cardImage }
              onChange={ onInputChange }
            />
          </label>
        </div>

        <div>
          <label htmlFor="select">
            Select class:
            <select
              data-testid="rare-input"
              value={ cardRare }
              onChange={ onInputChange }
              id="select"
              name="classCard"
            >
              <option>normal</option>
              <option>raro</option>
              <option>muito raro</option>
            </select>
          </label>
        </div>

        <div>
          <label htmlFor="check">
            Super Trunfo
            <input
              data-testid="trunfo-input"
              type="checkbox"
              id="check"
              name="superTrunfo"
              checked={ cardTrunfo }
              onChange={ onInputChange }
            />
          </label>
        </div>

        <div>
          <button
            data-testid="save-button"
            type="submit"
            disabled={ isSaveButtonDisabled }
            onClick={ onSaveButtonClick }
          >
            Salvar
          </button>
        </div>
      </form>
    );
  }
}

Form.propTypes = {
  cardName: propTypes.string.isRequired,
  cardDescription: propTypes.string.isRequired,
  cardAttr1: propTypes.string.isRequired,
  cardAttr2: propTypes.string.isRequired,
  cardAttr3: propTypes.string.isRequired,
  cardImage: propTypes.string.isRequired,
  cardRare: propTypes.string.isRequired,
  cardTrunfo: propTypes.bool.isRequired,
  // hasTrunfo: propTypes.bool.isRequired,
  isSaveButtonDisabled: propTypes.bool.isRequired,
  onInputChange: propTypes.func.isRequired,
  onSaveButtonClick: propTypes.func.isRequired,
};

export default Form;
