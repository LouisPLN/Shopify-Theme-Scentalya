# Workflow Shopify : Travailler localement sur un thème avec VSCode et GitHub

## 1. Récupérer le code du thème Shopify actif

1. **Installer Shopify CLI**

   - Suivez la documentation officielle pour installer Shopify CLI selon votre système d'exploitation :  
     [Documentation Shopify CLI](https://shopify.dev/docs/cli).
   - Assurez-vous que **Node.js**, **Git** et **VSCode** sont installés sur votre machine.

2. **Connexion à votre boutique Shopify**

   - Ouvrez un terminal dans VSCode.
   - Connectez-vous à Shopify avec la commande :
     ```bash
     shopify login
     ```
     Cela ouvrira une page web où vous pourrez vous connecter avec votre compte admin Shopify.

3. **Listez les thèmes disponibles**

   - Utilisez la commande suivante pour afficher tous les thèmes de votre boutique :
     ```bash
     shopify theme list
     ```
     Vous obtiendrez une liste avec les **IDs** des thèmes disponibles. Identifiez celui que vous souhaitez modifier.

4. **Téléchargez le thème actif**
   - Téléchargez les fichiers du thème sur votre machine locale :
     ```bash
     shopify theme pull --theme-id=[ID_DU_THEME]
     ```
     Remplacez `[ID_DU_THEME]` par l'ID de votre thème actif.
   - Les fichiers du thème seront téléchargés dans un dossier local.

---

## 2. Modifier le thème localement dans VSCode

1. **Ouvrir les fichiers dans VSCode**

   - Ouvrez le dossier du thème dans VSCode pour modifier les fichiers **Liquid**, **CSS**, **JavaScript**, etc.

2. **Tester les modifications en local**
   - Shopify CLI vous permet de prévisualiser vos modifications sans affecter le site en production :
     ```bash
     shopify theme serve
     ```
   - Cela génère une URL temporaire où vous pouvez voir et tester vos modifications.

---
