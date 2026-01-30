import AstroLogo from '../assets/Logos/astro.svg?raw'

export type LogoData = {
  title: string
  rawPath: string
  hoverColor: string
}

const ASTRO_DATA: LogoData = {
  title: 'Astro',
  rawPath: AstroLogo,
  hoverColor: '#BC52EE',
}

export { ASTRO_DATA }
