import React from "react";
import "./style/about.css";
import perfil from "../../assets/images/perfil.jpeg";

const About = (props) => {
  return (
    <div className="aboutContainer">
      <h1>Sobre Min</h1>
      <div>
        <div className="about">
          <div className="imgContainer">
            <img src={perfil} className="imgProfile" />
          </div>
          <div className="aboutTxt">
            <p>
              Hello Word! Eu Sou o João, Desenvolvedor Front-end Junior,
              atualmente moro em Santana de parnaiba-SP e tenho 22 anos.
            </p>
            <p>
              Sou um amante da tecnologia, e na TI vi uma forma de me aproximar
              dela. Inicialmente eu fui para a Infra, mas não era bem o que eu
              queria, dai resolvi começar a estudar programação, e desde então
              não parei, montei uma boa base de JavaScript e fui aprendendo
              sobre tecnologias que o cercam, React, React Native, Node.js,
              FireBase etc.
            </p>
            <p>
              Meu primeiro trabalho profissional na area foi uma "one page", que
              fiz como freelancer, mas espero fazer outros logo mais. Estou
              muito empolgado para aprender tecnologias novas e desenvolver
              ainda mais minha habilidades, por isso estou sempre procurando
              novas oportunidades.
            </p>
            <p>
              Sou estudante de Inglês, consigo ler artigos em inglês, mas por
              enquanto eu não consigo me expressar em inglês. Tambem Estudo
              Japonês(12月で日本語試験を受けます).
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

{
  /* 
             
      
              <p>
              Sou um amante da tecnologia, e na TI uma forma de me aproximar
              dela, Inicialmente eu fui para a Infra, mas não era oque eu
              realmente queria, dai resolvi começar a estudar programação, e
              desde então não parei, desenvolvi uma boa base de JavaScript e fui
              aprendendo sobre tecnologias que o cercam, React, ReactNative,
              FireBase etc.
              <br />
              Estou Muito empolgado Para aprender tecnologias novas e
              desenvolver ainda mais minha abilidades, por isso estou sempre
              aprocura de novas oportunidades, meu unico trabalho proficional na
              area foi uma "one page", que fiz como freelancer, mas espero fazer
              outros logo mais.
              <br />
            </p> */
}
