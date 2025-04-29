import './App.css'
import { useForm} from 'react-hook-form'
function App() {
  const { register, watch } = useForm({
    defaultValues: {"filme": "KarateKid2.jpg"}
  })

  function calcularIngresso(){
   
    let valorTotal = 0
    let preco = 0
    let pipoca = 0 
    if (watch("pipocaGrande")){
      pipoca += 10
    }
    if (watch("pipocaFamilia")){
      pipoca += 25
    }

    let ingresso = Number(watch("ingresso"))
    preco = Number((ingresso * 12) + pipoca)
    valorTotal = preco
    if (watch("filme") == "KarateKid2.jpg"){
      preco = Number((ingresso * 15) + pipoca)
      valorTotal = preco
    }

    return `O valor total com os ingressos e pipoca é de R$${valorTotal.toLocaleString("pt-br", {minimumFractionDigits:2})}`
  }





  return (
    <>
     <header>
      <img className='cinema-logo' src='../public/cinema-logo.png'/>
      <div>
      <h1>Cine Pipoca: Sua Diversão em Família!</h1>
      <h2>Venda online de Ingressos dos filmes em cartaz</h2>
      </div>
     </header>
     <main>
      <h1 className='título-main'>Escolha o filme, n° ingressos e pipoca</h1>
      <img className='poster-image' src={watch("filme")}/>
      <div className='wrapper'>
      <label htmlFor="filme">Título do Filme</label>
      <select {...register("filme")}>
        <option value="KarateKid2.jpg">Karate Kid 2 </option>
        <option value="Titanic.jpg">Titanic</option>
        <option value="Indiana Jones.jpg">Indiana Jones</option>
        <option value="Jumanji.jpg">Jumanji</option>
        <option value="GhostBusters.jpg">Ghost Busters</option>
      </select>
      </div>
     <div className='wrapper'>
     <label htmlFor="ingressos">N° de Ingressos:</label>
      <select {...register("ingresso")}>
        <option value='1'>1</option>
        <option value='2'>2</option>
        <option value='3'>3</option>
        <option value='4'>4</option>
        <option value='5'>5</option>
      </select>
     </div>
    
      <p>
        Pipoca:&nbsp;
      <input type="checkbox" name="" id="grande"
      {...register("pipocaGrande")}/>
      <label htmlFor="pipoca">Grande</label>
      <input type="checkbox" name="" id="familia"
      {...register("pipocaFamilia")}/>
      <label htmlFor="pipoca">Família</label>
      </p>
     </main>
     <h2 className='Resposta'>{calcularIngresso()}</h2>
    </>
  )
}

export default App
