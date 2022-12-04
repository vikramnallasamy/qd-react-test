import styled from 'styled-components';
import './App.scss';
import TestIcons from './components/TestIcons';

function App() {
  return (
        <AppContainer>
          <HeaderSection>Header</HeaderSection>
          <SideBarSection></SideBarSection>
          <ContentSection>
            <TestIcons />
          </ContentSection>
        </AppContainer>
      );
}

const HeaderSection = styled.section `
  grid-area: header;
  `
const SideBarSection = styled.section `
  grid-area: sidebar;
  max-width: 200px;
  `
const ContentSection = styled.section `
  grid-area: content;
  `
const AppContainer = styled.div `
  display: grid;
  height: 100vh;
  grid-template-columns: minmax(40px,100px) minmax(400px, auto);
  grid-template-rows: minmax(40px,80px) 9fr;
  grid-template-areas: 'header header' 'sidebar content'; 
  & > * {
    outline: 1px solid black;
    min-height: 10px;
  }
  `

export default App;
