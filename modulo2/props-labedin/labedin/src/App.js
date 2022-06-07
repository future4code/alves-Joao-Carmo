import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import CardPequeno from './components/CardPequeno/CardPequeno';
import ImagemButton from './components/ImagemButton/ImagemButton';
import minhaFoto from './img/me.jpg';
import envelope from './img/envelope-solid.svg';
import location from './img/location-dot-solid.svg';
import CardFormacao from './components/CardFormação/CardFormacao';
import CardConhecimento from './components/CardConhecimento/CardConhecimento';

function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande 
          imagem={minhaFoto} 
          nome="João Gabriel Colodetti" 
          descricao="Oi, eu sou o João. Sou aluno da Labenu e no momento estou aprendendo mais sobre o React."
        />
        
        <ImagemButton 
          imagem="https://image.flaticon.com/icons/png/512/117/117472.png" 
          texto="Ver mais"
        />
      </div>
      <div className='page-section-container'>
        <CardPequeno
          imagem={envelope}
          titulo="Email:"
          info="jgcolodetti13@hotmail.com"
        />
      </div>
      <div className='page-section-container'>
        <CardPequeno
          imagem={location}
          titulo="Endereço:"
          info="Av. Nossa Sra. de Copacabana, 8000"
        />
      </div>
      <div className='page-section-conainer'>
        <h2>Formação Acadêmica</h2>
        <CardFormacao
          imagem="https://pbs.twimg.com/profile_images/1509987210946351106/Q6C2_55b_400x400.jpg"
          titulo="Universidade Federal do Rio de Janeiro"
          curso="Engenharia de Alimentos"
          periodo="2015-2022"
        />
      </div>
      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande 
          imagem="https://educationusa.org.br/wp-content/uploads/2022/02/EducationUSA-Logo-copy.jpg" 
          nome="Educantion USA" 
          descricao="Tradutor de inglês em feira de intercâmbios, ajudando nas conversas entre estudantes brasileiros e representantes de universidades americanas." 
        />
        
        <CardGrande 
          imagem="https://lh3.googleusercontent.com/xTbcf-DwN84WO_4lA69hTemhdriMor_RvLjgoxvt8q48NIcbdj4V_N8VdkvgKlhhMyQk7w=w16383" 
          nome="Colégio Cruzeiro" 
          descricao="Professor voluntário de Matemática e Química no Projeto Ação Social que ajudava crianças no ensino fundamental, no Centro do Rio de Janeiro." 
        />
      </div>
      <div className="page-section-container">
        <h2>Conhecimentos em Tecnologia</h2>
        <CardConhecimento
          texto1="Microsoft Office"
          texto2="VBA"
          texto3="Python"
          texto4="Javascprit"
          texto5="HTML"
          texto6="CSS"
          texto7="React"
        />
      </div>
      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton 
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png" 
          texto="Facebook" 
        />        

        <ImagemButton 
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png" 
          texto="Twitter" 
        />        
      </div>
    </div>
  );
}

export default App;
