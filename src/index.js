const listNode = document.getElementById('envs')

const envsList = ENVS_LIST;
Object.entries(envsList).forEach(([key, value]) => {
  const newNode = document.createElement('LI')
  newNode.innerHTML = `${key}: ${value}`
  listNode.appendChild(newNode)
})
