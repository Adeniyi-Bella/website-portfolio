import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { readFileSync, writeFileSync } from 'fs';
import path from 'path';

const modifyAssetPaths = {
  name: 'modify-asset-paths',
  writeBundle(opts, bundle) {
    for (const fileName of Object.keys(bundle)) {
      const chunk = bundle[fileName];

      // Handle JS chunks
      if (chunk.type === 'chunk') {
        let code = chunk.code;

        // Add a dot in front of asset paths in JS
        code = code.replace(/(\/assets\/)/g, './assets/');
        writeFileSync(path.join(opts.dir, fileName), code);
      }
    }

    // Handling paths in the generated HTML
    const htmlPath = path.resolve('dist/index.html');
    let htmlContent = readFileSync(htmlPath, 'utf-8');
    htmlContent = htmlContent.replace(/(href=|src=)["']\/assets\//g, '$1"./assets/');
    htmlContent = htmlContent.replace(/(href=|src=)["']\/logo.svg/g, '$1"./logo.svg');
    writeFileSync(htmlPath, htmlContent);
  }
};

// Vite configuration
export default defineConfig({
  plugins: [react(), modifyAssetPaths],
});
