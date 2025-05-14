import Benchmark from 'benchmark';
import { twoSum } from './twoSum';
import {
  generateLargeTestCase,
  generateRandomTestCase,
} from '../../../../utils/testUtils';

function generateCases() {
  const sizes = [100, 1000, 10000, 100000];
  const cases: { name: string; nums: number[]; target: number }[] = [];

  for (const size of sizes) {
    // Sequential
    const tcSeq = generateLargeTestCase(size);
    cases.push({
      name: `Sequential (n=${size})`,
      nums: tcSeq.nums,
      target: tcSeq.target,
    });

    // Reverse
    const numsRev = Array.from({ length: size }, (_, i) => size - i);
    cases.push({
      name: `Reverse (n=${size})`,
      nums: numsRev,
      target: numsRev[0] + numsRev[1],
    });

    // Random
    const tcRand = generateRandomTestCase(size);
    cases.push({
      name: `Random (n=${size})`,
      nums: tcRand.nums,
      target: tcRand.target,
    });
  }

  // Edge: all zeros
  cases.push({
    name: 'All Zeros (n=10000)',
    nums: Array(10000).fill(0),
    target: 0,
  });

  // Edge: all same number
  cases.push({
    name: 'All Same (n=10000)',
    nums: Array(10000).fill(7),
    target: 14,
  });

  // Edge: negatives
  const numsNeg = Array.from({ length: 10000 }, (_, i) => -i);
  cases.push({
    name: 'All Negative (n=10000)',
    nums: numsNeg,
    target: numsNeg[0] + numsNeg[1],
  });

  return cases;
}

const cases = generateCases();
const results: {
  name: string;
  hz: number;
  msPerOp: number;
  rme: number;
  samples: number;
}[] = [];

(async () => {
  console.log('Benchmarking twoSum on various input patterns and sizes...\n');
  console.log(
    'Case'.padEnd(30) +
      ' | ' +
      'ops/sec'.padStart(10) +
      ' | ' +
      'ms/op'.padStart(10) +
      ' | ' +
      '±RME'.padStart(8) +
      ' | ' +
      'samples'.padStart(8),
  );
  console.log('-'.repeat(75));
  for (const input of cases) {
    await new Promise<void>((resolve) => {
      const suite = new Benchmark.Suite();
      suite
        .add(input.name, function () {
          twoSum(input.nums, input.target);
        })
        .on('cycle', function (event: Benchmark.Event) {
          const bench = event.target;
          const hz = bench.hz !== undefined ? bench.hz : 0;
          const msPerOp = hz > 0 ? 1000 / hz : 0;
          const rme =
            bench.stats && bench.stats.rme !== undefined ? bench.stats.rme : 0;
          const samples =
            bench.stats && bench.stats.sample ? bench.stats.sample.length : 0;
          results.push({
            name: input.name,
            hz,
            msPerOp,
            rme,
            samples,
          });
          console.log(
            `${input.name.padEnd(30)} | ${hz.toFixed(2).padStart(10)} | ${msPerOp.toFixed(4).padStart(10)} | ±${rme.toFixed(2).padStart(6)}% | ${samples.toString().padStart(8)}`,
          );
        })
        .on('complete', function () {
          resolve();
        })
        .run({ async: true });
    });
  }

  // Print summary
  console.log('\nSummary:');
  const sorted = [...results].sort((a, b) => a.msPerOp - b.msPerOp);
  console.log(
    'Fastest: ',
    sorted[0].name,
    `(${sorted[0].msPerOp.toFixed(4)} ms/op)`,
  );
  console.log(
    'Slowest: ',
    sorted[sorted.length - 1].name,
    `(${sorted[sorted.length - 1].msPerOp.toFixed(4)} ms/op)`,
  );
})();
