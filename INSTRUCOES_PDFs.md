---
layout: default
title: O Título Desta Página
---
# Instruções para Adição dos PDFs do Currículo

## Localização dos Arquivos

Os arquivos PDF devem ser colocados na pasta `/public/pdfs/` com os seguintes nomes exatos:

- `CV_Leandro_Ciccarelli_PT.pdf` - Currículo em Português
- `CV_Leandro_Ciccarelli_EN.pdf` - Resume em Inglês  
- `CV_Leandro_Ciccarelli_ES.pdf` - Currículum em Espanhol
- `CV_Leandro_Ciccarelli_FR.pdf` - CV em Francês

## Como Funciona o Sistema

1. **Detecção Automática de Idioma**: O sistema detecta automaticamente o idioma selecionado pelo usuário
2. **Download Correspondente**: Baixa o PDF no idioma correto
3. **Fallback Inteligente**: Se um PDF não existir, usa o português como padrão
4. **Nomes de Arquivo**: Os arquivos baixados mantêm o nome original com o idioma

## Estrutura de Pastas Necessária

```
public/
└── pdfs/
    ├── CV_Leandro_Ciccarelli_PT.pdf
    ├── CV_Leandro_Ciccarelli_EN.pdf
    ├── CV_Leandro_Ciccarelli_ES.pdf
    └── CV_Leandro_Ciccarelli_FR.pdf
```

## Implementação Técnica

- **Verificação de Existência**: O sistema verifica se o arquivo existe antes de baixar
- **Download Automático**: Usa `createElement('a')` para trigger do download
- **Tratamento de Erros**: Inclui fallbacks e mensagens de erro apropriadas
- **Nome do Arquivo**: Preserva a convenção de nomenclatura para facilitar identificação

## Benefícios

- ✅ **Experiência Multilíngue**: Cada usuário recebe o currículo no seu idioma preferido
- ✅ **Fallback Inteligente**: Sistema robusto com fallbacks automáticos
- ✅ **Fácil Manutenção**: Basta substituir os arquivos PDF quando necessário
- ✅ **Compatibilidade**: Funciona em todos os navegadores modernos