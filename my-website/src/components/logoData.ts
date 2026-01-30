import AstroLogo from '../assets/Logos/astro.svg?raw'
import FlutterLogo from '../assets/Logos/flutter.svg?raw'
import FirebaseLogo from '../assets/Logos/firebase.svg?raw'
import JavaLogo from '../assets/Logos/java.svg?raw'

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

const FLUTTER_DATA: LogoData = {
  title: 'Flutter',
  rawPath: FlutterLogo,
  hoverColor: '#02569B',
}

const FIREBASE_DATA: LogoData = {
  title: 'Firebase',
  rawPath: FirebaseLogo,
  hoverColor: '#DD2C00',
}

const JAVA_DATA: LogoData = {
  title: 'Java',
  rawPath: JavaLogo,
  hoverColor: '#EA2D2E',
}

export { ASTRO_DATA, FLUTTER_DATA, FIREBASE_DATA, JAVA_DATA }
