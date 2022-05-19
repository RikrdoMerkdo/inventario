import { IonPage,IonFooter, IonGrid, IonRow, IonCol, IonCardContent, IonCard, IonAvatar, IonLabel, IonSelect, IonButton, IonSelectOption, IonList, IonItem, IonContent, IonHeader, IonToolbar, IonTitle, IonIcon } from '@ionic/react';
import { arrowBack, personCircle, save, search } from 'ionicons/icons';
import './menu.css';

const menu: React.FC = () => {
    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <div id="header">
                        <IonAvatar>
                            <IonIcon icon={personCircle} id="iconoAv"></IonIcon>
                        </IonAvatar>
                    </div>
                </IonToolbar>
            </IonHeader>
            <IonContent>
                <IonGrid>
                    <IonRow>
                        <IonCol>
                            <IonCard id="card">
                                <IonCardContent id="itemCard">
                                    <IonIcon icon={search} id="icono"></IonIcon>
                                    <IonLabel>Consultar</IonLabel>
                                </IonCardContent>
                            </IonCard>
                        </IonCol>
                        <IonCol>
                        <IonCard id="card">
                                <IonCardContent id="itemCard">
                                    <IonIcon icon={save} id="icono"></IonIcon>
                                    <IonLabel>Guardar</IonLabel>
                                </IonCardContent>
                            </IonCard>
                        </IonCol>
                    </IonRow>
                </IonGrid>
            </IonContent>
            <IonFooter id="footer">
            © FJD SOFTWARE
            </IonFooter>
        </IonPage>
        );
    };
    
export default menu;