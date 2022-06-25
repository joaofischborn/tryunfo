import React from 'react';
import Form from './components/Form';
import Card from './components/Card';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      name: '',
      desc: '',
      attr1: 0,
      attr2: 0,
      attr3: 0,
      thumbnail: '',
      classCard: '',
      superTrunfo: false,
    };
  }

    handleChange = (event) => {
      this.setState({ [event.target.name]:
         event.target.type === 'checkbox' ? event.target.checked : event.target.value });
    }

    render() {
      const { name,
        desc,
        attr1,
        attr2,
        attr3,
        thumbnail,
        classCard,
        superTrunfo,
      } = this.state;
      return (
        <div>
          <h1>Tryunfo</h1>
          <Form
            cardName={ name }
            cardDescription={ desc }
            cardAttr1={ attr1 }
            cardAttr2={ attr2 }
            cardAttr3={ attr3 }
            cardImage={ thumbnail }
            cardRare={ classCard }
            cardTrunfo={ superTrunfo }
            onInputChange={ this.handleChange }
          />
          <Card
            cardName={ name }
            cardDescription={ desc }
            cardAttr1={ attr1 }
            cardAttr2={ attr2 }
            cardAttr3={ attr3 }
            cardImage={ thumbnail }
            cardRare={ classCard }
            cardTrunfo={ superTrunfo }
          />
        </div>
      );
    }
}
export default App;
