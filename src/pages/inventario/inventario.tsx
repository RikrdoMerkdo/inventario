import { IonPage, IonInput, IonLabel, IonSelect, IonButton, IonSelectOption, IonList, IonItem, IonContent, IonHeader, IonToolbar, IonTitle } from '@ionic/react';
import './inventario.css';

const inventario: React.FC = () => {
    return (
        <IonPage>
            <IonHeader>
                <div id="barra">
                <IonToolbar color="rgb(0, 52, 150)">
                    <p>Inventario Diario</p>
                </IonToolbar>
                </div>
            </IonHeader>
            <IonContent>
                <div id="containerInve">
                    <div id="itemsInve">
                        <IonList>
                            <IonItem>
                                <IonLabel position='floating'>Material</IonLabel>
                                <IonSelect value="" okText="Ok" cancelText="Cancelar" placeholder='Seleccione...'>
                                <IonSelectOption value="">1040 - CAJA EMBUTIDA PARA MACROMEDIDOR</IonSelectOption>
                                <IonSelectOption value="">7250 - CABLE DE ALUMINIO TREBOL 3x20/0 + 1/0</IonSelectOption>
                                </IonSelect>
                            </IonItem>
                        </IonList>
                        <IonItem>
                            <IonLabel>Consumo Dia</IonLabel>
                            <IonInput type='number'></IonInput>
                        </IonItem>
                        <IonButton expand='block'>GUARDAR</IonButton>
                    </div>
                    <div id="lista">
                        <IonList>
                            <IonItem>
                                <div id="itemLista">
                                    <div id="itemNombre">
                                        <IonLabel>1040 - CAJA EMBUTIDA PARA MACROMEDIDOR</IonLabel>
                                    </div>
                                    <div id="itemDetalle">
                                        <div id="descrip">
                                            <IonLabel>Inicial</IonLabel>
                                            <IonLabel>150</IonLabel>
                                        </div>
                                        <div id="descrip">
                                            <IonLabel>Entregadas</IonLabel>
                                            <IonLabel>20</IonLabel>
                                        </div>
                                        <div id="descrip">
                                            <IonLabel>Devueltas</IonLabel>
                                            <IonLabel>0</IonLabel>
                                        </div>
                                        <div id="descrip">
                                            <IonLabel>Gastada</IonLabel>
                                            <IonLabel>5</IonLabel>
                                        </div>
                                        <div id="descrip">
                                            <IonLabel>Saldo</IonLabel>
                                            <IonLabel>165</IonLabel>
                                        </div>
                                        <div>
                                            <IonButton color="danger">Eliminar</IonButton>
                                        </div>
                                    </div>
                                </div>
                            </IonItem>
                            <IonItem>
                                <div id="itemLista">
                                    <div id="itemNombre">
                                        <IonLabel>1040 - CAJA EMBUTIDA PARA MACROMEDIDOR</IonLabel>
                                    </div>
                                    <div id="itemDetalle">
                                        <div id="descrip">
                                            <IonLabel>Inicial</IonLabel>
                                            <IonLabel>150</IonLabel>
                                        </div>
                                        <div id="descrip">
                                            <IonLabel>Entregadas</IonLabel>
                                            <IonLabel>20</IonLabel>
                                        </div>
                                        <div id="descrip">
                                            <IonLabel>Devueltas</IonLabel>
                                            <IonLabel>0</IonLabel>
                                        </div>
                                        <div id="descrip">
                                            <IonLabel>Gastada</IonLabel>
                                            <IonLabel>5</IonLabel>
                                        </div>
                                        <div id="descrip">
                                            <IonLabel>Saldo</IonLabel>
                                            <IonLabel>165</IonLabel>
                                        </div>
                                        <div>
                                            <IonButton color="danger">Eliminar</IonButton>
                                        </div>
                                    </div>
                                </div>
                            </IonItem>
                        </IonList>
                    </div>
                </div>
            </IonContent>
        </IonPage>
        );
    };
    
export default inventario;