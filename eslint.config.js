import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import { defineConfig, globalIgnores } from 'eslint/config'

// ESLint core no-unused-vars no reconoce el uso de un identificador cuando
// aparece como <Namespace.Componente /> en JSX (JSXMemberExpression), lo que
// genera falsos positivos con librerías como framer-motion (<motion.div />).
// Esta regla local, sin dependencias externas, marca ese identificador como
// usado para que no-unused-vars funcione correctamente.
const jsxNamespaceUsage = {
  rules: {
    'mark-namespace-used': {
      create(context) {
        return {
          JSXMemberExpression(node) {
            if (node.object.type === 'JSXIdentifier') {
              context.sourceCode.markVariableAsUsed(node.object.name, node)
            }
          },
        }
      },
    },
  },
}

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{js,jsx}'],
    plugins: { 'jsx-namespace': jsxNamespaceUsage },
    extends: [
      js.configs.recommended,
      reactHooks.configs.flat.recommended,
      reactRefresh.configs.vite,
    ],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
      parserOptions: {
        ecmaVersion: 'latest',
        ecmaFeatures: { jsx: true },
        sourceType: 'module',
      },
    },
    rules: {
      'no-unused-vars': ['error', { varsIgnorePattern: '^[A-Z_]' }],
      'jsx-namespace/mark-namespace-used': 'error',
    },
  },
])
