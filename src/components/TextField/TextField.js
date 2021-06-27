import './TextField.less'

const TextField = () => {
  return (
    <section className="TextField">
      <div className="TextField__wrapper">
        <label htmlFor="message">Введите текст</label>
        <input type="text" id='message'/>
        <button>Отправить</button>
      </div>
    </section>
  )
}

export default TextField;