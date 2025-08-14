import profileImage from 'figma:asset/8388c9854e3ac5a210a8a0a8438fc9a91bc3195e.png';

export function HeroSection() {
  return (
    <section className="pt-2 pb-8">
      <div className="max-w-7xl mx-auto px-8">
        {/* Editorial header with date-like styling */}
        <div className="mb-4">
          <div className="text-xs uppercase tracking-widest text-muted-foreground mb-4">
            Product Design Leader & UX Strategist
          </div>
          <div className="editorial-divider-short"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
          <div className="lg:col-span-7">
            <h1 className="text-5xl lg:text-7xl font-light leading-none tracking-tight mb-4 text-foreground">
              Leandro
              <br />
              Ciccarelli
            </h1>
            
            <div className="max-w-2xl">
              <p className="text-lg leading-relaxed text-foreground mb-8">
                Como Product Design Leader e Estrategista de UX com mais de 15 anos de experiência, 
                minha carreira é movida por uma dupla paixão: a busca pela sustentabilidade do negócio 
                e a profunda compreensão das motivações humanas.
              </p>
              <p className="text-lg leading-relaxed text-muted-foreground">
                Acredito que o design é uma ferramenta poderosa para conectar estratégia empresarial 
                com necessidades reais dos usuários, criando soluções que geram valor tanto para as 
                pessoas quanto para as organizações.
              </p>
            </div>
          </div>
          
          <div className="lg:col-span-5">
            <div className="aspect-[3/4] w-full max-w-md ml-auto bg-muted overflow-hidden">
              <img
                src={profileImage}
                alt="Leandro Ciccarelli"
                className="w-full h-full object-cover object-center grayscale"
              />
            </div>
            
            <div className="text-xs uppercase tracking-widest text-muted-foreground mt-4 text-right">
              Leandro Ciccarelli, 2025
            </div>
          </div>
        </div>
      </div>
      
      <div className="editorial-divider"></div>
    </section>
  );
}