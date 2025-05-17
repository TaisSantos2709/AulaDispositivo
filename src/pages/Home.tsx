import { IonButton, IonContent, IonHeader, IonInput, IonPage, IonText, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Home.css';
import { useState } from 'react';

const Home: React.FC = () => {

  const [digite, setDigite] = useState(0);
  const [resultado, setResultado] = useState <number | null> (null);

  const CalcularArea = () => {
    setResultado(3.14 * digite * digite);

  }



  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Curso de Dispositivos Móveis</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Blank</IonTitle>
          </IonToolbar>
        </IonHeader>

        <h1>Criando um Aplicativo IONIC</h1>

        <IonInput onIonChange={(e) => setDigite(parseFloat(e.detail.value!))} label="Digite o valor do raio" placeholder="Digite um numero"></IonInput>
        <IonButton onClick={CalcularArea} >Calcular</IonButton>
        <IonText color="primary">
        <h1>O valor da área é: {resultado}</h1>
      </IonText>
      </IonContent>
    </IonPage>
  );
};

export default Home;
