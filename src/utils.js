/**
 * Функция создает id для сообщения при отправки на firebase, id зависет от количества сообщений в массиве.
 * @param {number} amountMessages количество сообщений в массиве
 * @returns {string} id для нового сообщения
 */
export const createID = (amountMessages) => {
  return String(amountMessages + 1)
}

/**
 * Функция сортирует массив по id сообщений для того чтоб сообщения распологались по порядку
 * @param {array} messages - массив сообщений
 * @returns {*} - отсортированый массив
 */
export const sortMessages = (messages) => {
    return messages.sort((a,b) => {
      return +a.id - +b.id
    })
}
