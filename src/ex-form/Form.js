import {useState} from 'react'

function Form() {
    const [inputText,setInputText] = useState('')
    const [textArea,setTextArea] = useState('')
    const [radioChecked, setRadioChecked] = useState(false)
  return (
    <>
      <section id="input-text">
        <h1>文字輸入框(input-text)</h1>
        <input
          type="text"
          value={inputText}
          onChange={(e) => {
            setInputText(e.target.value)
          }}
        />
      </section>
      <section id="textArea">
        <h1>文字輸入框(textArea)</h1>
        <input
          type="text"
          value={textArea}
          onChange={(e) => {
            setTextArea(e.target.value)
          }}
        />
      </section>
      <section id="textArea">
        <h1>文字輸入框(textArea)</h1>
        <input
          type="radio"
          value={radioChecked}
          onChange={(e) => {
            setRadioChecked(e.target.checked)
          }}
        />
      </section>
    </>
  )
}

export default Form