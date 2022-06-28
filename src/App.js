import React from 'react';
import Form from './components/Form';
import Card from './components/Card';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      cardName: '',
      cardDescription: '',
      cardAttr1: '',
      cardAttr2: '',
      cardAttr3: '',
      cardImage: '',
      cardRare: 'normal',
      cardTrunfo: false,
      isSaveButtonDisabled: true,
    };
  }

    handleChange = (event) => {
      this.setState({ [event.target.name]:
         event.target.type === 'checkbox'
           ? event.target.checked
           : event.target.value,
      }, () => this.validateFormButton());
    }

    validateFormButton = () => {
      const {
        cardName,
        cardDescription,
        cardAttr1,
        cardAttr2,
        cardAttr3,
        cardImage,
        cardRare,
      } = this.state;
      const valueMax = 90;
      const valueMin = 0;
      const sumTotal = 210;
      const sum = Number(cardAttr1) + Number(cardAttr2) + Number(cardAttr3);
      if ((cardName.length
        && cardDescription.length
        && cardImage.length
        && cardRare.length !== 0)
        && Number(cardAttr1) >= valueMin
        && Number(cardAttr2) >= valueMin
        && Number(cardAttr3) >= valueMin
        && Number(cardAttr1) <= valueMax
        && Number(cardAttr2) <= valueMax
        && Number(cardAttr3) <= valueMax
        && (sum <= sumTotal)) {
        this.setState({
          isSaveButtonDisabled: false,
        });
      } else {
        this.setState({
          isSaveButtonDisabled: true,
        });
      }
    }

    render() {
      const { cardName,
        cardDescription,
        cardAttr1,
        cardAttr2,
        cardAttr3,
        cardImage,
        cardRare,
        cardTrunfo,
        isSaveButtonDisabled,
      } = this.state;
      return (
        <div>
          <h1>Tryunfo</h1>
          <Form
            cardName={ cardName }
            cardDescription={ cardDescription }
            cardAttr1={ cardAttr1 }
            cardAttr2={ cardAttr2 }
            cardAttr3={ cardAttr3 }
            cardImage={ cardImage }
            cardRare={ cardRare }
            cardTrunfo={ cardTrunfo }
            onInputChange={ this.handleChange }
            isSaveButtonDisabled={ isSaveButtonDisabled }
          />
          <Card
            cardName={ cardName }
            cardDescription={ cardDescription }
            cardAttr1={ cardAttr1 }
            cardAttr2={ cardAttr2 }
            cardAttr3={ cardAttr3 }
            cardImage={ cardImage }
            cardRare={ cardRare }
            cardTrunfo={ cardTrunfo }
          />
        </div>
      );
    }
}
export default App;
