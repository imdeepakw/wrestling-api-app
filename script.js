document.querySelector('button').addEventListener('click', getWrestler)

async function getWrestler(){
    let wrestlerName = document.querySelector('input').value

    const res = await fetch('/api/' + wrestlerName)
    const data = await res.json()

    console.log(data)

}