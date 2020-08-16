module.exports = {
  tabWidth: 2,
  useTabs: false,
  semi: true, // Add semi-colon at end of the line
  singleQuote: false,
  quoteProps: "as-needed",
  // Trailing commas wherever possible (including function arguments)
  trailingComma: "all",
  // true - { foo: bar }, false - {foo:bar}
  bracketSpacing: true,
  // always - (x) => x, avoid - x => x
  arrowParens: "avoid",
  // Whether or not to indent the code inside <script> and <style> tags in Vue files
  vueIndentScriptAndStyle: true,
  /**
   * "lf" – Line Feed only (\n), common on Linux and macOS as well as inside
   *  git repos
   * "crlf" - Carriage Return + Line Feed characters (\r\n), common on Windows
   */
  endOfLine: "lf",
};
