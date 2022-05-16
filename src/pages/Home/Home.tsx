import { IonPage, IonInput, IonLabel, IonItem, IonImg } from '@ionic/react';
import './Home.css';

const Home: React.FC = () => {
  return (
    <IonPage>
        <div id="container">
          <div id="header">
            <img src='././public/assets/icon/icon.png'/>
          </div>
          <div id="footer">
            <p>Inventario Diario</p>
            <div id="item">
              <IonItem>
                <IonLabel position='floating'>Servidor</IonLabel>
                <IonInput></IonInput>
              </IonItem>
              <IonItem>
                <IonLabel position='floating'>Dominio</IonLabel>
                <IonInput></IonInput>
              </IonItem>
              <IonItem>
                <IonLabel position='floating'>Cedula Usuario</IonLabel>
                <IonInput type='number'></IonInput>
              </IonItem>
              <IonItem>
                <IonLabel position='floating'>Codigo Usuario</IonLabel>
                <IonInput type='number'></IonInput>
              </IonItem>
              <button id="btnValidar">VALIDAR</button>
            </div>
          </div>
        </div>
    </IonPage>
  );
};

export default Home;
