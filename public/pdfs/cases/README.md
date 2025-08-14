---
layout: default
title: O Título Desta Página
---
# Cases de Estudo do Leandro Ciccarelli

Este diretório contém os cases de estudo do Leandro Ciccarelli em diferentes idiomas:

## Comunica.In
- `Case_Comunica_In_PT.pdf` - Case study em Português
- `Case_Comunica_In_EN.pdf` - Case study em Inglês  
- `Case_Comunica_In_ES.pdf` - Case study em Espanhol
- `Case_Comunica_In_FR.pdf` - Case study em Francês

## Vertown
- `Case_Vertown_PT.pdf` - Case study em Português
- `Case_Vertown_EN.pdf` - Case study em Inglês
- `Case_Vertown_ES.pdf` - Case study em Espanhol
- `Case_Vertown_FR.pdf` - Case study em Francês

## Isvor
- `Case_Isvor_PT.pdf` - Case study em Português
- `Case_Isvor_EN.pdf` - Case study em Inglês
- `Case_Isvor_ES.pdf` - Case study em Espanhol
- `Case_Isvor_FR.pdf` - Case study em Francês

## Instruções

Para adicionar os PDFs reais:

1. Substitua os arquivos placeholder neste diretório pelos PDFs reais
2. Mantenha os nomes dos arquivos exatamente como especificados acima
3. Os downloads serão automáticos baseados no idioma selecionado pelo usuário

## Estrutura de Nomes

O sistema de download usa a seguinte convenção:
- `Case_{PROJETO}_{IDIOMA}.pdf`
- Onde {PROJETO} pode ser: Comunica_In, Vertown, Isvor
- Onde {IDIOMA} pode ser: PT, EN, ES, FR

## Funcionalidades Implementadas

### Página de Projetos
- Cada card de projeto tem um botão "Baixar Case" que baixa o PDF no idioma correto
- Sistema inteligente de fallback para português caso um idioma específico não esteja disponível

### Página Individual do Case Comunica.In
- Botão de download no hero da página
- Download específico para o case Comunica.In baseado no idioma selecionado

### Verificação de Arquivos
- O sistema verifica se o arquivo existe antes de tentar o download
- Fallback automático para português se o idioma específico não existir
- Mensagem de erro amigável se nenhum arquivo for encontrado