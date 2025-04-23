# App Loja - Catálogo de Produtos

Aplicativo mobile desenvolvido com React Native e Expo Router para a disciplina de Desenvolvimento de Dispositivos Móveis.

## Funcionalidades

- Navegação por categorias de produtos
- Visualização de produtos por categoria
- Detalhes do produto
- Interface moderna e responsiva
- Navegação baseada em tabs e stack

## Tecnologias Utilizadas

- React Native
- Expo
- Expo Router
- TypeScript

## Estrutura do Projeto

```
app/
├── _layout.tsx          # Layout principal com navegação em tabs
├── index.tsx            # Tela inicial
├── about.tsx            # Tela sobre o desenvolvedor
├── categories/          # Navegação de categorias
│   ├── _layout.tsx     # Layout de stack para categorias
│   ├── index.tsx       # Lista de categorias
│   └── [id].tsx        # Produtos da categoria
└── product/            # Detalhes do produto
    └── [id].tsx        # Página de detalhes do produto
```

## Como Executar o Projeto

1. Clone o repositório:
```bash
git clone [URL_DO_REPOSITÓRIO]
```

2. Instale as dependências:
```bash
npm install
```

3. Inicie o projeto:
```bash
npm start
```

4. Escaneie o QR code com o aplicativo Expo Go ou execute em um emulador/simulador.

## Desenvolvedor

- Nome: Davi
- Curso: Engenharia de Software
- Período: 5º
- Disciplina: Desenvolvimento de Dispositivos Móveis
- Professor: Roginaldo Franco

# Welcome to your Expo app 👋

This is an [Expo](https://expo.dev) project created with [`create-expo-app`](https://www.npmjs.com/package/create-expo-app).

## Get started

1. Install dependencies

   ```bash
   npm install
   ```

2. Start the app

   ```bash
    npx expo start
   ```

In the output, you'll find options to open the app in a

- [development build](https://docs.expo.dev/develop/development-builds/introduction/)
- [Android emulator](https://docs.expo.dev/workflow/android-studio-emulator/)
- [iOS simulator](https://docs.expo.dev/workflow/ios-simulator/)
- [Expo Go](https://expo.dev/go), a limited sandbox for trying out app development with Expo

You can start developing by editing the files inside the **app** directory. This project uses [file-based routing](https://docs.expo.dev/router/introduction).

## Get a fresh project

When you're ready, run:

```bash
npm run reset-project
```

This command will move the starter code to the **app-example** directory and create a blank **app** directory where you can start developing.

## Learn more

To learn more about developing your project with Expo, look at the following resources:

- [Expo documentation](https://docs.expo.dev/): Learn fundamentals, or go into advanced topics with our [guides](https://docs.expo.dev/guides).
- [Learn Expo tutorial](https://docs.expo.dev/tutorial/introduction/): Follow a step-by-step tutorial where you'll create a project that runs on Android, iOS, and the web.

## Join the community

Join our community of developers creating universal apps.

- [Expo on GitHub](https://github.com/expo/expo): View our open source platform and contribute.
- [Discord community](https://chat.expo.dev): Chat with Expo users and ask questions.
