import { mkdir, copyFile, cp } from 'node:fs/promises';
await mkdir('dist', { recursive: true });
for (const file of ['index.html', 'styles.css', 'app.js', 'auctions.html', 'auctions.js', 'auction-store.js', 'auth.js', 'scroll-reveal.js', 'auction-backend.js', 'public-config.js', 'page-transition.js', 'page-transition.css', 'auction-categories.js', 'marketplace.html', 'binder.html', 'marketplace.js', 'marketplace.css', 'card-details.js', 'card-inventory.js', 'store-catalog.js', 'header.js', 'pokemon-collections.js', 'auction-examples.js']) await copyFile(file, `dist/${file}`);
await cp('assets', 'dist/assets', { recursive: true });
console.log('Build concluído em dist/');








