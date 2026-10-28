# Flare Cards

Base de vitrine e loja de cartas Pokémon, em português, criada a partir do conteúdo de https://flare-card-trade.lovable.app/.

## Executar

Requer Node.js 24 ou superior. Execute `npm install` para instalar as dependências de teste.

```sh
npm run dev
```

Acesse http://127.0.0.1:5173. `npm run check` verifica a sintaxe. `npm run build` gera os arquivos estáticos em `dist/`.

## Estrutura

- `index.html`: página, navegação, avaliação e carrinho acessível.
- `styles.css`: identidade preto/vermelho, layout responsivo e movimento reduzido.
- `app.js`: catálogo inicial, busca, carrinho com localStorage e exportação de pedidos.
- `assets/`: logo, mascote e imagens públicas das cartas da referência.
- `scripts/`: servidor local e build estático.

## Conteúdo e limites

Os três produtos, preços, packs, etapas de intermediação e números institucionais foram transcritos do site indicado em 20/10/2026. Confirme valores, estoque, garantias e números antes do lançamento. Logo e mascote foram obtidos do site indicado; imagens de cartas são do TCGdex. A tipografia utiliza Google Fonts com fontes locais alternativas.

Esta é uma base de frontend. O carrinho persiste apenas neste navegador e exporta um resumo; não realiza compras, reserva estoque ou calcula frete. O formulário valida os campos e baixa um pedido de avaliação, sem enviar dados nem simular recebimento. Não foram configurados contatos fictícios.

Para operação real: integrar catálogo/estoque e pedidos a um backend, checkout com provedor de pagamento, frete e canal de recebimento das avaliações. Definir política de privacidade, termos e regras de intermediação antes de coletar dados de clientes. Não colocar segredos no JavaScript público.

## Leilões

A aba `auctions.html` inclui contagem regressiva, lances com incremento mínimo, liderança, histórico, filtros e encerramento automático na interface. Funciona como demonstração local com persistência no navegador. Os valores e prazos dos lotes são exemplos. Execute `npm test` para verificar as regras. A integração futura com usuários e banco de dados está descrita em [docs/auctions-integration.md](docs/auctions-integration.md).

Em **Entrar**, use **usuario_admin** com a senha **1234** para acessar o **administrador local** para cadastrar lotes e definir lance inicial, incremento e prazo. Crie uma **conta de usuário** para dar lances; visitantes e administradores não podem participar dos lances. A demonstração de login é exclusiva do navegador e exige senhas de teste; autenticação e autorização reais precisam ser executadas no servidor antes do lançamento.

O servidor incluído é somente para desenvolvimento local. Para publicar, hospede o conteúdo de `dist/` em uma plataforma de hospedagem estática com HTTPS.

## Supabase, Google e notificações

A integração opcional inclui Google OAuth via Supabase, funções PostgreSQL para lances, tickets privados de retirada, fila de e-mails via Resend e agendamento no servidor. A aba **Acompanhar** mostra participações, resultados e tickets; **Adicionar** é exclusiva do administrador.

Sem configuração, o modo local continua disponível. Para ativar os serviços, siga [docs/supabase-setup.md](docs/supabase-setup.md). Não basta preencher o botão Google: é necessário criar o projeto, aplicar a migração, configurar o provedor Google, o remetente de e-mail e o cron. Nenhum e-mail real foi enviado nesta implementação.

