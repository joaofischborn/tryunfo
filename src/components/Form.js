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
      hasTrunfo,
      isSaveButtonDisabled,
      onInputChange,
      onSaveButtonClick } = this.props;
    return (
      <form>
        <div>
          <label htmlFor="cardName">
            Card Name:
            <input
              data-testid="name-input"
              type="text"
              name="cardName"
              value={ cardName }
              onChange={ onInputChange }
            />
          </label>
        </div>

        <div>
          <label htmlFor="cardDescription">
            Description:
            <input
              type="textarea"
              data-testid="description-input"
              name="cardDescription"
              onChange={ onInputChange }
              value={ cardDescription }
            />
          </label>
        </div>

        <div>
          <label htmlFor="cardAttr1">
            Number:
            <input
              data-testid="attr1-input"
              type="number"
              name="cardAttr1"
              min="0"
              max="90"
              value={ cardAttr1 }
              onChange={ onInputChange }
            />
          </label>
        </div>

        <div>
          <label htmlFor="cardAttr2">
            Number:
            <input
              data-testid="attr2-input"
              type="number"
              name="cardAttr2"
              min="0"
              max="90"
              value={ cardAttr2 }
              onChange={ onInputChange }
            />
          </label>
        </div>

        <div>
          <label htmlFor="cardAttr3">
            Number:
            <input
              data-testid="attr3-input"
              type="number"
              name="cardAttr3"
              min="0"
              max="90"
              value={ cardAttr3 }
              onChange={ onInputChange }
            />
          </label>
        </div>

        <div>
          <label htmlFor="cardImage">
            Image URL:
            <input
              data-testid="image-input"
              type="text"
              name="cardImage"
              value={ cardImage }
              onChange={ onInputChange }
            />
          </label>
        </div>

        <div>
          <label htmlFor="cardRare">
            Select class:
            <select
              data-testid="rare-input"
              name="cardRare"
              value={ cardRare }
              onChange={ onInputChange }
            >
              <option value="normal">Normal</option>
              <option value="raro">Raro</option>
              <option value="muito raro">Muito Raro</option>
            </select>
          </label>
        </div>

        <div>
          <label htmlFor="check">
            Super Trunfo
            { hasTrunfo !== true ? (
              <input
                data-testid="trunfo-input"
                type="checkbox"
                name="cardTrunfo"
                checked={ cardTrunfo }
                onChange={ onInputChange }
              />
            ) : <span>Você já tem um Super Trunfo em seu baralho</span>}
          </label>
        </div>

        <div>
          <button
            data-testid="save-button"
            type="submit"
            name="isSaveButtonDisabled"
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
  hasTrunfo: propTypes.bool.isRequired,
  isSaveButtonDisabled: propTypes.bool.isRequired,
  onInputChange: propTypes.func.isRequired,
  onSaveButtonClick: propTypes.func.isRequired,
};

export default Form;
