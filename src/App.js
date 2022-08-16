import React from 'react';
import Form from './components/Form';
import Card from './components/Card';
import './app.css';
// import Filters from './components/Filters';

const initialState = {
  cardName: '',
  cardDescription: '',
  cardAttr1: '0',
  cardAttr2: '0',
  cardAttr3: '0',
  cardImage: '',
  cardRare: 'Normal',
  cardTrunfo: false,
  // hasTrunfo: false,
  isSaveButtonDisabled: true,
};

class App extends React.Component {
  state = {
    cardName: '',
    cardDescription: '',
    cardAttr1: '0',
    cardAttr2: '0',
    cardAttr3: '0',
    cardImage: '',
    cardRare: 'Normal',
    cardTrunfo: false,
    hasTrunfo: false,
    isSaveButtonDisabled: true,
    cardList: [],
    filteredCards: [],
  };

  // validação botão. Só deve ativar se todos campos cumprirem as seguintes regras
  validateSaveBtn = () => {
    const { cardName, cardDescription, cardAttr1,
      cardAttr2, cardAttr3, cardImage, cardRare } = this.state;
    const minNum = 0;
    const maxNum = 90;
    const maxTotal = 210;
    const parsed1 = parseInt(cardAttr1, 10);
    const parsed2 = parseInt(cardAttr2, 10);
    const parsed3 = parseInt(cardAttr3, 10);
    // console.log(parsed1);
    if (cardName === '' || cardDescription === ''
      || cardImage === '' || cardRare === ''
      || cardAttr1 === '' || cardAttr2 === '' || cardAttr3 === ''
    ) {
      this.setState({ isSaveButtonDisabled: true });
    } else if (parsed1 > maxNum || parsed1 < minNum) {
      this.setState({ isSaveButtonDisabled: true });
    } else if (parsed2 > maxNum || parsed2 < minNum) {
      this.setState({ isSaveButtonDisabled: true });
    } else if (parsed3 > maxNum || parsed3 < minNum) {
      this.setState({ isSaveButtonDisabled: true });
    } else if (parsed1 + parsed2 + parsed3 > maxTotal) {
      this.setState({ isSaveButtonDisabled: true });
    } else this.setState({ isSaveButtonDisabled: false });
  }

  // atualiza estados on change
  handleChange = ({ target: { name, type, checked, value } }) => {
    this.setState({ [name]: type === 'checkbox' ? checked : value },
      this.validateSaveBtn);
  };

  // função para limpar estado -> inputs && copia a lista original de cartas para a 'filtrada' >> aqui pois tem que ser antes de ela ser de fato filtrada
  clearInputs = () => {
    const { cardList } = this.state;
    this.setState({ filteredCards: cardList });
    this.setState(initialState);
  }

   // função para filtrar a lista
   handleFilter = (event) => {
     const { cardList } = this.state;
     if (event.target.type === 'text') { // filtrar por nome
       const filteredByName = cardList.filter(
         (card) => card.cardName.includes(event.target.value),
       );
       this.setState({ filteredCards: filteredByName });
     } else if (event.target.type === 'select') { // filtrar por select
       const filteredBySelect = cardList.filter(
         (card) => card.cardRare === event.target.value,
       );
       this.setState({ filteredCards: filteredBySelect });
     }
   }

  // função que coloca os elementos no array
  onSaveButtonClick = () => {
    const { cardName, cardDescription, cardAttr1,
      cardAttr2, cardAttr3, cardImage, cardRare, cardTrunfo } = this.state;
    const obj = {
      cardName,
      cardDescription,
      cardImage,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardRare,
      cardTrunfo,
    };
    if (cardTrunfo) this.setState({ hasTrunfo: true });
    this.setState((prevState) => ({ cardList: [...prevState.cardList, obj] }),
      this.clearInputs); // atualiza estado e chama a função que limpa os inputs logo após
  }

  // pesquisa: https://stackoverflow.com/questions/36326612/how-to-delete-an-item-from-state-array
 onDeleteButtonClick = (obj) => {
   const { cardList } = this.state;
   const newList = cardList;
   newList.splice(cardList.indexOf(obj), 1);
   this.setState({ cardList: newList });
   if (obj.cardTrunfo) { // lógica para SE cardTrunfo é true, muda o hasTrunfo para false
     this.setState({ hasTrunfo: false });
   }
 }

 render() {
   const { filteredCards } = this.state;
   return (
     <div>
       <header>
         <div>
           <img
             alt="calvitoria"
             src="https://user-images.githubusercontent.com/95686401/168625937-d46c7d4f-c24c-40dd-93f8-f2d9e634d404.png"
           />
         </div>
         <div className="textHeader">
           <h4> Travel Trump </h4>
           <p>
             {' '}
             create your own deck of
             {' '}
             <span className="underlinedPink">Top Trump</span>
             {' '}
             cards ✨
             {' '}
           </p>
         </div>
       </header>
       <div className="app">
         <section className="formContainer">
           <Form
             { ...this.state }
             onInputChange={ this.handleChange }
             onSaveButtonClick={ this.onSaveButtonClick }
           />
         </section>
         <section className="cardContainer">
           <Card { ...this.state } />
         </section>
         <section className="createdCards">
           {
             filteredCards.flatMap((obj) => (
               <>
                 <div className="cardDeck">
                   <Card { ...obj } />
                 </div>
                 <button
                   className="deleteBtn"
                   type="button"
                   data-testid="delete-button"
                   onClick={ () => this.onDeleteButtonClick(obj) }
                 >
                   Delete

                 </button>

               </>
             ))
           }
         </section>
         {/* <Filters handleFilter={ this.handleFilter } /> */}
       </div>
     </div>
   );
 }
}

export default App;
