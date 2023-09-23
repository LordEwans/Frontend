<template>
  <IonPage>
    <IonContent class="card-container">
      <IonCard>
        <IonRow>
          <IonCol size-md="3" size="12" class="ion-padding ion-blue-bkg">
            <img
              src="assets/img/1613795.png"
              alt="Ionic logo"
            />
          </IonCol>
          <IonCol size-md="9" size="12" class="welcome">
            <IonCardHeader>
              <IonCardTitle> Welcome Back Heir </IonCardTitle>
            </IonCardHeader>
            <IonCardContent>
              <IonButton router-link="/login"> Sign in </IonButton>
            </IonCardContent>
          </IonCol>
        </IonRow>
      </IonCard>
    </IonContent>
  </IonPage>
</template>

<script setup lang="ts"></script>
