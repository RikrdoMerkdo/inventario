import { IonPage, IonFooter, IonInput, IonLabel, IonItem } from '@ionic/react';
import './registro.css';

const registro: React.FC = () => {
  return (
    <IonPage>
        <div id="containerRegis">
          <div id="headerRegis">
            <img src='assets/icon/logo-conelec_movil.png'/>
          </div>
          <div id="footerRegis">
            <div id="itemRegis">
              <h2>Inventario Diario</h2>
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
        <IonFooter id="footer">
          <img src="assets/icon/logo_fjd.jpeg"/>
        </IonFooter>
    </IonPage>
  );
};

export default registro;
