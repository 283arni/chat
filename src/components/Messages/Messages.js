import './Messages.less';
import {sortMessages} from "../../utils";

/**
 * Компонент Messages
 * @param {array} messages массив сообщений
 * @returns {JSX.Element} возвращает блок со списком сообщений
 * @constructor
 */

const Messages = ({messages}) => {

  const sortedMessages = sortMessages(messages);

  return (
    <main className='Messages'>
      <ul>
        {sortedMessages.map(message => <li key={message.id}>{message.text}</li>)}
      </ul>
    </main>
  )
}

export default Messages;
