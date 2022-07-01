import React, { useEffect } from "react";

import {
  BlogCard,
  CardInfo,
  ExternalLinks,
  GridContainer,
  HeaderThree,
  Hr,
  Tag,
  TagList,
  TitleContent,
  UtilityList,
  Img,
} from "./ProjectsStyles";
import {
  Section,
  SectionDivider,
  SectionTitle,
} from "../../styles/GlobalComponents";
import { projects } from "../../constants/constants";
import { collection, getDocs } from "@firebase/firestore";
import { db } from "../../firebase";

const Projects = () => {
  const [allPosts, setAllPosts] = React.useState([]);
  useEffect(async () => {
    try {
      const posts = await getDocs(collection(db, "posts"));

      const allpost = [];
      posts.forEach((doc) => {
        allpost.push(doc.data());
      });

      setAllPosts(allpost);

      console.log(allPosts);
    } catch (err) {
      console.log(err);
      console.log("postssds");
    }
  }, []);
  return (
    <Section noPadding id="projects">
      <SectionDivider />
      <SectionTitle main>Our Classes</SectionTitle>
      <GridContainer>
        {allPosts.map(({ imgUrl, title, description, tags }) => (
          <BlogCard key={title}>
            <img src={imgUrl} style={{ width: "100%" }} />
            <TitleContent>
              <HeaderThree title>{title}</HeaderThree>
              <Hr />{" "}
            </TitleContent>
            <CardInfo>{description}</CardInfo>
            <div>
              {/* <TitleContent>
            stack
          </TitleContent>    */}
              <TagList>{tags}</TagList>
            </div>
            {/* <UtilityList>
          <ExternalLinks href={visit}>
              code
          </ExternalLinks>
        </UtilityList> */}
          </BlogCard>
        ))}
      </GridContainer>
    </Section>
  );
};

export default Projects;
