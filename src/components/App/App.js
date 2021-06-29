import './App.less';
import {useState, useEffect} from "react";
import Messages from "../Messages/Messages";
import TextField from "../TextField/TextField";
import {getMessages} from "../../api";

/**
 * Компонент App
 * @returns {JSX.Element}
 * @constructor
 */
function App() {
  const [messages, setMessages] = useState([])

  /**
   * Функция для получения массива сообщений с сервера, изменения элементов с помощью метода map, обновляет список сообщений
   */
  const fetchFirestore = async () => {

    const response = await getMessages();
    const messages = response.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }))

    setMessages(messages)
  }

  useEffect( () => {
    fetchFirestore()
  }, []);

  return (
    <div className="App">
      <Messages
        messages={messages}
      />
      <TextField
        amountMessage={messages.length}
        fetchFirestore={fetchFirestore}
      />
    </div>
  );
}

export default App;
