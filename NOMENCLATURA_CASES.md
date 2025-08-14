---
layout: default
title: O Título Desta Página
---
# Nomenclatura Exata dos Cases de Estudo

## Localização
Todos os arquivos devem estar na pasta: `/public/pdfs/cases/`

## Nomes Exatos dos Arquivos

### COMUNICA.IN
- **Português**: `Case_Comunica_In_PT.pdf`
- **Inglês**: `Case_Comunica_In_EN.pdf`
- **Espanhol**: `Case_Comunica_In_ES.pdf`
- **Francês**: `Case_Comunica_In_FR.pdf`

### VERTOWN
- **Português**: `Case_Vertown_PT.pdf`
- **Inglês**: `Case_Vertown_EN.pdf`
- **Espanhol**: `Case_Vertown_ES.pdf`
- **Francês**: `Case_Vertown_FR.pdf`

### ISVOR
- **Português**: `Case_Isvor_PT.pdf`
- **Inglês**: `Case_Isvor_EN.pdf`
- **Espanhol**: `Case_Isvor_ES.pdf`
- **Francês**: `Case_Isvor_FR.pdf`

## Estrutura de Pastas Final

```
public/
└── pdfs/
    ├── CV_Leandro_Ciccarelli_PT.pdf     ← Currículo
    ├── CV_Leandro_Ciccarelli_EN.pdf     ← Resume
    ├── CV_Leandro_Ciccarelli_ES.pdf     ← Currículum
    ├── CV_Leandro_Ciccarelli_FR.pdf     ← CV
    └── cases/
        ├── Case_Comunica_In_PT.pdf      ← Case Comunica.In Português
        ├── Case_Comunica_In_EN.pdf      ← Case Comunica.In English
        ├── Case_Comunica_In_ES.pdf      ← Case Comunica.In Español
        ├── Case_Comunica_In_FR.pdf      ← Case Comunica.In Français
        ├── Case_Vertown_PT.pdf          ← Case Vertown Português
        ├── Case_Vertown_EN.pdf          ← Case Vertown English
        ├── Case_Vertown_ES.pdf          ← Case Vertown Español
        ├── Case_Vertown_FR.pdf          ← Case Vertown Français
        ├── Case_Isvor_PT.pdf            ← Case Isvor Português
        ├── Case_Isvor_EN.pdf            ← Case Isvor English
        ├── Case_Isvor_ES.pdf            ← Case Isvor Español
        └── Case_Isvor_FR.pdf            ← Case Isvor Français
```

## ⚠️ IMPORTANTE

- **Não altere** os nomes dos arquivos
- **Não use** espaços adicionais ou caracteres especiais
- **Mantenha** exatamente os códigos de idioma: PT, EN, ES, FR
- **Use** extensão `.pdf` em minúsculas
- Os **underscores (_)** são obrigatórios
- **Atenção**: Comunica.In usa "Comunica_In" (com underscore no lugar do ponto)

## Como Funciona

### Na Página de Projetos:
1. Usuário clica em "Baixar Case" no card Comunica.In → Baixa `Case_Comunica_In_PT.pdf` (se idioma for português)
2. Usuário clica em "Baixar Case" no card Vertown → Baixa `Case_Vertown_EN.pdf` (se idioma for inglês)
3. Usuário clica em "Baixar Case" no card Isvor → Baixa `Case_Isvor_ES.pdf` (se idioma for espanhol)

### Na Página do Case Comunica.In:
- Botão "Baixar Case" no hero da página baixa especificamente o `Case_Comunica_In_{IDIOMA}.pdf`

## Fallback Inteligente
Se um arquivo não existir, o sistema automaticamente baixará o arquivo em português como fallback.

## Verificação de Status
O sistema verifica se cada arquivo existe antes de tentar o download e exibe mensagens de erro apropriadas se necessário.