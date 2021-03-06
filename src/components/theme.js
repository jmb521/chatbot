import React from 'react'
import { ThemeProvider } from 'styled-components';
import ChatBot from 'react-simple-chatbot';

const theme = {
  background: '#f5f8fb',
  fontFamily: 'Arial',
  headerBgColor: '#7F377C',
  headerFontColor: '#fff',
  headerFontSize: '15px',
  botBubbleColor: '#7F377C',
  botFontColor: '#fff',
  userBubbleColor: '#F9969F',
  userFontColor: '#4a4a4a',
  textAlign: "center",
}

const hcstyle = {
  background: "#7f377c",
  width: "350px",
  height: "56px",

  overflow: "hidden",
  }

const HC = (props) => {


    return(
      <div style={hcstyle}>
        <h2>{props.headerTitle}</h2>
      </div>
    )

}



const MainTheme = (props) => {

  return(
  <div>
    <ThemeProvider theme={theme}>
      <ChatBot steps={props.steps} handleEnd={props.handleEnd} headerComponent={<HC headerTitle={"My Test"} />}/>
    </ThemeProvider>

  </div>
  )
}

export default MainTheme
