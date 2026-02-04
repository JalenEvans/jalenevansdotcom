import AstroLogo from '../assets/Logos/astro.svg?raw'
import FastAPI from '../assets/Logos/fastapi.svg?raw'
import FlutterLogo from '../assets/Logos/flutter.svg?raw'
import FirebaseLogo from '../assets/Logos/firebase.svg?raw'
import JavaLogo from '../assets/Logos/java.svg?raw'
import JupyterLogo from '../assets/Logos/jupyter.svg?raw'
import PostgreSQLLogo from '../assets/Logos/postgresql.svg?raw'
import PytorchLogo from '../assets/Logos/pytorch.svg?raw'
import ReactLogo from '../assets/Logos/react.svg?raw'

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

const FASTAPI_DATA: LogoData = {
  title: 'FastAPI',
  rawPath: FastAPI,
  hoverColor: '#009688',
}

const FIREBASE_DATA: LogoData = {
  title: 'Firebase',
  rawPath: FirebaseLogo,
  hoverColor: '#DD2C00',
}

const FLUTTER_DATA: LogoData = {
  title: 'Flutter',
  rawPath: FlutterLogo,
  hoverColor: '#02569B',
}

const JAVA_DATA: LogoData = {
  title: 'Java',
  rawPath: JavaLogo,
  hoverColor: '#EA2D2E',
}

const JUPYTER_DATA: LogoData = {
  title: 'Jupyter',
  rawPath: JupyterLogo,
  hoverColor: '#F37626',
}

const POSTGRESQL_DATA: LogoData = {
  title: 'PostgreSQL',
  rawPath: PostgreSQLLogo,
  hoverColor: '#4169E1',
}

const PYTORCH_DATA: LogoData = {
  title: 'PyTorch',
  rawPath: PytorchLogo,
  hoverColor: '#EE4C2C',
}

const REACT_DATA: LogoData = {
  title: 'React',
  rawPath: ReactLogo,
  hoverColor: '#61DAFB',
}

export const findIcon = (tool: string) => {
  switch (tool) {
    case 'astro':
      return ASTRO_DATA
    case 'fastapi':
      return FASTAPI_DATA
    case 'firebase':
      return FIREBASE_DATA
    case 'flutter':
      return FLUTTER_DATA
    case 'java':
      return JAVA_DATA
    case 'jupyter':
      return JUPYTER_DATA
    case 'postgresql':
      return POSTGRESQL_DATA
    case 'pytorch':
      return PYTORCH_DATA
    case 'react':
      return REACT_DATA
    default:
      throw new Error(`Icon for ${tool} not found.`)
  }
}
