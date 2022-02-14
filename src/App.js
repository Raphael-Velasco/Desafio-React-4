import React, {Component} from 'react'

class Desafio extends Component{
  
  state = {
    Times:[
      {
        nome:"Flamengo",
        Estadio:"Maracanã"
      },
      {
        nome:"Corinthinas",
        Estadio:"Itaquera"
      },
      {
        nome:"Vasco",
        Estadio:"São Januário"
      },
      {
        nome:"Bahia",
        Estadio:"Fonte Nova"
      },
      {
        nome:"Inter",
        Estadio:"Beira Rio"
      },
      {
        nome:"São Paulo",
        Estadio:"Morumbi"
      }
    ]
  }
  render(){
        return(    
    <div>
      <h1>Estadios e Times</h1>
      {this.state.Times.map((item) => (
      <div className="container">
        <h2>{item.nome}</h2>
        <h5>{item.Estadio}</h5>
        </div>
      ))}
    </div>
    )
  }
}
export default Desafio