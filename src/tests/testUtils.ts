import chalk from 'chalk';

export interface TestCase {
  nums: number[];
  target: number;
  expected: number[];
  description?: string;
}

export function generateLargeTestCase(size: number): TestCase {
  const nums = Array.from({ length: size }, (_, i) => i + 1);
  const target = nums[size - 2] + nums[size - 1];
  return {
    nums,
    target,
    expected: [size - 2, size - 1],
    description: `Large array, size=${size}, last two elements`,
  };
}

export function generateRandomTestCase(size: number): TestCase {
  const nums = Array.from({ length: size }, () =>
    Math.floor(Math.random() * 100000),
  );
  const i = Math.floor(Math.random() * size);
  let j = Math.floor(Math.random() * size);
  while (j === i) j = Math.floor(Math.random() * size);
  const target = nums[i] + nums[j];
  return {
    nums,
    target,
    expected: i < j ? [i, j] : [j, i],
    description: `Random array, size=${size}, indices [${i},${j}]`,
  };
}

// Unicode box-drawing characters for a beautiful table
const BOX = {
  tl: '╔',
  tr: '╗',
  bl: '╚',
  br: '╝',
  h: '═',
  v: '║',
  t: '╦',
  l: '╠',
  r: '╣',
  b: '╩',
  c: '╬',
};

export const COL_WIDTHS = {
  idx: 10,
  desc: 50,
  time: 12,
  mem: 12,
  status: 8,
};

export function fit(str: string, width: number) {
  return str.padEnd(width, ' ');
}

export function fitR(str: string, width: number) {
  return str.padStart(width, ' ');
}

const rainbowColors = [
  '#FF5555',
  '#FFB86C',
  '#F1FA8C',
  '#50FA7B',
  '#8BE9FD',
  '#6272A4',
  '#BD93F9',
  '#FF79C6',
];
function rainbow(text: string) {
  return text
    .split('')
    .map((ch, i) => chalk.hex(rainbowColors[i % rainbowColors.length])(ch))
    .join('');
}

// Helper to build a row of box drawing characters (add 2 for padding spaces)
function makeBoxRow(left: string, mid: string, right: string, fill: string) {
  return (
    left +
    fill.repeat(COL_WIDTHS.idx + 2) +
    mid +
    fill.repeat(COL_WIDTHS.desc + 2) +
    mid +
    fill.repeat(COL_WIDTHS.time + 2) +
    mid +
    fill.repeat(COL_WIDTHS.mem + 2) +
    mid +
    fill.repeat(COL_WIDTHS.status + 2) +
    right
  );
}

/**
 * Prints the table header with a fancy rainbow title and box drawing.
 */
export function printTableHeader(
  testName: string,
  idealTime: number,
  idealMem: number,
) {
  console.log(
    '\n' +
      chalk.bold.bgBlueBright.white(`\n  🚀 ${rainbow(testName)} Results  \n`),
  );
  console.log(
    chalk.gray(
      `  ${chalk.cyan('⏱ Ideal time:')} <= ${chalk.yellow(idealTime + ' ms')}   ${chalk.cyan('💾 Ideal memory:')} <= ${chalk.yellow(idealMem + ' KB')}`,
    ),
  );
  // Top border
  console.log(chalk.magentaBright(makeBoxRow(BOX.tl, BOX.t, BOX.tr, BOX.h)));

  // Header row (with padding)
  const header =
    `${BOX.v} ` +
    chalk.bold.cyan(fit('Test case', COL_WIDTHS.idx)) +
    ' ' +
    `${BOX.v} ` +
    chalk.bold.cyan(fit('Description', COL_WIDTHS.desc)) +
    ' ' +
    `${BOX.v} ` +
    chalk.bold.cyan(fit('Time (ms)', COL_WIDTHS.time)) +
    ' ' +
    `${BOX.v} ` +
    chalk.bold.cyan(fit('Memory (KB)', COL_WIDTHS.mem)) +
    ' ' +
    `${BOX.v} ` +
    chalk.bold.cyan(fit('Status', COL_WIDTHS.status)) +
    ` ${BOX.v}`; // <-- No extra space after last column before border
  console.log(header);

  // Header separator
  console.log(chalk.magentaBright(makeBoxRow(BOX.l, BOX.c, BOX.r, BOX.h)));

  return makeBoxRow(BOX.bl, BOX.b, BOX.br, BOX.h);
}

/**
 * Prints a single test result row with zebra striping and color.
 * Optionally animates the row if delayMs > 0.
 */
export async function printTableRow(
  index: number,
  description: string,
  timeMs: number,
  memKb: number,
  passed: boolean,
  timeStatus: boolean,
  memStatus: boolean,
  delayMs = 0,
) {
  const timeStatusIcon = timeStatus
    ? chalk.greenBright('✅')
    : chalk.redBright('❌');
  const memStatusIcon = memStatus
    ? chalk.greenBright('✅')
    : chalk.redBright('❌');
  const passText = passed
    ? chalk.bold.bgGreen.black('✔ PASSED')
    : chalk.bold.bgRed.white('✖ FAILED');
  const desc = description
    ? fit(description, COL_WIDTHS.desc)
    : fit('', COL_WIDTHS.desc);

  const idxStr = chalk.yellowBright.bold(
    fit((index + 1).toString(), COL_WIDTHS.idx),
  );
  const zebra = index % 2 === 0 ? chalk.bgBlackBright : chalk.bgGray;

  // Row (with padding and right border, no extra space after last column)
  const row =
    `${BOX.v} ` +
    idxStr +
    ' ' +
    `${BOX.v} ` +
    chalk.white(desc) +
    ' ' +
    `${BOX.v} ` +
    fitR(timeMs.toFixed(3), COL_WIDTHS.time - 2) +
    timeStatusIcon +
    ' ' +
    `${BOX.v} ` +
    fitR(memKb.toFixed(2), COL_WIDTHS.mem - 2) +
    memStatusIcon +
    ' ' +
    `${BOX.v} ` +
    passText.padEnd(COL_WIDTHS.status) +
    ` ${BOX.v}`; // <-- No extra space after last column before border

  if (delayMs > 0) {
    await new Promise((res) => setTimeout(res, delayMs));
  }
  console.log(zebra(row));
}

/**
 * Prints a beautiful footer and summary.
 */
export function printTableFooter(sep: string, total: number, passed: number) {
  console.log(chalk.magentaBright(sep));
  const summary = chalk.bold(
    `\nSummary: ${chalk.greenBright(`${passed} passed`)} / ${chalk.yellowBright(
      `${total} total`,
    )} (${chalk.cyanBright(`${((passed / total) * 100).toFixed(1)}%`)})\n`,
  );
  console.log(summary);
}
