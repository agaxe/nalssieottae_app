module.exports = {
  arrowParens: 'avoid',
  bracketSameLine: true,
  bracketSpacing: true,
  singleQuote: true,
  trailingComma: 'all',
  importOrder: [
    '^react$',
    '^react-nativet$',
    '<THIRD_PARTY_MODULES>',
    '^@/screens/(.*)',
    '^@/components/(.*)',
    '^@/(shared|utils|context|hooks|lib|pages|routes|services|styles|ui|assets)/?(.*)$',
    '^[./]',
  ],
  importOrderSeparation: false,
};
