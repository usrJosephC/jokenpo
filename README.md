# 🎮 Jokenpô(Pedra, Papel e Tesoura) com Teachable Machine (React + TensorFlow)
![MIT License](https://img.shields.io/badge/license-MIT-yellow?style=for-the-badge)
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![TensorFlow.js](https://img.shields.io/badge/TensorFlow.js-FF6F00?style=for-the-badge&logo=tensorflow&logoColor=white)
![Teachable Machine](https://img.shields.io/badge/Teachable_Machine-4285F4?style=for-the-badge&logo=google&logoColor=white)

Projeto simples utilizando **Google Teachable Machine + React + TensorFlow.js**  
para reconhecer gestos pela webcam e jogar Pedra-Papel-Tesoura contra o computador.

O modelo de visão computacional identifica:
- ✊ Pedra
- ✋ Papel
- ✌️ Tesoura
- Nada (nenhum gesto)



---

## 🚀 Demonstração

O jogador:
1. Mostra o gesto para a câmera
2. Clica em **Jogar**
3. Contagem 3..2..1..
4. O modelo congela a previsão
5. O computador sorteia a jogada
6. Resultado é exibido + placar atualizado

---

## 💻 Tecnologias Utilizadas

O projeto foi construído utilizando as seguintes tecnologias:

- **React:** Interface e componentes do jogo  
- **Vite:** Build tool rápida para desenvolvimento  
- **Tailwind CSS:** Estilização moderna utility-first  
- **TensorFlow.js:** Execução do modelo de IA no navegador  
- **Teachable Machine:** Treinamento do modelo de visão computacional  

---

## 📁 Estrutura do projeto

````bash
src/
 └── components/
      ├── Game.jsx              # Lógica das rodadas e placar
      └── WebcamClassifier.jsx  # Integração com o modelo e câmera
public/
 └── model/                    # Arquivos .json e .bin do modelo IA
````

---

## ⚙️ Como rodar localmente

### 1. Clonar repositório
```bash
git clone https://github.com/usrJosephC/jokenpo.git
cd jokenpo
```
### 2. Instalar dependências
```bash
npm install
```
### 3. Rodar projeto
```bash
npm run dev
```
O projeto estará disponível em: [http://localhost:5173](http://localhost:5173)


---
## 🧪 Como treinar o modelo

### 1. Acesse o [Teachable Machine](https://teachablemachine.withgoogle.com/)

### 2. Novo projeto → Image

### 3. Crie classes:
- Pedra
- Papel
- Tesoura
- Nada

### 4. Treine

### 5.Export → Tensorflow.js → Download

### 6. Copie os arquivos para:
```swift
public/model
```

---

## 🎯 Funcionalidades

- ✔ Reconhecimento de gestos em tempo real
- ✔ Contagem regressiva
- ✔ Congelamento da previsão
- ✔ CPU aleatória
- ✔ Placar
- ✔ Interface com Tailwind

## 📸 Ideias de melhorias

- Sons de contagem
- Animações
- Multiplayer local
- Dificuldade IA
- Histórico de partidas
- Deploy no Vercel
---
Feito com ❤️ por **Joseph Cavalcante**.