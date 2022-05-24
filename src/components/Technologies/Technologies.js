import React from 'react';
import { DiFirebase, DiFirefox, DiReact, DiZend } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
<Section id='tech'>
  <SectionDivider/>
  <br/>
  <SectionTitle>Experience</SectionTitle>
  <SectionText>
    Worked with varieties of technologies
  </SectionText>
  <List>
    <ListItem>
      <DiFirefox size= "3rem" />
    
    <ListContainer>
      <ListTitle>
        Trading
      </ListTitle>
      <ListParagraph>
        Experience with<br/> 
        Trading
      </ListParagraph>
    </ListContainer>
    </ListItem>
    <ListItem>
      <DiFirefox size= "3rem" />
    
    <ListContainer>
      <ListTitle>
        Mentorship
      </ListTitle>
      <ListParagraph>
        Experienced<br/> 
        in training
      </ListParagraph>
    </ListContainer>
    </ListItem>
    <ListItem>
      <DiFirefox size= "3rem" />
    
    <ListContainer>
      <ListTitle>
        Marketing
      </ListTitle>
      <ListParagraph>
        Experience<br/> 
        understanding marketing strategy
      </ListParagraph>
    </ListContainer>
    </ListItem>
  </List>
</Section>
);

export default Technologies;
