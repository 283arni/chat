import {firestore} from "./firebase";

/**
 * Функция отправляет текст сообщения в firebase, при проблеме выбрасывает ошибку в консоль
 * @param {string} id id сообщения
 * @param {string} message текст сообщения
 */
export const sendNewMessage = (id ,message) => {
    try {
        firestore.collection('messages').doc(id).set(message);
    } catch (err) {
       console.error(`Ошибка с отправкой сообщения: ${err}`)
    }
}

/**
 * Функция получает список сообщений с firebase, при поблеме выбрасыват ошибку в консоль.
 * @returns {Promise<firebase.firestore.QuerySnapshot<firebase.firestore.DocumentData>>}
 */
export const getMessages = () => {
    try {
        return firestore.collection("messages").get();
    } catch (err) {
        console.error(`Ошибка при получение сообщений: ${err}`)
    }
}
