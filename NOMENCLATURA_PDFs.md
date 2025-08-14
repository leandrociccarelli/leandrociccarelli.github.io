---
layout: default
title: O Título Desta Página
---
# Nomenclatura Exata dos Arquivos PDF

## Localização
Todos os arquivos devem estar na pasta: `/public/pdfs/`

## Nomes Exatos dos Arquivos

Os arquivos PDF devem ter **exatamente** estes nomes:

- **Português**: `CV_Leandro_Ciccarelli_PT.pdf`
- **Inglês**: `CV_Leandro_Ciccarelli_EN.pdf`
- **Espanhol**: `CV_Leandro_Ciccarelli_ES.pdf`
- **Francês**: `CV_Leandro_Ciccarelli_FR.pdf`

## Estrutura de Pastas Final

```
public/
└── pdfs/
    ├── CV_Leandro_Ciccarelli_PT.pdf  ← Currículo em Português
    ├── CV_Leandro_Ciccarelli_EN.pdf  ← Resume em Inglês
    ├── CV_Leandro_Ciccarelli_ES.pdf  ← Currículum em Espanhol
    └── CV_Leandro_Ciccarelli_FR.pdf  ← CV em Francês
```

## ⚠️ IMPORTANTE

- **Não altere** os nomes dos arquivos
- **Não use** espaços ou caracteres especiais
- **Mantenha** exatamente os códigos de idioma: PT, EN, ES, FR
- **Use** extensão `.pdf` em minúsculas
- Os **underscores (_)** são obrigatórios

## Como Funciona

1. Usuário seleciona idioma português → Baixa `CV_Leandro_Ciccarelli_PT.pdf`
2. Usuário seleciona idioma inglês → Baixa `CV_Leandro_Ciccarelli_EN.pdf`
3. Usuário seleciona idioma espanhol → Baixa `CV_Leandro_Ciccarelli_ES.pdf`
4. Usuário seleciona idioma francês → Baixa `CV_Leandro_Ciccarelli_FR.pdf`

## Fallback
Se um arquivo não existir, o sistema automaticamente baixará o arquivo em português como fallback.