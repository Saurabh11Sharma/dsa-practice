import { execSync } from 'node:child_process';
import { readdirSync, statSync } from 'node:fs';
import { join, extname } from 'node:path';

function findBenchmarkFiles(dir: string): string[] {
  let results: string[] = [];
  for (const file of readdirSync(dir)) {
    const fullPath = join(dir, file);
    if (statSync(fullPath).isDirectory()) {
      results = results.concat(findBenchmarkFiles(fullPath));
    } else if (extname(fullPath) === '.ts' && file.endsWith('.benchmark.ts')) {
      results.push(fullPath);
    }
  }
  return results;
}

const rootDir = join(__dirname, '..', 'src');
const files = findBenchmarkFiles(rootDir);

for (const file of files) {
  console.log(`\n=== Running ${file} ===`);
  execSync(`npx ts-node ${file}`, { stdio: 'inherit' });
}
