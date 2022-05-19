import { IonPage, IonInput, IonFooter, IonLabel, IonItem, IonImg } from '@ionic/react';
import './ingreso.css';

const registro: React.FC = () => {
  return (
    <IonPage>
        <div id="containerIngre">
          <div id="headerIngre">
            <img src='assets/icon/logo-conelec_movil.png'/>
          </div>
          <div id="footerIngre">
            <h2>Nombre Empresa</h2>
            <h3>Bienvenido</h3>
            <div id="itemIngre">
              <IonItem>
                <IonLabel position='floating'>Cedula Usuario</IonLabel>
                <IonInput type='number'></IonInput>
              </IonItem>
              <IonItem>
                <IonLabel position='floating'>Codigo Usuario</IonLabel>
                <IonInput type='number'></IonInput>
              </IonItem>
              <button id="btnIngresar">INGRESAR</button>
              
            </div>
          </div>
        </div>
        <IonFooter id="footer">
          <img src="assets/icon/logo_fjd.jpeg"/>
        </IonFooter>
    </IonPage>
  );
};

export default registro;
