<template>
  <IonPage>
    <IonContent class="w-full h-full">
      <div class="flex items-center justify-center h-full">
        <IonCard class="max-w-[600px]">
          <IonRow>
            <IonCol
              size-md="3"
              size="12"
              class="bg-blue-800 ion-padding flex flex-col justify-center items-center max-sm:max-h-[200px]"
            >
              <img
                src="https://images.prismic.io/ionicframeworkcom/ac68e1d9-9887-4e5a-9820-9290d06638de_ionic+logo+white+on+blue.png"
                alt="Ionic logo"
                loading="lazy"
              />
            </IonCol>
            <IonCol size-md="9" size="12" class="welcome">
              <IonCardHeader>
                <IonCardTitle class="text-center font-bold text-3xl">Welcome back!</IonCardTitle>
                <IonCardSubtitle class="text-center font-semibold uppercase text-xs"
                  >We're so excited seeing you again!</IonCardSubtitle
                >
              </IonCardHeader>

              <IonCardContent>
                <label class="uppercase font-bold text-xs mt-2"
                  >Email or username
                  <span class="text-red-700">*</span>
                </label>
                <input type="email" class="input input-ghost w-full mb-4 h-10 focus:outline-none" />
                <label class="uppercase font-bold text-xs mt-2"
                  >Password
                  <span class="text-red-700">*</span>
                </label>
                <input type="password" class="input input-ghost w-full mb-1 h-10 focus:outline-none" />
                <a href="http://" class="text-xs font-medium">Forgot your password?</a>
                <IonButton
                  type="submit"
                  router-link="/signin"
                  class="w-full h-11 mt-4 mb2 capitalize"
                >
                  Log in
                </IonButton>
                <span class="text-xs">
                  New here? <a href="/register" class="font-medium">Register</a>
                </span>
              </IonCardContent>
            </IonCol>
          </IonRow>
        </IonCard>
      </div>
    </IonContent>
  </IonPage>
</template>

<style>
.clicked-button {
  @apply loading loading-spinner;
}
.input-ghost:focus {
  --tw-bg-opacity: 0.05;
}
</style>
