import './TextField.less'
import {sendNewMessage} from "../../api";
import {createID} from "../../utils";


/**
 *
 *
 * @param {number} amountMessage - количество сообщений
 * @param {Function} fetchFirestore - функция для обновления списка сообщений
 * @returns {JSX.Element}
 * @constructor
 */
const TextField = ({amountMessage, fetchFirestore}) => {

  /**
   * При клике на кнопку "Отправить" обработчик получает значения из input
   * @param e - event объект событий
   */
  const handleSendMessage = (e) => {
    e.preventDefault();

    const message = e.target.input.value;
    const idMessage = createID(amountMessage);

    if(message.length === 0) {
      return;
    }

    sendNewMessage(idMessage, {text: message});
    fetchFirestore();
  }

  return (
    <section className="TextField">
      <div className="TextField__wrapper">
        <form onSubmit={(e) => handleSendMessage(e)}>
          <label htmlFor="message">Введите текст</label>
          <input type="text" id='message' name='input'/>
          <button>Отправить</button>
        </form>
      </div>
    </section>
  )
}

export default TextField;
