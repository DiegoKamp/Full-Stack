const apiKeyInput = document.getElementById('apiKey');
// Poderia ser usado também o comando:
// const apiKeyInput = document.querySelector('#apiKey')
const gameSelect = document.getElementById('gameSelect');
const questionInput = document.getElementById('questionInput');
const askButton = document.getElementById('askButton')
const aiResponse = document.getElementById('aiResponse')
const form = document.getElementById('form')

// console.log(questionInput); Indica que o elemento indicado irá aparecer no "inspecionar" do navegador
// É uma forma de debug

const perguntarAI = async (question, game, apiKey) => {
  const model = "gemini-2.5-flash"
  const geminiURL = `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${apiKey}`
  //AIzaSyBYzQJyhHes7J1cslYdQm6d0f3r0byDfkk (apiKey)
  const pergunta = `
  olha, tenho o jogo ${game} e queria saber ${question}

  const contents = [{
    parts: [{
      text: pergunta
    }]
  }]

  //Chamada API a seguir:
  const response = await fetch(geminiURL, {
    method: 'POST',
    headers: {
      'Content-Type': 'aplication/json'
    },
    body: JSON.stringify({
      contents
    })
  })

  const data = await response.json()
  console.log({ data })
  return data
}

const enviarFormulario = async (event) => {
  // Função () => { }
  event.preventDefault()
  //P
  const apiKey = apiKeyInput.value
  const game = gameSelect.value
  const question = questionInput.value
  //Value

  //console.log({ apiKey, game, question })

  if (apiKey == '' || game == '' || question == "") {
    alert('Por favor, preencha todos os campos')
    return
  }
  // Se (apiKey estiver vazia OU game estiver vazio OU question estiver vazio, então alerta a mensagem e retorna, caso contrário, pula a função 'if'

  askButton.disabled = true
  // desabilita o butão
  askButton.textContent = 'Buscando as informações...'
  askButton.classList.add('loading')

  try {
    // Perguntar para a AI
    await perguntarAI(question, game, apiKey)
  } catch (error) {
    console.log('Error ', error)
  } finally {
    askButton.disabled = false
    askButton.textContent = 'Perguntar'
    askButton.classList.remove('loading')
  }



}
form.addEventListener('submit', enviarFormulario)