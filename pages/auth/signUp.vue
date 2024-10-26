<template>
  <NuxtLayout name="auth-layout">
    <div>
      <h1 class="text-2xl font-bold">Créez votre compte</h1>
      <p class="text-gray-500">Inscrivez-vous pour accéder à l'application</p>
    </div>
    <UForm :schema="schema" :state="state" class="space-y-2" @submit="onSubmit">
      <UFormGroup label="Prénom" name="firstName">
        <UInput
          v-model="state.firstName"
          placeholder="john"
          icon="i-heroicons-user"
        />
      </UFormGroup>
      <UFormGroup label="Nom" name="lastName">
        <UInput
          v-model="state.lastName"
          placeholder="doe"
          icon="i-heroicons-user"
        />
      </UFormGroup>
      <UFormGroup label="Adresse e-mail" name="email">
        <UInput
          v-model="state.email"
          placeholder="john.doe@exemple.com"
          icon="i-heroicons-envelope"
        />
      </UFormGroup>
      <UFormGroup label="Mot de passe" name="password">
        <UInput
          v-model="state.password"
          type="password"
          placeholder="•••••••••••••"
          icon="i-heroicons-lock-closed"
        />
      </UFormGroup>
      <UButton type="submit" block>S'inscrire</UButton>
    </UForm>

    <template #footer>
      <p class="text-gray-500">
        Vous avez déjà un compte ?
        <UButton to="/auth/signIn" variant="link">Connectez-vous</UButton>
      </p>
    </template>
  </NuxtLayout>
</template>

<script lang="ts" setup>
import { z } from "zod";
import type { FormSubmitEvent } from "#ui/types";

useHead({
  title: "Se connecter",
});

const schema = z.object({
  firstName: z
    .string({
      required_error: "Le prénom est requis",
    }),
  lastName: z
    .string({
      required_error: "Le nom est requis",
    }),
  email: z
    .string({
      required_error: "L'adresse e-mail est requise",
    })
    .email("L'adresse e-mail n'est pas valide"),
  password: z
    .string({
      required_error: "Le mot de passe est requis",
    })
    .min(8, "Le mot de passe doit contenir au moins 8 caractères"),
});

type Schema = z.output<typeof schema>;

const state = reactive({
  email: undefined,
  password: undefined,
});

const { signUp } = useAuth();
async function onSubmit(event: FormSubmitEvent<Schema>) {
  await signUp('Credentials', event.data);
}
</script>

<style></style>
