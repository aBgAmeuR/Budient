<template>
  <NuxtLayout name="auth-layout">
    <div>
      <h1 class="text-2xl font-bold">Content de vous revoir</h1>
      <p class="text-gray-500">Connectez-vous pour accéder à l'application</p>
    </div>
    <UForm :schema="schema" :state="state" class="space-y-4" @submit="onSubmit">
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
      <UButton type="submit" block>Se connecter</UButton>
    </UForm>

    <template #footer>
      <p class="text-gray-500">
        Vous n'avez pas de compte ?
        <UButton to="/auth/signUp" variant="link">Inscrivez-vous</UButton>
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

const { signIn } = useAuth();
async function onSubmit(event: FormSubmitEvent<Schema>) {
  await signIn(event.data);
}
</script>

<style></style>
