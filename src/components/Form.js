import React from 'react';

class Form extends React.Component {
  render() {
    return (
      <form>
        <label htmlFor="name">
          <input type="text" data-testid="name-input" name="name" />
        </label>
        <label htmlFor="description">
          <input type="textarea" data-testid="description-input" name="description" />
        </label>
        <label htmlFor="number1">
          <input type="number" data-testid="attr1-input" name="number1" />
        </label>
        <label htmlFor="number2">
          <input type="number" data-testid="attr2-input" name="number2" />
        </label>
        <label htmlFor="number3">
          <input type="number" data-testid="attr3-input" name="number3" />
        </label>
        <label htmlFor="image">
          <input type="text" data-testid="image-input" name="image" />
        </label>
        <select data-testid="rare-input">
          <option>normal</option>
          <option>raro</option>
          <option>muito raro</option>
        </select>
        <label htmlFor="check">
          <input type="checkbox" data-testid="trunfo-input" name="check" />
        </label>
        <button type="submit" data-testid="save-button">Salvar</button>
      </form>
    );
  }
}
export default Form;
