export function CaseStudyDetail() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <section className="pt-2 pb-8">
        <div className="max-w-5xl mx-auto px-8">
          <div className="mb-4">
            <div className="text-xs uppercase tracking-widest text-muted-foreground mb-4">
              Case Study · Comunica.In · 2023–2024
            </div>
            <div className="editorial-divider-short"></div>
          </div>
          
          <h1 className="text-4xl lg:text-6xl font-light leading-none tracking-tight mb-4 text-foreground max-w-4xl">
            Liderando a Transformação do Design na Comunica.In
          </h1>
          
          {/* Tags */}
          <div className="flex flex-wrap gap-6 text-xs uppercase tracking-widest text-muted-foreground">
            <span>Liderança</span>
            <span>Design System</span>
            <span>Estratégia de UX</span>
          </div>
        </div>
      </section>

      <div className="editorial-divider"></div>

      {/* Summary */}
      <section className="pt-2 pb-8">
        <div className="max-w-5xl mx-auto px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            <div>
              <div className="text-xs uppercase tracking-widest text-muted-foreground mb-4">
                01 · O Problema
              </div>
              <div className="editorial-divider-short"></div>
              <p className="text-foreground leading-relaxed">
                Falta de processos estruturados, inconsistências visuais significativas 
                e baixa maturidade organizacional na área de UX/UI.
              </p>
            </div>
            
            <div>
              <div className="text-xs uppercase tracking-widest text-muted-foreground mb-4">
                02 · A Solução
              </div>
              <div className="editorial-divider-short"></div>
              <p className="text-foreground leading-relaxed">
                Criação de um Design System robusto, implementação de workflows 
                colaborativos e estabelecimento de métricas de sucesso.
              </p>
            </div>
            
            <div>
              <div className="text-xs uppercase tracking-widest text-muted-foreground mb-4">
                03 · Resultados
              </div>
              <div className="editorial-divider-short"></div>
              <p className="text-foreground leading-relaxed">
                Redução de até 56% nos chamados de suporte e aumento para 93% 
                na satisfação do usuário.
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="editorial-divider"></div>

      {/* Main Content */}
      <section className="pt-2 pb-8">
        <div className="max-w-4xl mx-auto px-8">
          <div className="space-y-20">
            
            <div>
              <div className="text-xs uppercase tracking-widest text-muted-foreground mb-6">
                Contexto & Desafio
              </div>
              <h3 className="text-2xl font-light mb-8 text-foreground">
                O Problema ou Desafio
              </h3>
              <div className="space-y-6 text-lg leading-relaxed">
                <p className="text-foreground">
                  Quando assumi a liderança da área de Design na Comunica.In, encontrei um cenário 
                  comum em muitas startups: uma equipe talentosa, mas operando sem processos 
                  estruturados, com inconsistências visuais significativas e baixa maturidade 
                  organizacional na área de UX/UI.
                </p>
                <p className="text-muted-foreground">
                  Os principais desafios identificados incluíam alta taxa de retrabalho, 
                  dificuldades de colaboração entre design e desenvolvimento, e métricas de 
                  satisfação do usuário abaixo do esperado para uma plataforma de comunicação empresarial.
                </p>
              </div>
            </div>

            <div className="bg-muted p-12 text-center text-muted-foreground italic">
              [Imagem do componente KPI Card antes da implementação]
            </div>

            <div>
              <div className="text-xs uppercase tracking-widest text-muted-foreground mb-6">
                Estratégia & Abordagem
              </div>
              <h3 className="text-2xl font-light mb-8 text-foreground">
                A Hipótese
              </h3>
              
              <div className="border-l-2 border-foreground pl-8 mb-8">
                <p className="text-xl font-light italic text-foreground leading-relaxed">
                  "Se implementarmos um Design System robusto e estabelecermos rituais de 
                  colaboração claros, poderemos reduzir significativamente o retrabalho 
                  e melhorar a experiência do usuário."
                </p>
              </div>
              
              <p className="text-lg leading-relaxed text-muted-foreground">
                Nossa hipótese central era que a falta de consistência e processos estava 
                impactando diretamente na qualidade da experiência do usuário e na eficiência 
                da equipe de desenvolvimento.
              </p>
            </div>

            <div>
              <div className="text-xs uppercase tracking-widest text-muted-foreground mb-6">
                Implementação
              </div>
              <h3 className="text-2xl font-light mb-8 text-foreground">
                O Processo de Design
              </h3>
              <div className="space-y-6 text-lg leading-relaxed">
                <p className="text-foreground">
                  Implementamos uma metodologia estruturada em três fases principais:
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 my-12">
                  <div>
                    <div className="text-xs uppercase tracking-widest text-muted-foreground mb-2">
                      Fase 01
                    </div>
                    <h4 className="text-lg font-medium mb-4 text-foreground">
                      Auditoria e Descoberta
                    </h4>
                    <p className="text-muted-foreground">
                      Mapeamento completo dos componentes existentes e identificação de inconsistências
                    </p>
                  </div>
                  
                  <div>
                    <div className="text-xs uppercase tracking-widest text-muted-foreground mb-2">
                      Fase 02
                    </div>
                    <h4 className="text-lg font-medium mb-4 text-foreground">
                      Construção do Design System
                    </h4>
                    <p className="text-muted-foreground">
                      Criação de tokens de design, componentes reutilizáveis e documentação técnica
                    </p>
                  </div>
                  
                  <div>
                    <div className="text-xs uppercase tracking-widest text-muted-foreground mb-2">
                      Fase 03
                    </div>
                    <h4 className="text-lg font-medium mb-4 text-foreground">
                      Implementação e Rituais
                    </h4>
                    <p className="text-muted-foreground">
                      Estabelecimento de workflows de colaboração e métricas de sucesso
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-muted p-12 text-center text-muted-foreground italic">
              [Gráfico mostrando o aumento da satisfação de 80% para 93%]
            </div>

            <div>
              <div className="text-xs uppercase tracking-widest text-muted-foreground mb-6">
                Impacto & Métricas
              </div>
              <h3 className="text-2xl font-light mb-8 text-foreground">
                Resultados e Impacto
              </h3>
              
              <p className="text-lg leading-relaxed text-foreground mb-12">
                Os resultados superaram nossas expectativas iniciais:
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div className="text-center">
                  <div className="text-6xl font-light mb-4 text-foreground">93%</div>
                  <div className="text-xs uppercase tracking-widest text-muted-foreground">
                    Satisfação do usuário
                  </div>
                  <p className="text-muted-foreground mt-2">
                    Aumento de 13% em relação aos 80% anteriores
                  </p>
                </div>
                
                <div className="text-center">
                  <div className="text-6xl font-light mb-4 text-foreground">56%</div>
                  <div className="text-xs uppercase tracking-widest text-muted-foreground">
                    Redução em chamados
                  </div>
                  <p className="text-muted-foreground mt-2">
                    Diminuição significativa no suporte técnico
                  </p>
                </div>
              </div>
            </div>

            <div>
              <div className="text-xs uppercase tracking-widest text-muted-foreground mb-6">
                Reflexões
              </div>
              <h3 className="text-2xl font-light mb-8 text-foreground">
                Aprendizados e Próximos Passos
              </h3>
              <p className="text-lg leading-relaxed text-foreground">
                Esta experiência reforçou a importância de investir em processos e ferramentas 
                que facilitem a colaboração entre equipes. O Design System não foi apenas uma 
                solução técnica, mas uma transformação cultural que elevou a maturidade de 
                design em toda a organização.
              </p>
            </div>

          </div>
        </div>
      </section>

      <div className="editorial-divider"></div>
    </div>
  );
}