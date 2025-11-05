import Icon from "../components/icons"

export default class NavMobile {
  iconIndex: number
  aberto: boolean
  fechado: boolean

  constructor(iconIndex: number, aberto: boolean, fechado: boolean) {
    this.iconIndex = iconIndex
    this.aberto = aberto
    this.fechado = fechado
  }

  get icon() {
    return <Icon icon={this.iconIndex} />
  }

  static aberta(): NavMobile {
    return new NavMobile(1, true, false) // ícone "fechar"
  }

  static fechada(): NavMobile {
    return new NavMobile(0, false, true) // ícone "abrir"
  }
}
