import {useState} from 'react';
import Header from './components/header/Header';
import Inputs from './components/inputs/Inputs';
import MainList from './components/lists/MainList';
import { InputContext, HeaderContext, ListsContext } from './context/context';
import './App.css';

function App() {
  const [income, setIncome] = useState(0);
  const [expense, setExpense] = useState(0);
  const [option, setOption] = useState('+');
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState(0);
  const [incomeArray, setIncomeArray] = useState([]);
  const [expenseList, setExpenseList] = useState([]);

  function handleSubmit(e) {
    e.preventDefault();

    if (amount === 0) return;

    if (option === '+') {
      setIncome(income + parseFloat(amount))
      setIncomeArray([...incomeArray, { description, amount }])
    } else {
      setExpense(expense + parseFloat(amount));
      setExpenseList([...expenseList, { description, amount }])
    }
    reset()
  }

  function handleDescription(value) {
    setDescription(value);
  }

  function reset() {
    setAmount(0);
    setDescription('')
  }

  function handleOption(value) {
    setOption(value)
  }

  function handleAmount(value) {
    setAmount(value)
  }

  const inputContextValue = {
    option,
    description,
    amount,
    handleOption,
    handleDescription,
    handleAmount,
    handleSubmit
  }

  const listsContextValue = {
    incomeArray,
    expenseList
  };

  const headerContextValue = {};

  return (
    <div className="App">
      <HeaderContext.Provider value={headerContextValue}>
        <Header />
      </HeaderContext.Provider>

      <InputContext.Provider value={inputContextValue}>
        <Inputs />
      </InputContext.Provider>

      <ListsContext.Provider value={listsContextValue}>
        <MainList />
      </ListsContext.Provider>
    </div>
  );
}

export default App;
